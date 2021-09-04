<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1"> page 1 </v-stepper-step>

        <v-stepper-content step="1" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            style="max-width: 1000px"
            outlined
            shaped
          >
            <BudgetPageOne @createpangone="testpageone" :call_fun="call_fun" />
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> หน้าถัดไป </v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>
        <v-stepper-content step="2" class="d-flex justify-center">
          <v-card
            class="mb-12"
            elevation="2"
            outlined
            shaped
            style="max-width: 1000px"
          >
            <BudgetPageTwo @createpangtwo="testpagetwo" :call_fun="call_fun" />
          </v-card>
          <v-btn color="primary" @click="e6 = 3">หน้าถัดไป</v-btn>
          <v-btn color="primary" @click="e6 = 1"> ย้อนกลับ </v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 3" step="3"> page 3 </v-stepper-step>
        <v-stepper-content
          step="3"
          class="d-flex justify-center"
          elevation="2"
          outlined
          shaped
        >
          <v-card
            class="mb-12"
            elevation="2"
            outlined
            shaped
            style="max-width: 1000px"
          >
            <BudgetPageTree
              @createpangthree="testpagethree"
              :call_fun="call_fun"
            />
          </v-card>
          <!-- <v-btn color="primary" @click="e6 = 4">หน้าถัดไป</v-btn> -->
          <v-btn color="primary" @click="e6 = 2">ย้อนกลับ</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
    <v-btn @click="call_fun = !call_fun">call fun</v-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['item'],
  components: {
    BudgetPageOne: () => import('~/components/budget/BudgetPageOne.vue'),
    BudgetPageTwo: () => import('~/components/budget/BudgetPageTwo.vue'),
    BudgetPageTree: () => import('~/components/budget/BudgetPageTree.vue'),
  },
  data() {
    return {
      e6: 1,
      show: false,
      call_fun: null,
      word: [],
      budgetones: [],
    }
  },
  methods: {
    async testpageone(budgetonesend) {
      await console.log('testpageone', (this.budgetones = budgetonesend))
      // let words = ['one', 'two', 'three', 'four'];
      // await budgetonesend.forEach((word) => {
      //   console.log('testpageone3', word)
      // })
    },
    async testpagetwo(budgettwosend) {
      await console.log('testpagetwo', (this.budgettwos = budgettwosend))
    },
    async testpagethree(budgetthreesend) {
      await console.log('testpagethree', (this.budgetthrees = budgetthreesend))
      this.addGin()
    },
    addGin() {
      console.log('111', this.budgetones)
      axios.post('http://localhost:5000/api/v1/budget/', {
        budgetone: this.budgetones,
        budgettwo: this.budgettwos,
        budgetthree: this.budgetthrees,
      })
    },
    // pagesubmit() {
    //   console.log('asdas')
    //   this.$emit('')
    //   // e6 = 2
    // },
  },
}
</script>

<style lang="scss" scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
