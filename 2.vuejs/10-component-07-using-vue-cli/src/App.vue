<template>
  <header>
    <h1>Friends List</h1>
  </header>
  <ul>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: 1
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com"
        },
      ],
    };
  }
}
</script>