<script setup>
import { onUpdated,onUnmounted, ref, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount } from 'vue';

const msg = ref('')
console.log("API call!!");

// state
let count = ref(0)


function increse(){
  count.value++;
}

onUpdated(()=>{
  console.log("On Updated hook called!!");
})

onMounted(()=>{
  console.log("This called from Testview component mount hook!!!");
})
onUnmounted(()=>{
  console.log("This is On Unmounted hook called!!!");
})

onBeforeUnmount(()=>{
  console.log("This called before unmounted from TestView!!!!");
})

onBeforeMount(()=>{
  console.log("This is On Before Mount hook called!!!");
})

onBeforeUpdate(()=>{
  console.log("This is On Before Update hook called!!! ");
})
</script>
<template>
  <div>
    HEllo this is from test view..
  </div>
  <br>
  <input type="text" name="msg" id="msg" v-model="msg">
  <p>{{ msg }}</p>

  <button @click="increse()">count: {{ count }}</button>
</template>

<!-- <style lang="scss" scoped></style> -->
