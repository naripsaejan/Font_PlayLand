<template lang="html">
  <div>
    <div v-for="budgets in budget" :key="budgets._id">
      {{ budgets._id }}
      <!-- <v-card
        :to="poslink(budgets._id)"
        class="mx-4 my-4"
        v-for="budgetones in budgets.budgetone"
        :key="budgetones.id_file"
      >       -->
      <v-card
        class="mx-4 my-4"
        v-for="budgetones in budgets.budgetone"
        :key="budgetones.id_file"
        @click="poslink(budgets._id)"
      >
        <!-- <router-link :to="{ path: 'TestPage/612f3a1124ca985f64ef896a' }"> -->
        <v-list-item three-line>
          <v-list-item-content>
            <v-col class="d-flex justify-space-between">
              <div>
                เลขที่เอกสาร :
                <span>{{ budgetones.id_file }}</span>
              </div>
              <div>แบบเสนอราคาสำหรับเบิกจ่ายงบประมาณ</div>
              <div>
                ผู้เสนอ :
                <span>{{ budgetones.presenter }}</span>
              </div>
              <div>
                วันที่เอกสาร :
                <span>{{ budgetones.date_file }}</span>
              </div>
            </v-col>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <!-- <nuxt-link>new form</nuxt-link> -->
      <!-- <nuxt-link :to="poslink">new form</nuxt-link> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      // id: this.$route.params._id,
      // id: '61329488d2bc015578cfa0ee',
      budget: [],
      // _id: 'aa',
      // budget_id: '111',
    }
  },
  methods: {
    getall() {
      const url = `http://localhost:5000/api/v1/budget`
      axios.get(url).then((res) => {
        this.budget = res.data
        console.log('testget', this.budget)
      })
    },
    viewDetail(_id) {
      console.log('viewDetail', _id)

      console.log(this.$emit('viewDetail', (this.budget_id = _id)))
    },
    // handleSearchManga() {
    //   console.log('e')
    //   // const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
    //   const url = `http://localhost:5000/bugetones`
    //   axios.get(url).then((res) => {
    //     console.log(res.data)
    //     //   this.results = res.data
    //   })
    // },
    poslink(_id) {
      console.log('test', _id)
      console.log(this.$emit('viewDetail', (this.budget_id = _id)))
      localStorage.setItem('localsetid', _id)
      // return (window.location.href = '/budgetall/' + _id)
      return (window.location.href = '/budgets/budgetall/')
    },
  },
  computed: {
    // poslink() {
    //   return '/budgetall/' + this._id
    // },
  },
  mounted() {
    console.log('checkid', this.$route)
    this.getall()
  },
}
</script>

<style lang="css" scoped></style>
