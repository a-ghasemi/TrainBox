<template>
  <form @submit.prevent class="border rounded-lg border-lg w-1/2 mx-auto p-2 text-lg border-gray-400 shadow-lg">
    <div class="text-center text-xl font-bold border-b py-1 bg-lime-100 rounded-t-lg ">
      User Data
    </div>
    <div class="p-3">
      <label for="username">Username</label>
      <input class="border w-full rounded px-2 py-2 text-blue-600" type="text" id="username" v-model="username"/>
    </div>
    <div class="p-3">
      <label for="age">Age</label>
      <input class="border w-full rounded px-2 py-2 text-blue-600" type="number" id="age" v-model="age"/>
    </div>
    <div class="p-3">
      <button type="submit" class="border rounded w-full py-2 rounded-lg bg-green-100 hover:bg-green-300 transform duration-500 text-bold !text-md hover:text-lg">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return {
      username: 'Ali',
      age: 10,
    };
  }
}
</script>