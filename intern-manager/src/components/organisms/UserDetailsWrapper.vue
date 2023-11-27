<script setup>
import { ref, computed } from 'vue'
import UserForm from '../molecules/UserForm.vue';
import UserUpdate from '../molecules/UserUpdate.vue';

const props = defineProps({
  firstName: String,
  lastName: String,
  avatar: String,
  newIntern: Boolean,
  id: Number
});

const firstName = ref(props.firstName);
const lastName = ref(props.lastName);

const dynamicData = computed(() => {
  return {
    firstName: firstName,
    lastName: lastName,
  }
})

</script>

<template>
  <div class="wrapper">
    <UserForm :first-name="firstName" :last-name="lastName" @update:firstName="newFirstName => firstName = newFirstName" @update:lastName="newLastName => lastName = newLastName"></UserForm>
    <UserUpdate :new-intern="newIntern" :first-name="dynamicData.firstName" :last-name="dynamicData.lastName" :avatar="props.avatar" :id="props.id"></UserUpdate>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 30px 30px 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
}

@media (min-width: 992px) {
  .wrapper {
    margin: 0 15px 30px;
    width: calc(100% / 3 * 2);
    padding: 75px 30px 20px;
  }
}
</style>
