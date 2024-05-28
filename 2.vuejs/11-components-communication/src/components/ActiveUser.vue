<template>
  <div class="mx-auto text-left w-1/2 h-[75px] even:bg-yellow-50 border border-lg rounded-lg p-4" @click="removeUser">
    <h2 class="text-4xl font-bold float-left">{{ username }}</h2>
    <h3 class="text-lg float-right pt-1">age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  emits:{
    "delete-user": (id)=>{},
  },
  props: {
    id:{
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  methods:{
    removeUser(){
      this.$emit("delete-user", this.id);
    }
  }
}
</script>