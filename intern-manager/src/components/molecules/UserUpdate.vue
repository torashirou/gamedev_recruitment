<script setup>
import literals, { links } from '../../assets/globals';
import useFetch from '../../assets/hooks/useFetch';

const props = defineProps({
  newIntern: Boolean,
  firstName: String,
  lastName: String,
  avatar: String,
  id: Number
});

const updateUser = async () => {
  const update = useFetch(`${links.user}${props.id}`, 'PATCH');
  await update.execute({
    first_name: props.firstName,
    last_name: props.lastName,
    avatar: props.avatar
  })
}

const createUser = async () => {
  const create = useFetch(links.user, 'POST');
  await create.execute({
    first_name: props.firstName,
    last_name: props.lastName,
    avatar: props.avatar
  })
}

</script>

<template>
  <a @click="props.newIntern ? createUser() : updateUser()">{{ newIntern ? literals.addUser : literals.updateDetails }}</a>
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
