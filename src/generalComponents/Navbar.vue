<template>
    <Toolbar class="navbar">
        <template #left>
            <Sidebar
                :visible="leftNavigationStatus"
                :showCloseIcon="false"
                class="sidebar"
            >
                <div class="sidebar__header">
                    <h3 class="sidebar__headerTitle">{{$t("navbar.content")}}</h3>
                    <Button
                        icon="pi pi-times"
                        class="sidebar__cancelBtn p-button-danger"
                        @click="triggerLeftNavigation(leftNavigationStatus !== leftNavigationStatus)"
                    />
                </div>
                <div class="sidebar__body">
                    <router-link to="/" @click="triggerLeftNavigation(false, $event)">
                        {{$t("navbar.sidebar.taiwanMotelSearch")}}
                    </router-link>
                    <router-link to="/about" @click="triggerLeftNavigation(false, $event)">
                        {{$t("navbar.sidebar.about")}}
                    </router-link>
                </div>
            </Sidebar>
            <div class="area">
                <i
                    class="pi pi-bars p-toolbar-separator p-mr-2"
                    @click="triggerLeftNavigation(true)"
                />
            </div>
            <div class="area">
                <h3>{{$t("navbar.title")}}</h3>
            </div>
            <div class="area">
                <Dropdown
                    v-model="selectedLanguageModel"
                    :options="LayoutLanguages"
                    optionLabel="title"
                    optionValue="param"
                    placeholder="Select a Language"
                />
            </div>
        </template>
    </Toolbar>
</template>

<script lang="ts">
import {
    defineComponent, computed, inject, DefineComponent
} from 'vue'

import {
    useRouter
} from 'vue-router'

import {
    useStore
} from 'vuex'

import {
    LayoutLanguages
} from '@/i18n/config/locales'

export default defineComponent({
    name: 'Navbar',
    setup () {
        const store = useStore()
        const router = useRouter()
        const root = inject('rootVueInstance') as DefineComponent

        const triggerLeftNavigation = (status: boolean, $event?: MouseEvent) => {
            if ($event) {
                $event.preventDefault()
                router.push({
                    path: `${($event.target as unknown as HTMLHyperlinkElementUtils).pathname}`
                })
            }
            store.dispatch('triggerLeftNavigation', status)
        }
        return {
            leftNavigationStatus: computed(() => store.getters.leftNavigationStatus),
            triggerLeftNavigation,
            selectedLanguageModel: computed({
                get () {
                    return store.getters.selectedLanguage
                },
                set (value: string) {
                    root.__VUE_I18N__.global.locale = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            test: computed(() => store.getters.selectedLanguage),
            LayoutLanguages
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/Navbar.scss"></style>
