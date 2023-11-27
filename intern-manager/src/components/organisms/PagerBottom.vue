<script setup>
import PagerNav from '../molecules/PagerNav.vue';
import PagerPage from '../molecules/PagerPage.vue'

const props = defineProps({
  link: String,
  pages: Array,
  currentPage: Number,
  totalPages: Number,
});

</script>

<template>
  <ul>
    <PagerNav :link="`${props.link}${props.currentPage > 1 ? props.currentPage - 1 : 1}`" :prev="true"></PagerNav>
    <PagerPage v-for="page in props.pages" :key="page" :link="`${props.link}${page}`">{{ page }}</PagerPage>
    <PagerNav :link="`${props.link}${props.currentPage < props.totalPages ? props.currentPage + 1 : totalPages}`" :prev="false"></PagerNav>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
