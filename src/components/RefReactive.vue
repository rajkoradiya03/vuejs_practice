<script setup>
import { onMounted, reactive, ref, watch } from "vue";

let user = ref({count: 0})
// let users = reactive({name: "Raj"})

// onMounted(()=> user = {name:"Ashish"})
watch(user, ()=>{
  console.log("changed!!!");
},{deep: true})

const increse = ()=> {user.value.count++}
</script>
<template>
  <div>
    <button @click="increse">{{ user.count }}</button>
  </div>
</template>

<style scoped></style>
