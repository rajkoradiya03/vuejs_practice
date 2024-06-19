<script setup>
import { computed, onUpdated, reactive, ref } from "vue";

const count = ref(0)
const obj = reactive(
  {
    name: "John Doe",
    books: [
      "Vue 2 - Advanced Guide",
      "Vue 3 - Basic Guide",
      "Vue 4 - The Mystery",
    ], 
  }
);

const newObj = computed(() => {
  console.log("in computed");
  return obj.books.length > 0 ? obj.name : "";
});

function newObj2(){
  console.log("inn");
  return obj.books.length > 0 ? obj.name : "";
}

const firstName = ref('Raj')
const lastName = ref('Koradiya')
const FN = ref('')

const fullName = computed({
  get(){
    return firstName.value + ' ' + lastName.value;
  },

  set(newValue){
    [firstName.value, lastName.value] = newValue.split(' ') 
  }
})

const x = ref(1);
const y = computed({
  get(){
    return x.value - 1;
  },

  set(num){
    x.value = num + 1;
  }
})
</script>

<template>
  <div class="general-container">
    computed view 
    <br>
    <button @click="count++">{{ count }}</button>
    <p>Name Auther Has Publish Book:</p>
    <p>{{ newObj }}</p>
    <p>{{ newObj2() }}</p>
    <input v-model="FN">
    <button @click="fullName = FN">change name</button>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <h2>{{ fullName }}</h2>

    <span>{{ x }} & {{ y }}</span>
    <button @click="y = x++">click</button>
  </div>
</template>

