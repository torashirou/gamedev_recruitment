<script setup>
import { ref } from 'vue'
import UserForm from '../molecules/UserForm.vue';
import literals from '../../assets/literals';

const props = defineProps(['firstName', 'lastName', 'avatar', 'newIntern', 'id']);
defineEmits(['update:firstName', 'update:lastName']);

const firstName = ref(props.firstName);
const lastName = ref(props.lastName);
const avatar = ref(props.avatar);

const updateUser = () => {
  fetch(`${literals.links.user}${props.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      avatar: avatar
    })
  })
}

const createUser = () => {
  fetch(literals.links.user, {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      avatar: avatar
    })
  })
}

</script>

<template>
  <div class="wrapper">
    <UserForm :first-name="firstName" :last-name="lastName" @update:firstName="newFirstName => firstName = newFirstName" @update:lastName="newLastName => lastName = newLastName"></UserForm>
    <a class="user__update" @click="newIntern ? createUser() : updateUser()">{{ literals.updateDetails }}</a>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 30px 30px 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
}

.user__update {
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
}

@media (min-width: 576px) {
  .user__update {
    width: 9rem;
  }
}

@media (min-width: 992px) {
  .wrapper {
    margin: 0 15px 30px;
    width: calc(100% / 3 * 2);
    padding: 75px 30px 20px;
  }
}
</style>
