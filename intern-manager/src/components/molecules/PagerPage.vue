<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: String,
});

</script>

<template>
  <li><RouterLink :to="props.link"><slot></slot></RouterLink></li>
</template>

<style scoped>
a {
  border: 1px solid #e1e4e7;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
  width: 39px;
  height: 39px;
  color: #449571;
  text-decoration: none;
  font-weight: 700;
}

a.router-link-active {
  background: #449571;
  color: #ffffff;
}

a:hover {
  background: #449571;
  color: #ffffff;
}
</style>
