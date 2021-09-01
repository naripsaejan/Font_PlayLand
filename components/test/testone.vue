<template>
  <form @submit.prevent="saveColor">
    <div class="form-group">
      <input
        ref="inputColor"
        type="text"
        class="form-control"
        :placeholder="hint"
        v-model="color"
      />
      // (2)
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  props: ['hint'],
  data() {
    return {
      color: '', // (3)
    }
  },
  methods: {
    saveColor() {
      // (4)
      console.log('//4')
      this.$emit('createColor', this.color)
    },
  },
  mounted() {
    // (2)
    console.log('//2')

    this.$refs.inputColor.focus()
  },
}
</script>
