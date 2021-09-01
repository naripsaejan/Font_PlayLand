<template>
  <div>
    <AppCreate hint="Color" @createColor="addColor"
      >Enter your favorite color</AppCreate
    >
  </div>
</template>

<script>
// import Create from './Create.vue'
export default {
  props: ['hint'],
  components: {
    AppCreate: Create,
  },
  data() {
    return {
      colors: ['red', 'gree', 'blug'],
    }
  },
  computed: {},
  methods: {
    addColor(color) {
      console.log('addColor1')
      this.colors.push(color) // (2)
    },
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<style></style>
