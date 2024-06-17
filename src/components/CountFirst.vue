<script setup>
import {  useCount } from './count'

</script>
<template>
  <div>
    <!-- <button @click="countIncrese.increse()">
      First: {{ countIncrese.count }}
    </button> -->
    <button @click="useCount().globalCount.value++">
      First: {{ useCount().globalCount.value }}
    </button>

  </div>
</template>

<style lang="scss" scoped></style>
