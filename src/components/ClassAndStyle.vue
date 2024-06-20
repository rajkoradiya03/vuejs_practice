<script setup>
import { computed, reactive, ref } from "vue";

// const active = ref(true)
// const hasError = ref(true)

const getClasses = computed(() => {
  return {
    active: true,
    valid: true,
  };
});

const fontSize = ref(25);
// const render = ref(false);

// const parentMessage = ref('Parent')
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
</script>
<template>
  <div class="general-container">
    class style view
    <br />
    <p :class="getClasses" :style="{ 'font-size': fontSize + 'px' }">
      Dynamic Class Binding
    </p>
    <p :class="$attrs.class">Another root element</p>
    <br />
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
  <!-- <button @click="ItemRemove()">Remove</button> -->
</template>

<style scoped>
.valid {
  color: black;
  background-color: red;
}
</style>
