<template>
  <TodoMain />
  <NuxtLink to="/about">about</NuxtLink>
  <NuxtLink to="/profile">profile</NuxtLink>
</template>
<script lang="ts" setup>

useHead({
  title: 'index',
})
console.log("index page");
</script>