<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import UserTemplate from '../templates/UserTemplate.vue';
import literals from '../../assets/globals';

const route = useRoute();
const newIntern = ref(true);
if (route.params.id) newIntern.value = false;
</script>

<template>
  <div class="container">
    <h1>{{ newIntern ? literals.addUser : literals.userDetails }}</h1>
    <UserTemplate></UserTemplate>
  </div>
</template>