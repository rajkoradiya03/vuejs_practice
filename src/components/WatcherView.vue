<script setup>
import { computed, onUpdated, reactive, ref, watch, watchEffect } from "vue";


const x = ref(0);
const y = ref(0);
watch(x, (newX)=>{
  console.log(`${x.value} is ${newX}`)
})

// onUpdated(()=>{
//   console.log(x.value + " in watcherview");
// })

watch(
  ()=> x.value + y.value,
  (sum)=>{
    console.log(`sum is ${sum}`);
  }
)

watchEffect((sum)=>{
  sum = x.value + y.value;
  console.log(sum + "Watcheffect");
})

watch([x, ()=> y.value], ([newX, newY])=>{
  console.log(`x is ${newX} and y is ${newY}`)
}, {once:true})

let obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  console.log(newValue.count);
  console.log(oldValue.count);
})

const todos = ref(1)
watchEffect(async()=>{
  const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${todos.value}`)

  console.log(await responce.json());
})

</script>
<template>
  <div>
    <p>{{ x }}</p>
  </div>
</template>


<style scoped>

</style>