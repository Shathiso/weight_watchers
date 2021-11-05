<template>
  <div class="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-w-full tw-lg:flex-row tw-min-h-screen" id="home-wrapper">
    <div class="tw-w-6/12 tw-mx-auto tw-relative tw-z-10 tw-text-center">
      <h1 class="tw-text-white tw-font-semibold tw-text-7xl tw-z-10 tw-mt--30" style="color:#00b0a3">WEIGHT</h1>
      <h1 class="tw-font-light tw-text-5xl tw-z-10 tw-text-white tw-mt-5">WATCHERS</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
    }),
  }
</script>

<style scoped>
  #home-wrapper{
    background: url('/images/home.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
  }

  #home-wrapper:after {
    position: absolute;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    content: ".";
    color: transparent;
    top: 0;
    z-index: 0;
    left: 0;
  }
</style>
