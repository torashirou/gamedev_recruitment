<script setup>
import UserTemplate from '../templates/UserTemplate.vue';
import literals from '../../assets/literals';
</script>

<template>
  <div class="container">
    <h1>{{ literals.addUser }}</h1>
    <UserTemplate></UserTemplate>
  </div>
</template>