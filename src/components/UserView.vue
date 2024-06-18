<script setup>
import { computed, reactive, ref } from "vue";

const users = ref(['Raj', 'Alpesh', 'Ashish']);

const newUser = ref(['Chirag', 'Vikram']);

function addUser(){
  const removeUser = newUser.value.pop();
  users.value.push(removeUser);
}

function removeUser(){
  users.value.pop();
}

const num = ref([1,2,3,4,5,6])

const evenNum = computed(()=>{
  return num.value.filter((n)=> n % 2 === 0)
})

const userDetails = reactive({
  name: "Raj",
  education: {
    college: "GECR"
  }
})
</script>
<template>
  <div>
    <p v-for="(user) in users" :key="user">{{ user }}</p>
    <button @click="addUser">ADD</button>
    <button @click="removeUser()">REMOVE</button>
  </div>

  <br>
  <br>

  <div>
    <li v-for="n of evenNum" :key="n">{{ n }}</li>
  </div>
  <br>
  <br>
  <div>
    <li v-for="(user, key) in userDetails" :key="user.name">{{ key }} : {{ user }}</li>
  </div>
</template>

<style scoped></style>
