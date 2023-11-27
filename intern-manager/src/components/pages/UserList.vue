<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import literals from '../../assets/literals';
import ListTemplate from '../templates/ListTemplate.vue';
import PagerBottom from '../organisms/PagerBottom.vue';
import LoadingPage from '../atoms/LoadingPage.vue';

const users = ref([]);
const pages = ref([]);
const totalPages = ref(1);
const currentPage = ref(1);
const pagerLink = ref('/list/');
const loaded = ref(false);

const route = useRoute();

const getList = (route) => {
  fetch(`${literals.links.list}${route.params.id ? route.params.id : 1}`)
  .then((res) => res.json())
  .then((data) => {
    users.value = data.data;
    totalPages.value = parseInt(data.total_pages);
    currentPage.value = parseInt(data.page);
    pages.value = [];
    loaded.value = true;
    for (let i = 1; i <= totalPages.value; i++) pages.value.push(i);
  });
}

getList(route);

watch(route, (newRoute) => {
  getList(newRoute);
})

const removeUser = (id) => {
  fetch(`${literals.links.user}${id}`, {
    method: 'DELETE'
  }).then(() => {
    getList(route);
  })
}

</script>

<template>
  <div v-if="loaded" class="container">
    <h1>{{ literals.userListTitle }}</h1>
    <ListTemplate :users="users" :remove-user="removeUser"></ListTemplate>
    <PagerBottom :current-page="currentPage" :total-pages="totalPages" :pages="pages" :link="pagerLink"></PagerBottom>
  </div>
  <LoadingPage v-else></LoadingPage>
</template>