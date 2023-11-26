<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import literals from '../../assets/literals';

const newIntern = ref(true);
const firstName = ref('');
const lastName = ref('');
const avatar = ref('https://cdn-icons-png.flaticon.com/512/147/147285.png');
const hideInput = ref(false);
const inputClass = ref('--hidden')

const route = useRoute();

if (route.params.id) newIntern.value = false;

const getUser = (route) => {
  if (!newIntern.value)
    fetch(`${literals.links.user}${route.params.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      firstName.value = data.data.first_name;
      lastName.value = data.data.last_name;
      avatar.value = data.data.avatar;
      console.log(avatar.value);
    });
}

watch(hideInput, (newHideInput) => {
  newHideInput ? inputClass.value = '--show' : inputClass.value = '--hidden';
})

getUser(route);

const updateUser = () => {
  fetch(`${literals.links.user}${route.params.id}`, {
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
  <div class="container">
    <h1>{{ literals.addUser }}</h1>
    <div class="user">
      <div class="user__details wrapper">
        <div class="user__form">
          <div class="user__data">
            <label>{{ literals.firstName }}</label>
            <input type="text" name="first_name" v-model="firstName">
          </div>
          <div class="user__data">
            <label>{{ literals.lastName }}</label>
            <input type="text" name="last_name" v-model="lastName">
          </div>
        </div>
        <a class="user__update" @click="newIntern ? createUser() : updateUser()">{{ literals.updateDetails }}</a>
      </div>
      <div class="user__avatar wrapper">
        <span><img :src="avatar"/></span>
        <input type="text" name="avatar" :class="inputClass" v-model="avatar" />
        <button @click="(e) => {e.preventDefault(); hideInput = !hideInput}"><font-awesome-icon icon="camera" />{{ literals.changePhoto }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  flex-direction: column-reverse;
}

.user > div {
  width: 100%;
  margin-bottom: 30px;
}

.user > div:first-child {
  padding: 30px 30px 20px;
}

.user > div:last-child {
  padding: 20px;
}

.user__details {
  display: flex;
  flex-wrap: wrap;
}

.user__form {
  margin: 0 -15px 15px;
  width: calc(100% + 30px);
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 992px) {
  .user {
    flex-direction: row;
  }

  .user > div {
    margin: 0 15px 30px;
  }

  .user > div:first-child {
    width: calc(100% / 3 * 2);
    padding: 75px 30px 20px;
  }

  .user > div:last-child {
    width: calc(100% / 3);
  }

  .user__form {
    margin-bottom: 170px;
  }
}

.user__data {
  width: 100%;
  padding: 0 15px 15px;
}

.user__data label {
  display: block;
  margin-bottom: 5px;
}

.user__data input {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid #c8cfd5;
}

.user__data input:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
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
  .user__data {
    width: 50%;
    padding: 0 15px;
  }

  .user__update {
    width: 9rem;
  }
}

.user__avatar {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.user__avatar > span {
  display: flex;
  width: 150px;
  height: 150px;
  margin: auto;
  border: 1px solid #c8cfd5;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
}

.user__avatar > span img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
}

.user__avatar input {
  height: 2.5rem;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #c8cfd5;
  padding: 0 15px;
}

.user__avatar input.--hidden {
  opacity: 0;
  pointer-events: none;
}

.user__avatar input.--show:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

.user__avatar button {
  border-radius: 5px;
  border: 1px solid #c8cfd5;
  background: #ffffff;
  height: 2.5rem;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user__avatar button:hover {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

.user__avatar button svg {
  margin-right: 5px;
}
</style>
