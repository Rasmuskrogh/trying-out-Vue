<template>
  <h1>Upp-gift-1</h1>
  <active-user :username="user.name" :age="user.age"></active-user>
  <user-data @new-values="newValues"></user-data>
</template>

<script>
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue';
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: 'Rasmus Krogh-Andersen',
        age: 32,
      },
    };
  },
  methods: {
    newValues(name, age) {
      const newUser = {
        name: name,
        age: age,
      };
      this.user = newUser;
    },
  },
};
</script>
