// import { reactive } from "vue";

import { ref } from "vue";

// export const countIncrese = reactive({
//   count: 0,
//   increse(){
//     this.count++
//   }
// }) 

const globalCount = ref(0);

export function useCount(){
  const localCount = ref(0);

  return {
    localCount,
    globalCount
  }
}