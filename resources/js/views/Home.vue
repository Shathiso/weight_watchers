<template>
  <div class="tw-bg-gradient-to-r tw-from-gray-400 tw-via-gray-300 tw-to-gray-300 tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-w-full tw-lg:flex-row tw-min-h-screen tw-relative" id="home-wrapper">
   
    <navigation-top />
    <div class="tw-w-full tw-min-h-screen tw-z-20 tw-absolute" style="background-color:#00b0a3" id="overlay-start"></div>
    <div class="tw-w-full tw-min-h-screen tw-z-10 tw-absolute" style="background-color:#00b0a3" id="overlay-shrink"></div>
    
    <div class="tw-w-6/12 tw-mx-auto tw-relative tw-z-10 tw-text-center" >
      <img :src="hero_img_url"  class="tw-absolute tw-w-60 tw-h-auto tw-z-10 tw--mt-60 tw-left-60 tw-mx-auto" />
      <h1 class="tw-text-white tw-relative tw-font-semibold tw-text-7xl tw-z-20 tw-mt--30" style="color:#00b0a3" id="hero-text-weight">WEIGHT</h1>
      <h1 class="tw-font-light tw-relative tw-text-6xl tw-z-20 tw-text-white tw-mt-5" id="hero-text-watchers">WATCHERS</h1>
    </div>

    <div class="media tw-absolute tw-right-4 tw-bottom-8 tw-mr-6">
      <ul>
        <li class="tw-inline-block tw-ml-2"><img :src="twitter_img_url" class="tw-w-7 " /></li>
        <li class="tw-inline-block tw-ml-2"><img :src="facebook_img_url" class="tw-w-7 " /></li>
        <li class="tw-inline-block tw-ml-2"><img :src="instagram_img_url" class="tw-w-7 " /></li>
      </ul>
    </div>
  </div>
</template>

<script>

  import lady from "../assets/images/lady.png"
  import twitter from "../assets/images/twitter.png"
  import facebook from "../assets/images/facebook.png"
  import instagram from "../assets/images/instagram.png"
  import gsap from "gsap"
  import NavigationTop from '../components/NavigationTop.vue';

  export default {
    name: 'Home',

    components:{
      NavigationTop
    },

    data: () => ({
      hero_img_url: lady,
      twitter_img_url: twitter,
      facebook_img_url: facebook,
      instagram_img_url: instagram
    }),

    methods:{
      source(src) {
        const baseUrl = location.protocol + "//" + location.host + '/';
        return baseUrl + src;
      }
    },

    mounted() {
       let tl = new gsap.timeline();
       tl.to('#overlay-start', 3, {opacity:0, zIndex:1})
         .to('#overlay-shrink', 1, {minHeight: 225, width:225, zIndex: 4, top:0, x: 0}) //"-=0.25"
         .from('#logo-txt-weight', 0.5, {opacity:0, left: -50})
         .from('#logo-txt-watchers', 0.5, {opacity:0, right: -50})
         .staggerFrom("#nav-links .link", 0.5, {opacity:0, x: -10})
         .from('#hero-text-weight', 0.5, {y: -10, opacity:0}, '#hero-text-weight')
         .from('#hero-text-watchers', 0.5, {y: 10, opacity:0,}, '#hero-text-weight')
         .from('.media', 0.5, {x: 10, opacity:0,},)
    }
  }
</script>

<style scoped>
 #man{
   background: url('../../assets/images/man.png') no-repeat;
 }

 #hero-text-weight, #hero-text-watchers{
   text-shadow: 1px 2px 7px rgba(58, 58, 58, 0.5);
 }
</style>
