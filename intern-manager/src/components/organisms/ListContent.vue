<script setup>
import ListNav from '../molecules/ListNav.vue';
import ListRow from '../molecules/ListRow.vue';

const props = defineProps({
  users: Array,
  removeUser: Function,
});

</script>

<template>
  <div class="list__content">
    <ListNav></ListNav>
    <ListRow v-for="user in props.users" :key="user.id" :user="user" :link="`/user/${user.id}`" :remove-user="props.removeUser"></ListRow>
  </div>
</template>