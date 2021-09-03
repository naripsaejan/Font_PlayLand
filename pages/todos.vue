<template>
  <div>
    <div>{{ fullName }}</div>
    <div v-for="fullNames in this.setName" :key="fullNames">
      {{ fullNames }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      firstName: '1',
      lastName: '2',
    }
  },
  computed: {
    ...mapGetters({
      fullName: 'budget/getAllPost',
    }),
  },
  methods: {
    ...mapActions({
      setName: 'budget/setName',
    }),
    handleClick() {
      let name = {
        firstName: this.firstName,
        lastName: this.lastName,
      }
      this.setName(name)
    },
  },
  mounted() {
    console.log('sds1')
    this.setName()
    console.log('sds2')
  },
}
</script>
