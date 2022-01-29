<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),

  watch: {
  }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap');
  body, .v-application {
    font-family: 'Montserrat', sans-serif;
    max-height: 100vh;
    max-width: 100%;
    overflow: hidden;
  }

</style>