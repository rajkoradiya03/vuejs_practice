<script setup>
defineProps(['title'])
defineEmits(['remove'])
</script>
<template>
  <div>
    <li>
      {{ title }}
      <button @click="$emit('remove')">REMOVE</button>
    </li>
  </div>
</template>
