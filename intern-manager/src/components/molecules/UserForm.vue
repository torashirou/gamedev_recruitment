<script setup>
import { ref } from 'vue';
import literals from '../../assets/globals';

const props = defineProps({
  firstName: String,
  lastName: String,
});

defineEmits(['update:firstName', 'update:lastName']);

const firstName = ref(props.firstName);
const lastName = ref(props.lastName);

</script>

<template>
  <div class="user__form">
    <div class="user__data">
      <label>{{ literals.firstName }}</label>
      <input type="text" name="first_name" v-model="firstName" @input="$emit('update:firstName', $event.target.value)">
    </div>
    <div class="user__data">
      <label>{{ literals.lastName }}</label>
      <input type="text" name="last_name" v-model="lastName" @input="$emit('update:lastName', $event.target.value)">
    </div>
  </div>
</template>

<style scoped>
.user__form {
  margin: 0 -15px 15px;
  width: calc(100% + 30px);
  display: flex;
  flex-wrap: wrap;
}

.user__data {
  width: 100%;
  padding: 0 15px 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid #c8cfd5;
}

input:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

@media (min-width: 576px) {
  .user__data {
    width: 50%;
    padding: 0 15px;
  }
}

@media (min-width: 992px) {
  .user__form {
    margin-bottom: 170px;
  }
}
</style>
