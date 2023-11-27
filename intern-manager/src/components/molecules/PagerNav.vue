<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  prev: Boolean,
  link: String,
});

</script>

<template>
  <li><RouterLink :to="props.link"><font-awesome-icon :icon="`${prev ? 'chevron-left' : 'chevron-right'}`" /> </RouterLink></li>
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

a:hover {
  background: #449571;
  color: #ffffff;
}
</style>
