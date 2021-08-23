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
            <SpecificPageOne />
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> ยืนยัน </v-btn>
          <v-btn text> เคลียร์ข้อมูล </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2"> page 2 </v-stepper-step>

        <v-stepper-content step="2">
          <v-card class="mb-12" elevation="2" outlined shaped>
            <SpecificCostDetails
          /></v-card>
          <v-btn color="primary" @click="e6 = 3"> ยืนยัน </v-btn>
          <v-btn text> เคลียร์ข้อมูล </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {
    SpecificPageOne: () => import('~/components/specific/SpecificPageOne.vue'),
    SpecificCostDetails: () =>
      import('~/components/specific/SpecificCostDetails.vue'),
  },
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
