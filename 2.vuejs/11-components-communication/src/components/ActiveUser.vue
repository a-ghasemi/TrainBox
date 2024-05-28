<template>
  <div class="mx-auto text-left w-1/2 h-[75px] even:bg-yellow-50 my-10 border border-lg rounded-lg p-4">
    <h2 class="text-4xl font-bold float-left">{{ username }}</h2>
    <h3 class="text-lg float-right pt-1">age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '123',
      age: 0,
    };
  }
}
</script>