<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: String,
  removeUser: Function,
  id: Number
});

</script>

<template>
  <span>
    <RouterLink :to="props.link"><font-awesome-icon icon="pen-to-square" /> </RouterLink>
    <a href="#remove" @click="(e) => {e.preventDefault(); props.removeUser(props.id)}"><font-awesome-icon icon="trash" /> </a>
  </span>
</template>

<style scoped>
span {
  width: 30%;
}

span a  {
  margin-right: 20px;
}

span svg  {
  color: #aeb5bc;
  transition: all 0.3s ease;
}

span a:hover svg  {
  color: #449571;
}

@media (min-width: 576px) {
  span {
    width: 15%;
  }
}

@media (min-width: 992px) {
  span {
    width: 7.5%;
  }
}
</style>
