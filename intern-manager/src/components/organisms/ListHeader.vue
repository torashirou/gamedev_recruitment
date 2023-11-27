<script setup>
import { RouterLink } from 'vue-router';
import literals from '../../assets/literals';

defineProps(['modelValue']);
defineEmits(['update:modelValue']);

</script>

<template>
  <div>
    <span>
      <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="literals.searchUsers" />
      <font-awesome-icon icon="magnifying-glass" />
    </span>
    <RouterLink to="/user"><font-awesome-icon icon="plus" />Add User</RouterLink>
  </div>
</template>

<style scoped>
div {
  padding: 1rem 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #f5f7f9;
}

input {
  height: 2.5rem;
  width: 100%;
  border: none;
  font-size: 15px;
  font-weight: 700;
  padding: 0 10px;
  background: #f5f7f9;
}

input:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

span {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  display: block;
}

span svg {
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 15px;
}

a {
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

svg {
  margin-right: 15px;
}

@media (min-width: 576px) {
  div {
    flex-direction: row;
    align-items: center;
  }

  span {
    width: 50%;
    margin-bottom: 0;
  }

  a {
    width: 9rem;
  }
}

@media (min-width: 992px) {
  span {
    width: 32%;
    font-size: 15px;
  }
}
</style>
