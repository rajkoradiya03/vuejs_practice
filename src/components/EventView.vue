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

function onClick(event){
  alert(event.target.tagName)
}
</script>
<template>
  <div class="general-container">
    Event View
    <br>
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
    <div style="height: 100px; width: 100px; background-color: aqua;"  @click.capture="onClick($event)">
      <p style="height: 80px; width: 80px; background-color: red;" >
        <button  style=" width: fit-content; height: fit-content;" @click="onSubmit()">click</button>
      </p>
    </div>
  </div>

</template>

