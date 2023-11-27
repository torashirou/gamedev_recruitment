<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
});

</script>

<template>
  <span>{{ props.firstName }} {{ props.lastName }}</span>
</template>

<style scoped>
span {
  display: flex;
  width: 70%;
}

@media (min-width: 576px) {
  span {
    width: 70%;
  }
}

@media (min-width: 992px) {
  span {
    width: 84.5%;
  }
}
</style>
