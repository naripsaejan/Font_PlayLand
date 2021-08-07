<template>
  <div id="app">
    <div class="d-flex justify-center">
      <img width="50%" height="50%" src="@/assets/img/logo/playland.png" />
    </div>
    <div class="d-grid justify-center">
      <v-col style="width: 300px" class="px-0">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>

      <v-col style="width: 300px" class="px-0">
        <v-text-field
          v-model="password"
          label="EmailPassword"
          type="password"
        ></v-text-field>
      </v-col>
      <v-btn @click="handleLoginClicked">Login</v-btn>
    </div>
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
        if (response.data.success) {
          this.$router.replace({ name: 'blogs' })
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style scoped></style>
