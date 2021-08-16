<template>
  <div class="mx-5 mt-5">
    <p>Our Url is: {{ $this.baseUrl }}</p>
  </div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex'

export default {
  middleware: 'auth',
  data: {},
  computed: {
    // ...mapState({ history: (state) => state.history }),
  },
  methods: {
    // testload() {
    //   console.log('work load')
    // },
  },
  watch: {},
  mounted() {
    // this.history()
    // this.testload()
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] {
  margin: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>
