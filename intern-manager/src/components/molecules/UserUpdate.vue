<script setup>
import literals from '../../assets/literals';

const props = defineProps({
  newIntern: Boolean,
  firstName: String,
  lastName: String,
  avatar: String,
  id: Number
});

const updateUser = () => {
  fetch(`${literals.links.user}${props.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      first_name: props.firstName,
      last_name: props.lastName,
      avatar: props.avatar
    })
  })
}

const createUser = () => {
  fetch(literals.links.user, {
    method: 'POST',
    body: JSON.stringify({
      first_name: props.firstName,
      last_name: props.lastName,
      avatar: props.avatar
    })
  })
}

</script>

<template>
  <a @click="props.newIntern ? createUser() : updateUser()">{{ literals.updateDetails }}</a>
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
}

@media (min-width: 576px) {
  a {
    width: 9rem;
  }
}
</style>
