import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from './i18n/entry'

// import PrimeVue && other modules start
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Toolbar from 'primevue/toolbar'
import Sidebar from 'primevue/sidebar'
import ProgressSpinner from 'primevue/progressspinner'
import MultiSelect from 'primevue/multiselect'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import PrimeVue && other modules end

import 'normalize.css'
// install PrimeVue CSS
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.provide('rootVueInstance', app)
app.use(VueI18n)
// register PrimeVue Components
app.component('Button', Button)
app.component('Card', Card)
app.component('Dropdown', Dropdown)
app.component('Toolbar', Toolbar)
app.component('Sidebar', Sidebar)
app.component('ProgressSpinner', ProgressSpinner)
app.component('MultiSelect', MultiSelect)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.use(store).use(router).use(PrimeVue).mount('#app')
