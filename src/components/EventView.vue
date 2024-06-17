<script setup>
function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault();
  }
  alert(message);
}


function onSubmit(){
  alert('submited!!')
}
</script>
<template>
  <div>
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <form @click.prevent="onSubmit()"><button>Submit</button></form>

    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>

    <button @click.middle="onSubmit()" >ABC</button>
  </div>
</template>

<style scoped></style>
