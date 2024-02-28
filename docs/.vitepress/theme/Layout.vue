<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <!-- <h1>Custom Layout!</h1> -->

  <!-- 此处将渲染 markdown 内容 -->
  <!-- <div v-if="page.isNotFound">Custom 404 page!</div>
  <Content v-else /> -->

  <Content />
</template>
