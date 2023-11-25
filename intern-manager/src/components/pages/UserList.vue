<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import literals from '../../assets/literals';

defineProps({
  id: {
    type: Number,
    required: true
  }
})

const users = ref([]);

fetch(`${literals.links.list}0`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users.value = data.data;
  });

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ literals.userListTitle }}</h1>
    <div class="list">
      <div class="list__header">
        <input type="text" :placeholder="literals.searchUsers" />
        <RouterLink to="/user">Add User</RouterLink>
      </div>
      <div class="list__content">
        <div class="list__row --header">
          <span></span>
          <span>{{ literals.fullName }}</span>
          <span>{{ literals.action }}</span>
        </div>
        <div class="list__row" v-for="user in users" :key="user.id">
          <span><img :src="user.avatar" /></span>
          <span>{{ user.first_name }} {{ user.last__name }}</span>
          <span>
            <RouterLink to='/user/{{ user.id }}'>Add User</RouterLink>
            <a href="#remove">r</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
