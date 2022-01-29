<template>
  <div class="tw-absolute xl:tw-w-1/6 tw-max-w-sm  tw-z-20 tw-pb-2">
    <a href="/" class="tw-text-left tw-absolute tw-left-0 tw-pt-0 tw-pl-10 tw--top-20 tw-w-full tw-block tw-text-white" style=" font-family: 'Montserrat', sans-serif;">
    <span class="tw-text-white tw-font-bold tw-capitalize tw-text-4xl" id="logo-txt-weight"> WEIGHT </span> <span class="tw-text-black tw-ml-1" id="logo-txt-watchers">WATCHERS</span>
    </a>
    <div class="tw-text-right tw-relative tw-block tw-mt-40 tw-z-20 tw-text-black" id="nav-links" >
      <router-link 
        @mouseover.native="animateHover($event)" 
        @mouseleave.native="animateHoverOut($event)" 
        color="primary" 
        to="/" 
        class="tw-block tw-mt-2 tw-font-medium tw-uppercase tw-no-underline  tw-text-2xl link" 
        id="link1">
        Home
      </router-link>
      <router-link 
        @mouseover.native="animateHover($event)" 
        @mouseleave.native="animateHoverOut($event)" 
        to="/login" 
        class="tw-block tw-mt-4 tw-font-medium tw-uppercase  tw-transition-all hover:tw-translate-x-3 tw-no-underline  tw-text-2xl link" 
        id="link2">
        Login
      </router-link>
      <router-link 
        @mouseover.native="animateHover($event)" 
        @mouseleave.native="animateHoverOut($event)" 
        to="/register" 
        class="tw-block tw-mt-4 tw-font-medium tw-uppercase  tw-transition-all hover:tw-translate-x-3 tw-no-underline  tw-text-2xl link" 
        id="link3">
        Register
      </router-link>
    </div>
  </div>
  
</template>

<script>
import gsap from "gsap"

export default {
  name:  'NavigationTop',

  data () {
    return{
      
    }
  },

  mounted() {

  }, 


  methods: {
     animateHover(el) {
        let element = el.target;
       gsap.to(element, 0.25, {
        xPercent: 10, 
        color:'rgb(0, 176, 163)',
        scale:1.1
      });
     },

    animateHoverOut(el) {
        let element = el.target;
       gsap.to(element, 0.25, {
        xPercent: 0, 
        color:'white',
        scale: 1,
      });
     }
  }
}
</script>

<style scoped>
  #nav-links a{
    text-shadow: -1px 1px 3px rgb(58 58 58 / 38%);
  }

  #nav-links .link:hover, a:hover{
    text-decoration:none;
  }
</style>