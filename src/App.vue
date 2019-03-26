<template>
  <div id="app">
    <h1>
      {{user}}
    </h1>
    <button @click="updateName">Click</button>
  </div>
</template>

<script>
export default { // sads
  name: 'pickles',
  computed: {
    user:{
      get() {
        return this.$store.user.state.name
      }
    }
  },
  methods: {
    updateName() {
        this.$store.viewer.mutations.updateName("damien");
      }
  }
}
</script>

