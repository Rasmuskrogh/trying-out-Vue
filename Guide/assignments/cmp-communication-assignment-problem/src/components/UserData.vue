<template>
  <input type="text" placeholder="Username" v-model="enteredName" />
  <input type="number" placeholder="Age" v-model="enteredAge" />
  <button @click="setNewValues">Set User Data</button>
</template>

<script>
export default {
  emits: ['new-values'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    setNewValues() {
      this.$emit('new-values', this.enteredName, this.enteredAge);
    },
  },
};
</script>
