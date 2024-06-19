<script setup>
import { ref, watch, watchEffect } from "vue";

const product = ref({
  price: 10,
  quantity: 1,
});

watch(
  () => product.value.quantity,
  (newVal, oldVal) => {
    product.value.price = newVal * 10;
  }
);

watchEffect(()=>{
  console.log("in");
  product.value.price = product.value.quantity * 10;
})

const count = ref(1);

watch(count, (newValue, oldValue) => {
  console.log(`watch: count changed from ${oldValue} to ${newValue}`);
}, {immediate: true});
</script>

<template>
  <main class="general-container">
    watcher and watchereffect difference view
    <br>
      {{ product.price }} = {{ product.quantity }} * 10
      <input v-model="product.quantity" type="number" />
  </main>
</template>


