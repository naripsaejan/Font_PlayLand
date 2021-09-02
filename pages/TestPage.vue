<template lang="html">
  <div>
    <div class="d-flex flex-wrap justify-center">
      <p>sdsd</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      budget: [],
    }
  },
  watch: {
    $route(to, from) {
      alert(to.params.id_fild)
    },
  },
  created() {
    alert(this.$route.params.id_fild)
  },
  methods: {
    getall() {
      console.log('e')
      const url = `http://localhost:5000/bugetones`
      // const url = `http://localhost:5000/bugetones/612dd36d6894783228f80d2c`
      axios.get(url).then((res) => {
        this.budget = res.data
      })
    },
    handleSearchManga() {
      console.log('e')
      // const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
      const url = `http://localhost:5000/bugetones`
      axios.get(url).then((res) => {
        console.log(res.data)
        //   this.results = res.data
      })
    },
  },
  mounted() {
    this.getall()
  },
}
</script>

<style lang="css" scoped></style>
