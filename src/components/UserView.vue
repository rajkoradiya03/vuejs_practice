<script setup>
import { ref } from "vue";

const users = ref(['Raj', 'Alpesh', 'Ashish']);

const newUser = ref(['Chirag', 'Vikram']);

// function addUser(){
//   new
// }
</script>
<template>
  <div>
    <p v-for="user in users" :key="user">{{ user }}</p>
    <button @click=""></button>
  </div>
</template>

<style scoped></style>
