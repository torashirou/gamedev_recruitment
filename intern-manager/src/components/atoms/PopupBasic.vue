<script>
export default {
  name: 'PopupBasic',

  // private variables
  data: () => ({
    isVisible: false,
  }),

  methods: {
    // Show popup
    open() {
      this.isVisible = true
    },

    // Hide popup
    close() {
      this.isVisible = false
    },
  },
}
</script>

<template>
  <transition name="fade">
    <div class="popup" v-if="isVisible">
      <div class="window">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.popup {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    z-index: 1;
    margin: 0;
}

.window {
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
}
</style>