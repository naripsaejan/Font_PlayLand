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
            <BudgetPageOne :call_fun="call_fun" />
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
            <BudgetPageTwo :call_fun="call_fun" />
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
            <BudgetPageTree :call_fun="call_fun" />
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
    }
  },
  methods: {
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
