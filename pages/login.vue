<template>
  <div id="app ">
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field
      v-model="password"
      label="EmailPassword"
      type="password"
    ></v-text-field>
    <v-btn @click="handleLoginClicked">Login</v-btn>
  </div>
</template>
<script>
export default {
  layout: 'session',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLoginClicked() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.email, password: this.password } },
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
