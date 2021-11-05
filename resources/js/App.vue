<template>
  <v-app>
    <navigation-top />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationTop from './components/NavigationTop.vue';


export default {
  name: 'App',

  components: {
    NavigationTop

  },

  data: () => ({
    //
  }),
};
</script>
