<script setup>
import { ref } from 'vue';

const msg = ref('')
</script>
<template>
  <div>
    HEllo this is from test view..
  </div>
  <br>
  <input type="text" name="msg" id="msg" v-model="msg">
  <p>{{ msg }}</p>
</template>

<!-- <style lang="scss" scoped></style> -->
