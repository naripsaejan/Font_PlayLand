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
            <BudgetPageOne />
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> ยืนยัน </v-btn>
          <v-btn text> เคลียร์ข้อมูล </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>

        <v-stepper-content step="2">
          <v-card class="mb-12" elevation="2" outlined shaped>
            <CostDetails
          /></v-card>
          <v-btn color="primary" @click="e6 = 3"> ยืนยัน </v-btn>
          <v-btn text> เคลียร์ข้อมูล </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3"> page 3 </v-stepper-step>

        <v-stepper-content step="3" elevation="2" outlined shaped>
          <v-card class="mb-12"> <ConsiderPurchasing /></v-card>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
import BudgetPageOne from '~/components/budget/BudgetPageOne.vue'
import CostDetails from '~/components/budget/CostDetails.vue'
import ConsiderPurchasing from '~/components/budget/ConsiderPurchasing.vue'
export default {
  components: { BudgetPageOne, CostDetails, ConsiderPurchasing },
  data() {
    return {
      e6: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
