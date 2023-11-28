<script setup>
import { links } from '../../assets/globals'
import PagerNav from '../molecules/PagerNav.vue';
import PagerPage from '../molecules/PagerPage.vue'

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

</script>

<template>
  <ul>
    <PagerNav :link="`${links.list}${props.currentPage > 1 ? props.currentPage - 1 : 1}`" :prev="true"></PagerNav>
    <PagerPage v-for="page in props.totalPages" :key="page" :link="`${links.list}${page}`">{{ page }}</PagerPage>
    <PagerNav :link="`${links.list}${props.currentPage < props.totalPages ? props.currentPage + 1 : totalPages}`" :prev="false"></PagerNav>
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
