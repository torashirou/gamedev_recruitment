<script setup>
import { ref, watch } from 'vue'
import UserAvatar from '../atoms/UserAvatar.vue';
import literals from '../../assets/globals';

const props = defineProps({
  avatar: String,
});

defineEmits(['update:avatar']);

const hideInput = ref(false);
const inputClass = ref('--hidden')
const avatar = ref(props.avatar);

// Toggle input visibility
watch(hideInput, (newHideInput) => {
  newHideInput ? inputClass.value = '--show' : inputClass.value = '--hidden';
})

</script>

<template>
  <div class="wrapper">
    <UserAvatar :avatar="avatar"></UserAvatar>
    <input type="text" name="avatar" :class="inputClass" v-model="avatar" @input="$emit('update:avatar', $event.target.value)" />
    <button @click="$event.preventDefault(); hideInput = !hideInput"><font-awesome-icon icon="camera" />{{ literals.changePhoto }}</button>
  </div>
</template>

<style scoped>
div {
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
}

input {
  height: 2.5rem;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #c8cfd5;
  padding: 0 15px;
}

input.--hidden {
  opacity: 0;
  pointer-events: none;
}

input.--show:focus {
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

button {
  border-radius: 5px;
  border: 1px solid #c8cfd5;
  background: #ffffff;
  height: 2.5rem;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
  box-shadow: 0px 0px 5px 0px rgba(68, 149, 113, 1);
}

svg {
  margin-right: 5px;
}

@media (min-width: 992px) {
  div {
    width: calc(100% / 3);
    margin: 0 15px 30px;
  }
}
</style>
