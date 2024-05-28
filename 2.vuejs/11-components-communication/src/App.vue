<template>
  <h1 class="text-center text-5xl pt-5">Active Users List</h1>
  <active-user></active-user>
  <user-data></user-data>
</template>

<script setup>
import ActiveUser from "@/components/ActiveUser.vue";
import UserData from "@/components/UserData.vue";
</script>

<script>
export default {
  components: [ActiveUser, UserData]
}
</script>