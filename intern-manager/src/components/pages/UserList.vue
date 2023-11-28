<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import literals, { links } from '../../assets/globals';
import useFetch from '../../assets/hooks/useFetch';
import ListTemplate from '../templates/ListTemplate.vue';
import PagerBottom from '../organisms/PagerBottom.vue';
import PopupConfirm from '../molecules/PopupConfirm.vue';
import LoadingPage from '../atoms/LoadingPage.vue';

const users = ref([]);
const totalPages = ref(1);
const currentPage = ref(1);
const pagerLink = ref('/list/');
const confirmRemove = ref(null);
const loaded = ref(false);

const route = useRoute();

const getList = async (route) => {
  const list = useFetch(`${links.apiList}${route.params.id ? route.params.id : 1}`);
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
  const user = users.value.filter((user) => user.id === id);
  const ok = await confirmRemove.value.show({
    title: literals.requireConfirmation,
    message: `${literals.removeConfirmation1} ${user[0].first_name} ${user[0].last_name} ${literals.removeConfirmation2}`,
    okButton: literals.yes,
    cancelButton: literals.no
  })
  if (ok) {
    const remove = useFetch(`${links.user}${id}`, 'DELETE');
    await remove.execute();
    getList(route);
    return true;
  } else {
    return false;
  }
}

</script>

<template>
  <div v-if="loaded" class="container">
    <h1>{{ literals.userListTitle }}</h1>
    <ListTemplate :users="users" :remove-user="removeUser"></ListTemplate>
    <PagerBottom :current-page="currentPage" :total-pages="totalPages" :link="pagerLink"></PagerBottom>
  </div>
  <LoadingPage v-else></LoadingPage>
  <PopupConfirm ref="confirmRemove"></PopupConfirm>
</template>