<template>
  <form @submit.prevent="sayHello">
    <v-text-field v-model="id_file" label="เลขที่เอกสาร"></v-text-field>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'child',
  props: ['msg'],
  data() {
    return {
      color: '', // (3)
      id_file: '',
    }
  },
  watch: {
    msg() {
      this.sayHello()
      this.adddate()
      console.log('msg')
    },
  },
  methods: {
    sayHello() {
      console.log('id_file', this.id_file)
    },
    adddate() {
      console.log('id_fileeee', this.id_file)
      axios.post('https://playlandbackend.herokuapp.com/posts/', {
        description: this.id_file,
        date: 'test',
      })
    },
  },
}
</script>

<style scoped></style>
