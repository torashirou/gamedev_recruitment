<script setup>
import { ref, computed } from 'vue';
import ListHeader from '../organisms/ListHeader.vue';
import ListContent from '../organisms/ListContent.vue';

const props = defineProps({
  users: Array,
  removeUser: Function,
});

const filter = ref('');

const filteredUsers = computed(() => {
  return filter.value !== ''
    ? props.users.filter((u) => {
      const fullName = `${u.first_name} ${u.last_name}`.toLowerCase();
      if (fullName.indexOf(filter.value.toLowerCase()) > -1) return true;
      return false;
    })
    : props.users;
});

</script>

<template>
  <div class="list wrapper">
    <ListHeader :filter="filter" @update:filter="newFilter => filter = newFilter"></ListHeader>
    <ListContent :users="filteredUsers" :remove-user="props.removeUser"></ListContent>
  </div>
</template>
