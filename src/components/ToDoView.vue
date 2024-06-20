<script setup>
import { ref } from "vue";
import ToDoListView from "./ToDoListView.vue";
import { useRouter } from "vue-router";
const newTODO = ref("");
let todoIndex = 0;

const todos = ref([]);
function addTodo() {
  todos.value.push({
    id: todoIndex++,
    title: newTODO.value,
  });

  newTODO.value = "";
}

const router = useRouter();

const gotoNext = () => {
  router.go(3);
};
</script>
<template>
  <div class="general-container">
    <button @click="gotoNext">Next</button>
    <form @submit.prevent="addTodo">
      <label for="todo">ToDo :</label>
      <input type="text" name="todo" id="todo" v-model="newTODO" />
      <button>ADD</button>
    </form>

    <ul>
      <ToDoListView
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></ToDoListView>
    </ul>
  </div>
</template>

<style scoped></style>
