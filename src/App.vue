<script setup>
import { onMounted, ref } from "vue";
import TestView from "./components/TestView.vue";
const msg = 'Hello'
const rawHTML = 'V-html HTML attribute binding'
const countNum = 0
const count = 'countId'
const imagUrl = require('../public/image.jpg')
const style = 'font-size:25px;'
const isTrue = ref(false)
const obj = {
  id: "div-container",
  style: "border: 1px solid black; border-radius:50%; background-color:teal; width:100px; height:100px; margin:auto;  "
}
const attributeName = "href";
const url = 'https://vuejs.org/'

const text = ref(null)

const onLoad = ()=>{
    text.value.focus()
}

onMounted(onLoad)
</script>

<template>
  <!-- This is use 'Mustache' syntex for data binding -->

  <h2>This message from main app component. {{ msg }}</h2>
  <!-- Using v-html for direct v-html content binding. -->
  <p v-html="rawHTML" style="color: teal; font-weight: 700;" ></p>

  <!-- use v-bind directive for binding HTML attribute -->
  <p v-bind:id="count">count: {{ countNum }} </p>
  <!-- use require('image path') for disply image dynamic -->
  <img :src="imagUrl" alt="image">
  <!-- <img src="../public/image.jpg" alt="image" :width="width" :height="height"> -->
  <!-- use shorthand syntax for binding -->
  <p :id="count">Bind id using shorthand </p>

  <!-- same name shorthand -->
  <p :style>This is same name shorthand</p>
  
  <!-- boolean attribute -->
  <button :disabled="isTrue" v-on:click="isTrue = !isTrue">Click</button>
  <input type="radio" value="Radio1" :checked="isTrue"><label for="radio1" >Radio 1</label>

  <br>
  <br>

  <!-- dynamic binding multiple attributes -->
  <div v-bind="obj"></div>

  <!-- v-if directives -->

  <p v-if="isTrue" @click="isTrue = !isTrue" >V-if directives</p>

  <br>
  <!-- dynamic attributes -->
  <a :[attributeName]="url" target="_blank">Vue js official site</a>
  <input ref="text" >
  <br>
  <br>
  <TestView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
button {
  padding: 5px 15px;
  font-size: 20px;
}
</style>
