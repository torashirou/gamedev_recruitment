<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import UserDetailsWrapper from '../organisms/UserDetailsWrapper.vue';
import UserAvatarWrapper from '../organisms/UserAvatarWrapper.vue';
import LoadingPage from '../atoms/LoadingPage.vue';
import literals from '../../assets/literals';

const newIntern = ref(true);
const firstName = ref('');
const lastName = ref('');
const avatar = ref('https://cdn-icons-png.flaticon.com/512/147/147285.png');
const loaded = ref(false);

const route = useRoute();

if (route.params.id) newIntern.value = false;

const getUser = (route) => {
  if (!newIntern.value)
    fetch(`${literals.links.user}${route.params.id}`)
    .then((res) => res.json())
    .then((data) => {
      firstName.value = data.data.first_name;
      lastName.value = data.data.last_name;
      avatar.value = data.data.avatar;
      loaded.value = true;
    });
  else {
    loaded.value = true;
  }
}

getUser(route);

const dynamicAvatar = computed(() => {
  return avatar
})
</script>

<template>
  <div v-if="loaded" class="user">
    <UserDetailsWrapper :first-name="firstName" :last-name="lastName" :avatar="dynamicAvatar" :new-intern="newIntern" :id="parseInt(route.params.id)"></UserDetailsWrapper>
    <UserAvatarWrapper :avatar="avatar" @update:avatar="newAvatar => avatar = newAvatar"></UserAvatarWrapper>
  </div>
  <LoadingPage v-else></LoadingPage>
</template>


<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  flex-direction: column-reverse;
}

@media (min-width: 992px) {
  .user {
    flex-direction: row;
  }
}
</style>
