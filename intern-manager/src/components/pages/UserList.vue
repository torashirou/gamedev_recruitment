<script setup>
import { ref, computed, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import literals from '../../assets/literals';

const users = ref([]);
const pages = ref([]);
const totalPages = ref(1);
const currentPage = ref(1);
const filter = ref('');

const route = useRoute();

const getList = (route) => {
  fetch(`${literals.links.list}${route.params.id ? route.params.id : 1}`)
  .then((res) => res.json())
  .then((data) => {
    users.value = data.data;
    totalPages.value = parseInt(data.total_pages);
    currentPage.value = parseInt(data.page);
    pages.value = [];
    for (let i = 1; i <= totalPages.value; i++) pages.value.push(i);
  });
}

getList(route);

watch(route, (newRoute) => {
  getList(newRoute);
})

const filteredUsers = computed(() => {
  return filter.value !== ''
    ? users.value.filter((u) => {
      const fullName = `${u.first_name} ${u.last_name}`.toLowerCase();
      if (fullName.indexOf(filter.value.toLowerCase()) > -1) return true;
      return false;
    })
    : users.value
});

</script>

<template>
  <div class="container">
    <h1>{{ literals.userListTitle }}</h1>
    <div class="list wrapper">
      <div class="list__header">
        <span>
          <input type="text" v-model="filter" :placeholder="literals.searchUsers" />
          <font-awesome-icon icon="magnifying-glass" />
        </span>
        <RouterLink to="/user"><font-awesome-icon icon="plus" />Add User</RouterLink>
      </div>
      <div class="list__content">
        <div class="list__row --header">
          <span></span>
          <span>{{ literals.fullName }}</span>
          <span>{{ literals.action }}</span>
        </div>
        <div class="list__row" v-for="user in filteredUsers" :key="user.id">
          <span><img :src="user.avatar" /></span>
          <span>{{ user.first_name }} {{ user.last_name }}</span>
          <span>
            <RouterLink :to="`/user/${user.id}`"><font-awesome-icon icon="pen-to-square" /> </RouterLink>
            <a href="#remove"><font-awesome-icon icon="trash" /> </a>
          </span>
        </div>
      </div>
    </div>
    <ul class="pager">
      <li><RouterLink :class="pager__prev" :to="`/list/${currentPage > 1 ? currentPage - 1 : 1}`"><font-awesome-icon icon="chevron-left" /> </RouterLink></li>
      <li v-for="page in pages" :key="page"><RouterLink :to="`/list/${page}`">{{ page }}</RouterLink></li>
      <li><RouterLink :class="pager__next" :to="`/list/${currentPage < totalPages ? currentPage + 1 : totalPages}`"><font-awesome-icon icon="chevron-right" /> </RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
.list__header {
  padding: 1rem 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #f5f7f9;
}

@media (min-width: 576px) {
  .list__header {
    flex-direction: row;
    align-items: center;
  }
}

.list__header input {
  height: 2.5rem;
  width: 100%;
  border: none;
  font-size: 15px;
  font-weight: 700;
  padding: 0 10px;
  background: #f5f7f9;
}

.list__header input:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

.list__header span {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  display: block;
}

.list__header span svg {
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 15px;
}

.list__header a {
  background: #449571;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-radius: 1.5rem;
  text-decoration: none;
  font-weight: 600;
}

@media (min-width: 576px) {
  .list__header span {
    width: 50%;
    margin-bottom: 0;
  }

  .list__header a {
    width: 9rem;
  }
}

@media (min-width: 992px) {
  .list__header span {
    width: 32%;
    font-size: 15px;
  }
}

.list__header svg {
  margin-right: 15px;
}

.list__row {
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
}

.list__row:nth-child(even) {
  background: #f5f7f9;
}

.list__row.--header span {
  font-weight: 700;
  font-size: 1rem;
}

.list__row span {
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.list__row span:nth-child(1) {
  display: none;
}

.list__row span:nth-child(2) {
  width: 70%;
}

.list__row span:nth-child(3) {
  width: 30%;
}

@media (min-width: 576px) {
  .list__row span:nth-child(1) {
    display: flex;
    width: 15%;
  }

  .list__row span:nth-child(2) {
    width: 70%;
  }

  .list__row span:nth-child(3) {
    width: 15%;
  }
}

@media (min-width: 992px) {
  .list__row span:nth-child(1) {
    width: 8%;
  }

  .list__row span:nth-child(2) {
    width: 84.5%;
  }

  .list__row span:nth-child(3) {
    width: 7.5%;
  }
}

.list__row span:nth-child(3) a  {
  margin-right: 20px;
}

.list__row span:nth-child(3) svg  {
  color: #aeb5bc;
  transition: all 0.3s ease;
}

.list__row span:nth-child(3) a:hover svg  {
  color: #449571;
}

.list__row img {
  max-width: 45px;
  max-height: 45px;
  border-radius: 100%;
  height: 45px;
  width: auto;
}

.pager {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
}

.pager li a {
  border: 1px solid #e1e4e7;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
  width: 39px;
  height: 39px;
  color: #449571;
  text-decoration: none;
  font-weight: 700;
}

.pager li:not(:first-child):not(:last-child) a.router-link-active {
  background: #449571;
  color: #ffffff;
}

.pager li a:hover {
  background: #449571;
  color: #ffffff;
}
</style>
