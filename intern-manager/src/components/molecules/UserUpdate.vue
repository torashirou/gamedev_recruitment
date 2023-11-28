<script setup>
import { ref } from 'vue';
import PopupConfirm from './PopupConfirm.vue';
import literals, { links } from '../../assets/globals';
import useFetch from '../../assets/hooks/useFetch';

const popup = ref(null);

const props = defineProps({
  newIntern: Boolean,
  firstName: String,
  lastName: String,
  avatar: String,
  id: Number
});

// Update user details
const updateUser = async () => {
  const update = useFetch(`${links.apiUser}${props.id}`, 'PATCH');
  await update.execute({
    first_name: props.firstName,
    last_name: props.lastName,
    avatar: props.avatar
  })
  // Show confirmation popup
  await popup.value.show({
    title: literals.updated,
    message: literals.updatedMessage,
    okButton: literals.ok
  })
}

// Create new user
const createUser = async () => {
  const create = useFetch(links.apiUser, 'POST');
  const { data } = await create.execute({
    first_name: props.firstName,
    last_name: props.lastName,
    avatar: props.avatar
  })
  // Show confirmation popup
  const ok = await popup.value.show({
    title: literals.created,
    message: literals.createdMessage,
    okButton: literals.yes,
    cancelButton: literals.no,
  })
  // If user wants to visit details page of newly created user - redirect him to correct page
  if (ok) {
    window.location.href = `${links.user}${data.id}`;
  }
}



</script>

<template>
  <a @click="props.newIntern ? createUser() : updateUser()">{{ newIntern ? literals.addUser : literals.updateDetails }}</a>
  <PopupConfirm ref="popup"></PopupConfirm>
</template>

<style scoped>
a {
  background: #449571;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  text-transform: capitalize;
}

@media (min-width: 576px) {
  a {
    width: 9rem;
  }
}
</style>
