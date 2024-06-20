<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <nav>
    <ul class="nav-bar">
      <li><router-link to="/">FirstView</router-link></li>
      <li><router-link :to="{ name: 'test' }">TestView</router-link></li>
      <li><router-link to="/countview">CountView</router-link></li>
      <li><router-link to="/userview">UserView</router-link></li>
      <li>
        <router-link to="/refreactiveview">RefAndReactiveView</router-link>
      </li>
      <li>
        <router-link to="/classandstyleview">classandstyleview</router-link>
      </li>
      <li><router-link to="/eventview">EventView</router-link></li>
      <li><router-link to="/todoview">TodoView</router-link></li>
      <li><router-link to="/computedview">ComputedView</router-link></li>
      <li><router-link to="/watcherview">WatcherView</router-link></li>
      <li>
        <router-link to="/watcherandwatcheffectview"
          >watcherandwatcheffectview</router-link
        >
      </li>
    </ul>
  </nav>

  <router-view></router-view>
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
.general-container {
  border: 1px solid teal;
  padding: 8px;
  margin: 10px;
}

.nav-bar {
  display: flex;
  list-style: none;
  justify-content: space-between;
}

li {
  display: flex;
  gap: 10px;
  border: 1px solid teal;
  padding: 5px;
  border-radius: 10px;
}

li:active {
  background-color: cadetblue;
}

a {
  text-decoration: none;
  outline: none;
  color: black;
}
</style>

<style scoped>
button {
  padding: 5px 15px;
  font-size: 20px;
}
</style>
