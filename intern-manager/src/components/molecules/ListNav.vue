<script setup>
import literals from '../../assets/globals';
</script>

<template>
  <div>
    <span></span>
    <span>{{ literals.fullName }}</span>
    <span>{{ literals.action }}</span>
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

span {
  font-weight: 700;
  font-size: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

span:nth-child(1) {
  display: none;
}

span:nth-child(2) {
  width: 70%;
}

span:nth-child(3) {
  width: 30%;
}

@media (min-width: 576px) {
  span:nth-child(1) {
    display: flex;
    width: 15%;
  }

  span:nth-child(2) {
    width: 70%;
  }

  span:nth-child(3) {
    width: 15%;
  }
}

@media (min-width: 992px) {
  span:nth-child(1) {
    width: 8%;
  }

  span:nth-child(2) {
    width: 84.5%;
  }

  span:nth-child(3) {
    width: 7.5%;
  }
}
</style>
