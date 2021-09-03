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
      // color: '', // (3)
      id_file: '',
    }
  },
  watch: {
    msg() {
      this.sayHello()
      this.adddate()
      console.log('msg child')
    },
  },
  methods: {
    sayHello() {
      console.log('id_file', this.id_file)
    },
    adddate() {
      this.sayHello()
      console.log('id_fileeee', this.id_file)
      this.color = this.id_file
      console.log('test emit', this.$emit('createColor', this.color))
    },
  },
}
</script>

<style scoped></style>
