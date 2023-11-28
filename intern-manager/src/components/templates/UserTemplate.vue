<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import UserDetailsWrapper from '../organisms/UserDetailsWrapper.vue';
import UserAvatarWrapper from '../organisms/UserAvatarWrapper.vue';
import PopupConfirm from '../molecules/PopupConfirm.vue';
import LoadingPage from '../atoms/LoadingPage.vue';
import literals, { links } from '../../assets/globals';
import useFetch from '../../assets/hooks/useFetch'

const newIntern = ref(true);
const firstName = ref('');
const lastName = ref('');
const avatar = ref('https://cdn-icons-png.flaticon.com/512/147/147285.png');
const popup = ref(null);
const loaded = ref(false);

const route = useRoute();

if (route.params.id) newIntern.value = false;

// Get user data
const getUser = async (route) => {
  // If updating already existing user
  if (!newIntern.value) {
    // Fetch user data
    const user = useFetch(`${links.apiUser}${route.params.id}`);
    const { data } = await user.execute();
    const { data: userData } = data;
    // If there is no such user
    if (!data || !userData) {
      const ok = await popup.value.show({
        title: literals.userNotFound,
        message: literals.userNotFoundMessage,
        okButton: literals.returnList,
      })
      // Redirect to the list of users
      if (ok) window.location.href = links.list;
      return false;
    }
    // Saving data
    firstName.value = userData.first_name;
    lastName.value = userData.last_name;
    avatar.value = userData.avatar;
    loaded.value = true;
  }
  loaded.value = true;
}

getUser(route);

// Observe changes in avatar link
const dynamicAvatar = computed(() => {
  return avatar
})
</script>

<template>
  <div v-if="loaded" class="user">
    <UserDetailsWrapper :first-name="firstName" :last-name="lastName" :avatar="dynamicAvatar" :new-intern="newIntern" :id="parseInt(route.params.id, 10)"></UserDetailsWrapper>
    <UserAvatarWrapper :avatar="avatar" @update:avatar="newAvatar => avatar = newAvatar"></UserAvatarWrapper>
  </div>
  <LoadingPage v-else></LoadingPage>
  <PopupConfirm ref="popup"></PopupConfirm>
</template>


<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
}

@media (min-width: 992px) {
  .user {
    margin: 0 -15px;
  }
}

@media (min-width: 992px) {
  .user {
    flex-direction: row;
  }
}
</style>
