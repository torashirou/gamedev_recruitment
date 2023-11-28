<script>
import PopupBasic from '../atoms/PopupBasic.vue'

export default {
    name: 'ConfirmDialogue',
    components: { PopupBasic },

    data: () => ({
        // Parameters that change depending on the type of dialogue
        title: undefined,
        message: undefined, // Main text content
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: undefined, // text for cancel button, when undefined - no cancel button appears
        
        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            this.title = opts.title
            this.message = opts.message
            this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }
            // Once we set our config, we tell the popup modal to open
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User canceled the dialogue'))
        },
    },
}
</script>

<template>
  <PopupBasic ref="popup">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <div>
      <button v-if="cancelButton" @click="_cancel">{{ cancelButton }}</button>
      <a @click="_confirm">{{ okButton }}</a>
    </div>
  </PopupBasic>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0 0;
  }

  a {
    background: #449571;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 40%;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-transform: capitalize;
  }

  a:only-child {
    width: 100%;
  }

  button {
    background: #aeb5bc;
    border: none;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 40%;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    text-transform: capitalize;
  }
</style>