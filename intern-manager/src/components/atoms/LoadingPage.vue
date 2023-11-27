<template>
  <div class="wrapper"></div>
</template>

<style scoped>
  @keyframes rotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  div {
    height: 50vh;
    cursor: progress;
    position: relative;
  }

  div:before {
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 100% 0 0 0;
    border-left: 3px solid #449571;
    border-top: 3px solid #449571;
    position: absolute;
    transform-origin: 50px 50px;
    animation-timing-function: linear;
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    z-index: 1;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
  }
  div:after {
    content: '';
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 100% 0 0 0;
    border-left: 3px solid #c8cfd5;
    border-top: 3px solid #c8cfd5;
    position: absolute;
    transform-origin: 40px 40px;
    animation-timing-function: linear;
    animation-name: rotate;
    animation-direction: reverse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    z-index: 1;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
  }
</style>
