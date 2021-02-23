import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import PrimeVue && other modules start
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Toolbar from 'primevue/toolbar'
import Sidebar from 'primevue/sidebar'
// import PrimeVue && other modules end

import 'normalize.css'
// install PrimeVue CSS
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
// register PrimeVue Components
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('Toolbar', Toolbar)
app.component('Sidebar', Sidebar)

app.use(store).use(router).use(PrimeVue).mount('#app')
