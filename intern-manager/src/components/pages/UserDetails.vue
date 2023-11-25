<script setup>
import { RouterLink } from 'vue-router'
import literals from '../../assets/literals';

defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ literals.userListTitle }}</h1>
    <div class="list">
      <div class="list__header">
        <input type="text" placeholder="{{ literals.searchUsers }}" />
        <RouterLink to="/user">Home</RouterLink>
      </div>
      <div class="list__content"></div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
