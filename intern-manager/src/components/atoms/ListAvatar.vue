<script setup>
const props = defineProps({
  avatar: String,
});

</script>

<template>
  <span><img :src="props.avatar" /></span>
</template>

<style scoped>
span {
  display: none;
}

img {
  max-width: 45px;
  max-height: 45px;
  border-radius: 100%;
  height: 45px;
  width: auto;
}

@media (min-width: 576px) {
  span {
    display: flex;
    width: 15%;
  }
}

@media (min-width: 992px) {
  span {
    width: 8%;
  }
}
</style>
