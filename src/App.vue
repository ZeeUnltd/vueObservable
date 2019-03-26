<template>
  <div id="app">
    <h1>
      {{count}}
    </h1>
    <button @click="updateCount">Click</button>
  </div>
</template>

<script>
export default {
  name: "pickles",
  computed: {
    count: {
      get() {
        return this.$store.user.getters.getCount();
      }
    }
  },
  methods: {
    updateCount() {
      this.$store.viewer.mutations.updateCount();
    }
  }
};
</script>

