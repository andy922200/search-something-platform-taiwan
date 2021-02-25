<template>
    <div class="p-grid">
        <div class="p-col-12">
            <Navbar />
        </div>
        <Suspense>
            <template #default>
                <div class="p-col-12">
                    <router-view />
                </div>
            </template>
            <template #fallback>
                <div class="p-col-12">
                    <p>Loading...</p>
                </div>
            </template>
        </Suspense>
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
