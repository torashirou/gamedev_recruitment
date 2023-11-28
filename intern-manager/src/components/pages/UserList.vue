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
const confirmRemove = ref(null);
const loaded = ref(false);

const route = useRoute();

// Get list of users
const getList = async (route) => {
  // Fetch data
  const list = useFetch(`${links.apiList}${route.params.id ? route.params.id : 1}`);
  const { data } = await list.execute();
  const { total_pages, page, data: userList } = data;
  // If there is no data
  if (!data) {
    return false;
  }
  // If the list is empty - go to the main site
  if (!userList.length) {
    window.location.href = links.list
  }
  // Save data
  users.value = userList;
  totalPages.value = total_pages;
  currentPage.value = page;
  loaded.value = true;
}

getList(route);

// Observe changing routes, when using pagination
watch(route, (newRoute) => {
  getList(newRoute);
})

// Remove user from database
const removeUser = async (id) => {
  // Get user info
  const user = users.value.filter((user) => user.id === id);
  // Show confirmation popup
  const ok = await confirmRemove.value.show({
    title: literals.requireConfirmation,
    message: `${literals.removeConfirmation1} ${user[0].first_name} ${user[0].last_name} ${literals.removeConfirmation2}`,
    okButton: literals.yes,
    cancelButton: literals.no
  })
  // When remove is confirmed
  if (ok) {
    // Remove user
    const remove = useFetch(`${links.apiUser}${id}`, 'DELETE');
    await remove.execute();
    // Reload list data
    getList(route);
    return true;
  } else {
    // When decided not to remove user
    return false;
  }
}

</script>

<template>
  <div v-if="loaded" class="container">
    <h1>{{ literals.userListTitle }}</h1>
    <ListTemplate :users="users" :remove-user="removeUser"></ListTemplate>
    <PagerBottom :current-page="currentPage" :total-pages="totalPages"></PagerBottom>
  </div>
  <LoadingPage v-else></LoadingPage>
  <PopupConfirm ref="confirmRemove"></PopupConfirm>
</template>