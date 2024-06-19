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

const sum = computed(()=>{
  return x.value + y.value;
})

let sumWatcher = ref(0)
// watch(x, (newValue, oldValue)=>{
//   sumWatcher = newValue + y.value
// })

watchEffect(()=>{
  sumWatcher = x.value + y.value
})

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
  <div class="general-container">
    watcher view
    <br>
    <div>
      <p>{{ x }}</p>
    </div>
  
    <!-- difference between computed and watcher -->
    <div>
      <p>
        Computed Sum: {{ sum }} 
      </p>
      <p>
        Watcher sum: {{ sumWatcher }}
      </p>
    </div>
  
    <button @click="x++">increse X</button>
    <button @click="y++">increse Y</button>
  </div>
</template>


