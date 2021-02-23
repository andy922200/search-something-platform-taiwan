<template>
    <Toolbar class="navbar">
        <template #left>
            <Sidebar
                :visible="leftNavigationStatus"
                :showCloseIcon="false"
            >
                <div class="sidebar__header">
                    <h5 class="sidebar__headerTitle">Content</h5>
                    <Button
                        icon="pi pi-times"
                        class="sidebar__cancelBtn p-button-danger"
                        @click="triggerLeftNavigation(leftNavigationStatus !== leftNavigationStatus)"
                    />
                </div>
            </Sidebar>
            <i
                class="pi pi-bars p-toolbar-separator p-mr-2"
                @click="triggerLeftNavigation(true)"
            />
        </template>

        <template #right>
            <Button icon="pi pi-search" class="p-mr-2" />
        </template>
    </Toolbar>
</template>

<script lang="ts">
import {
    defineComponent, computed
} from 'vue'
import {
    useStore
} from 'vuex'

export default defineComponent({
    name: 'Navbar',
    setup () {
        const store = useStore()
        const triggerLeftNavigation = (status: boolean) =>
            store.dispatch('triggerLeftNavigation', status)

        return {
            leftNavigationStatus: computed(() => store.getters.leftNavigationStatus),
            triggerLeftNavigation
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/Navbar.scss"></style>
