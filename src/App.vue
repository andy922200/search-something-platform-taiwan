<template>
    <div class="p-grid">
        <div class="p-col-12">
            <Navbar />
        </div>
        <div class="p-col-12">
            <router-view />
        </div>
        <ScrollTop />
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

import Navbar from './generalComponents/Navbar.vue'

export default defineComponent({
    name: 'App',
    components: {
        Navbar
    }
})
</script>

<style lang="scss" src="./styles/App.scss"></style>
