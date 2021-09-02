<template lang="html">
  <div>
    <div v-for="budgets in budget" :key="budgets._id">
      <v-card
        class="mx-4 my-4"
        v-for="budgetones in budgets.budgetone"
        :key="budgetones.id_file"
      >
        <router-link :to="{ path: 'TestPage/612f3a1124ca985f64ef896a' }">
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
        </router-link>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      budget: [],
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
    // handleSearchManga() {
    //   console.log('e')
    //   // const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
    //   const url = `http://localhost:5000/bugetones`
    //   axios.get(url).then((res) => {
    //     console.log(res.data)
    //     //   this.results = res.data
    //   })
    // },
  },
  mounted() {
    this.getall()
  },
}
</script>

<style lang="css" scoped></style>
