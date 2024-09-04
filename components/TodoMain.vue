<template>
  <main class="box">
    <InPutItem />
    <TodoList />
  </main>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.box {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
