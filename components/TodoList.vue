<template>
  <template v-if="todoList.length <= 0">
    <p>No to do item</p>
  </template>
  <template v-else>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <TodoItem :name="todo.name" :id="todo.id"/>
      </li>
    </ul>
  </template>
</template>

<script setup lang="ts">
const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore);
</script>

<style lang="scss" scoped></style>
