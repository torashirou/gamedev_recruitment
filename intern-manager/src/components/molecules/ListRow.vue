<script setup>
import ListAvatar from '../atoms/ListAvatar.vue';
import ListName from '../atoms/ListName.vue';
import ListAction from '../atoms/ListAction.vue';

const props = defineProps({
  user: Object,
  link: String,
  removeUser: Function,
});
</script>

<template>
  <div>
    <ListAvatar :avatar="props.user.avatar"></ListAvatar>
    <ListName :first-name="props.user.first_name" :last-name="props.user.last_name"></ListName>
    <ListAction :id="props.user.id" :remove-user="removeUser" :link="props.link"></ListAction>
  </div>
</template>

<style scoped>
div {
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
}

div:nth-child(even) {
  background: #f5f7f9;
}

span {
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
}
</style>