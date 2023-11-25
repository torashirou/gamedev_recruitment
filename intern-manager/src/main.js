import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faPlus, faPenToSquare, faTrash, faChevronLeft, faChevronRight, faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faPlus, faPenToSquare, faTrash, faChevronLeft, faChevronRight, faCamera);

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
