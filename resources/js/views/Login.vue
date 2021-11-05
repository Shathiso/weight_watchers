<template>
  <div class="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-w-full tw-lg:flex-row tw-min-h-screen tw-mix-blend-multiply" id="login-wrapper">
    <div class="tw-w-full  md:tw-h-6/6 lg:tw-w-3/6 tw-relative  tw-z-10 lg:tw-pl-20 sm:tw-pl-0.5">
      <h1 class=" tw-font-semibold tw-text-6xl tw-text-white tw-block tw-w-full tw-h-auto tw-text-shadow-md">LOGIN</h1>

      <p class="tw-font-light tw-text-5xl tw-block tw-w-full tw-h-auto tw-text-shadow-md tw-ml-5 xs:tw-ml-0 tw-mt-2" style="color:#00b0a3"><span class="tw-font-medium">Take</span> control today..</p>
    </div>
    <div class="tw-w-full md:tw-w-5/12 md:tw-mr-auto  tw-shadow-xl tw-relative tw-z-10" id="login-card">
      <v-card flat class="tw-p-5">
        <v-snackbar
          v-model="snackbar"
          absolute
          top
          right
          color="success"
        >
          <span>Login successful!</span>
          <v-icon dark>
            mdi-checkbox-marked-circle
          </v-icon>
        </v-snackbar>
        <v-form
          ref="form"
          @submit.prevent="submit"
        >
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="form.email"
                  :rules="rules.email"
                  color="orange"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  v-model="form.password"
                  :rules="rules.password"
                  color="orange"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn
              :disabled="!formIsFilled"
              text
              color="primary"
              type="submit"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        email: '',
        password: ''
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          email: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
          password: [val => (val || '').length > 0 || 'This field is required'],
        },
        snackbar: false,
        defaultForm,
      }
    },

    computed: {
    },

    methods: {
      formIsFilled () {
        return (
          this.form.name &&
          this.form.email &&
          this.form.age
        )
      },
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
}
</script>

<style>
  #login-wrapper{
    background: url('/images/login.jpg') no-repeat;
    background-size: cover;
    background-position: top -150px center;
  }

  #login-wrapper:after {
    position: absolute;
    background: rgba(0,0,0,0.4);
    width: 100%;
    height: 100vh;
    content: ".";
    color: transparent;
    top: 0;
    z-index: 0;
    left: 0;
  }

  #login-card{
    opacity: 0.9;
  }
</style>