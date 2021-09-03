<template>
  <div>
    <Budgetall />
  </div>
</template>

<script>
export default {
  components: {
    Budgetall: () => import('~/components/budget/budgetall.vue'),
  },
}
</script>

<style></style>
