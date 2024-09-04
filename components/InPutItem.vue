<template>
  <div>
    <input v-model="name" @keyup.enter="handelAddTodo" type="text" placeholder="Enter todo ...." />
    <button type="button" :disabled="isDisabled" @click="handelAddTodo">Add</button>
  </div>
</template>

<script lang="ts" setup>
import randomId from "../utils/random-id";

const todoStore = useTodoStore();
const { addTodo } = todoStore;
const isDisabled = ref<boolean>(true);
const name = ref<string>("");

watch(name, (newName) => {
  if (newName) {
    isDisabled.value = false;
    return;
  }
  isDisabled.value = true;
});

const handelAddTodo = () => {
  if (name.value) {
    addTodo({
      id: randomId(),
      name: name.value,
    });
    name.value=""
  }
};
</script>
