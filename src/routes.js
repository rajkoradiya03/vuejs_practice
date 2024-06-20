import TestView from "./components/TestView.vue";
import UserView from "./components/UserView.vue";
import RefReactive from "./components/RefReactive.vue";
import ClassAndStyle from "./components/ClassAndStyle.vue";
import EventView from "./components/EventView.vue";
import ToDoView from "./components/ToDoView.vue";
import ComputedView from "./components/ComputedView.vue";
import WatcherView from "./components/WatcherView.vue";
import WatcherAndWatcheffect from "./components/WatcherAndWatcheffect.vue";
import CountView from "./components/CountView.vue";
import { createRouter, createWebHistory } from "vue-router";
import FirstView from "./components/FirstView.vue";

const routes = [
  { path: "/", component: FirstView },
  { path: "/testview", name: "test", component: TestView },
  { path: "/countview", component: CountView },
  { path: "/userview", component: UserView },
  { path: "/refreactiveview", component: RefReactive },
  { path: "/classandstyleview", component: ClassAndStyle },
  { path: "/eventview", component: EventView },
  { path: "/todoview", component: ToDoView },
  { path: "/computedview", component: ComputedView },
  { path: "/watcherview", component: WatcherView },
  { path: "/watcherandwatcheffectview", component: WatcherAndWatcheffect },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
