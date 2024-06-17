<script setup>
import { useCount } from './count'

function increse(){
  useCount().localCount.value++
  console.log(useCount().localCount.value);
}
</script>
<template>
  <div>
    <!-- <button @click="countIncrese.increse()">
      Second: {{ countIncrese.count }}
    </button> -->
    <button @click="increse()">
      Second: {{ useCount().localCount.value }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>