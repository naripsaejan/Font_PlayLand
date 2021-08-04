<template>
  <div id="app">
    <v-app id="inspire">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1"> page 1 </v-stepper-step>

        <v-stepper-content step="1">
          <v-card class="mb-12"> <BudgetPageOne /></v-card>
          <v-btn color="primary" @click="e6 = 2"> ยืนยัน </v-btn>
          <v-btn text> เคลียร์ข้อมูล </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            color="secondary lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3"> page 3 </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            color="secondary lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4"> View setup instructions </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="secondary lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
import BudgetPageOne from '@/components/budget/BudgetPageOne.vue'
export default {
  components: { BudgetPageOne },
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
