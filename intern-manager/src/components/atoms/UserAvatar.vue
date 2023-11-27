<script setup>
const props = defineProps({
  avatar: String,
});

</script>

<template>
  <span><img :src="props.avatar"/></span>
</template>

<style scoped>
span {
  display: flex;
  width: 150px;
  height: 150px;
  margin: auto;
  border: 1px solid #c8cfd5;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

}

span img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
}

@media (min-width: 992px) {
  span {
    margin-bottom: auto;
  }
}
</style>
