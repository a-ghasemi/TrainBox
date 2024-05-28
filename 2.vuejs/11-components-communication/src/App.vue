<template>
  <h1 class="text-center text-5xl pt-5 pb-3">Active Users List</h1>
  <user-data @add-user="updateUsers"></user-data>
  <div class="mt-10">
    <active-user v-for="user in users" :key="user.id" v-bind="user" @delete-user="removeUser"></active-user>
  </div>
</template>

<script setup>
import ActiveUser from "@/components/ActiveUser.vue";
import UserData from "@/components/UserData.vue";
</script>

<script>
export default {
  components: [ActiveUser, UserData],
  data(){
    return {
      users: [
        {
          id: 1,
          username: 'John',
          age: 20,
        },
        {
          id: 2,
          username: 'Due',
          age: 39,
        },
      ]
    };
  },
  methods: {
    updateUsers(id, username, age){
      const user = {
        id: id,
        username: username,
        age: age,
      };

      this.users.unshift(user);
    },
    removeUser(id){
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}
</script>