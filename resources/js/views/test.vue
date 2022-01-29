<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-relative ">
    <div class="tw-w-40">
      <p><span><img class="tw-w-80 tw-relative tw-inline-block" src="https://photo-cdn2.icons8.com/iGHpZ0clnQuMGrLySTHEw7QM_osYZh-wZJC0bWGc0pw/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjMwLzU0MTUx/MGE4LTk0MTQtNDYy/Mi05NTFlLTJiZTg1/ZjQ0ZTYwZC5qcGc.jpg" /></span></p>
      <div><p><span><img class="tw-w-80 tw-relative tw-inline-block" src="https://photo-cdn2.icons8.com/l1fPa9yOl1YhD9fiHLD0zEoz0oEmzZjPkUco5yT1OsA/rs:fit:714:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg" /></span></p></div>
      <p><span><img class="tw-w-80 tw-relative tw-inline-block" src="https://photo-cdn2.icons8.com/bM31dNXAAKt2aTjwAfD49VvWzZZqS5XHXYDxkcPQYA8/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDIxL2UxMDhh/ZDMzLWFjN2MtNDFh/ZC04ZTgyLWZkMDlj/NzBkZDM1OS5qcGc.jpg" /></span></p>
      <span><img class="tw-w-80 tw-relative tw-inline-block" src="https://photo-cdn2.icons8.com/padapDCcoTyZ1wb_Ju64HcDVU09V0k_vbGZ-Lo9UXWU/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDQ4LzE5NTNk/MjA4LTNhZmQtNDFl/Yi1iZTNiLWY3MWJl/YTZkOTg1MS5qcGc.jpg" /></span>
    </div>
  <v-dialog 
    class="tw-relative tw-justify-center tw-items-center tw-overflow-hidden"
    width="300"
    hide-overlay
    v-model="imgDialog">
    <div class="tw-absolute tw-right-2 tw-top-2" icon dark @click="imgDialog = false">X</div>
    <img :src="selectedImgSrc" class="tw-w-full tw-h-auto" />
  </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
   return {
     selectedImgSrc : '',
     imgDialog: false
   }
  },

  updated(){
    document.querySelectorAll('img').forEach(item => {
      item.addEventListener('click', event => {
        console.log(item.src);
      this.selectedImgSrc =item.src;
      this.imgDialog = true;
     })
   })
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    position:relative;
    display:inline-block;
    cursor: pointer;
  }
</style>