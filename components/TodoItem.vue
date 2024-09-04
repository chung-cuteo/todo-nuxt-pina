<template>
  <div class="item">
    <span>{{ name }}</span>
    <button type="button" @click="handelUpdate">Update</button>
    <button type="button" @click="handleDelete">Delete</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  name: string;
}

const todoStore = useTodoStore();
const { deleteOneTodo, updateTodo } = todoStore;

const props = defineProps<Props>();

const handelUpdate = () => {
  const name = prompt("Enter name");
  if(name) {
    updateTodo({id: props.id, name: name});
  }
 
};

const handleDelete = () => {
  window.alert("You sure delete this item");
  if(props.id) {
    deleteOneTodo(props.id);
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
