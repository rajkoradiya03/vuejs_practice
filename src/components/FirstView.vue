<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
const msg = "Hello";
const rawHTML = "V-html HTML attribute binding";
const countNum = 0;
const count = "countId";
const imagUrl = require("../../public/image.jpg");
const style = "font-size:25px;";
const isTrue = ref(true);

let test = ref(100);

function increse() {
  test.value++;
}
const obj = {
  id: "div-container",
  style:
    "border: 1px solid black; border-radius:50%; background-color:teal; width:100px; height:100px; margin:auto;  ",
};
const attributeName = "href";
const url = "https://vuejs.org/";

const text = ref(null);

const onLoad = () => {
  text.value.focus();
  console.log("On Mounted hook called!!!");
};

onMounted(onLoad);

const router = useRouter();

function goBack() {
  router.replace("/watcherandwatcheffectview");
}
</script>
<template>
  <button @click="goBack()">Back</button>
  <h1>This is a Vue Practice Project</h1>
  <div class="general-container">
    app view
    <br />
    <h2>This message from main app component. {{ msg }}</h2>
    <!-- Using v-html for direct v-html content binding. -->
    <p v-html="rawHTML" style="color: teal; font-weight: 700"></p>

    <!-- use v-bind directive for binding HTML attribute -->
    <p v-bind:id="count">count: {{ countNum }}</p>
    <!-- use require('image path') for disply image dynamic -->
    <img :src="imagUrl" alt="image" />
    <!-- <img src="../public/image.jpg" alt="image" :width="width" :height="height"> -->
    <!-- use shorthand syntax for binding -->
    <p :id="count">Bind id using shorthand</p>

    <!-- same name shorthand -->
    <p :style="style">This is same name shorthand</p>

    <!-- boolean attribute -->
    <button :disabled="isTrue" v-on:click="isTrue = !isTrue">Click</button>
    <input type="radio" value="Radio1" :checked="isTrue" /><label for="radio1"
      >Radio 1</label
    >

    <br />
    <br />

    <!-- dynamic binding multiple attributes -->
    <div v-bind="obj"></div>

    <!-- v-if directives -->

    <p v-if="isTrue" @click="isTrue = !isTrue">V-if directives</p>

    <br />
    <!-- dynamic attributes -->
    <a :[attributeName]="url" target="_blank">Vue js official site</a>
    <input ref="text" />

    <p>{{ test }}</p>
    <button @click="increse()">{{ test }}</button>
  </div>
</template>
