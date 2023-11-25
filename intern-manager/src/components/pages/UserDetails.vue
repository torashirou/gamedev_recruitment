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