<template>
  <div>
    <Alltable />
  </div>
</template>

<script>
export default {
  components: {
    // getbudget: () => import('~/components/getbudget.vue')
    // Allbudget: () => import('~/components/get_allbudget.vue'),
    Alltable: () => import('~/components/budget/get_alltable.vue'),
  },
}
</script>

<style></style>
