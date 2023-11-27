<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import literals, { links } from '../../assets/globals';
import useFetch from '../../assets/hooks/useFetch';
import ListTemplate from '../templates/ListTemplate.vue';
import PagerBottom from '../organisms/PagerBottom.vue';
import LoadingPage from '../atoms/LoadingPage.vue';

const users = ref([]);
const totalPages = ref(1);
const currentPage = ref(1);
const pagerLink = ref('/list/');
const loaded = ref(false);

const route = useRoute();

const getList = async (route) => {
  const list = useFetch(`${links.list}${route.params.id ? route.params.id : 1}`);
  const { data } = await list.execute();
  if (!data) {
    return false;
  }
  const { total_pages, page, data: userList } = data;
  users.value = userList;
  totalPages.value = total_pages;
  currentPage.value = page;
  loaded.value = true;
}

getList(route);

watch(route, (newRoute) => {
  getList(newRoute);
})

const removeUser = async (id) => {
  const remove = useFetch(`${links.user}${id}`, 'DELETE');
  await remove.execute();
  getList(route);
}

</script>

<template>
  <div v-if="loaded" class="container">
    <h1>{{ literals.userListTitle }}</h1>
    <ListTemplate :users="users" :remove-user="removeUser"></ListTemplate>
    <PagerBottom :current-page="currentPage" :total-pages="totalPages" :link="pagerLink"></PagerBottom>
  </div>
  <LoadingPage v-else></LoadingPage>
</template>