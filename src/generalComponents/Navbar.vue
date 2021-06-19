<template>
    <Toolbar class="navbar">
        <template #left>
            <Sidebar
                :visible="leftNavigationStatus"
                :showCloseIcon="false"
                class="sidebar"
            >
                <div class="sidebar__header">
                    <h3 class="sidebar__headerTitle">{{$t("Navbar.content")}}</h3>
                    <Button
                        icon="pi pi-times"
                        class="sidebar__cancelBtn p-button-danger"
                        @click="triggerLeftNavigation(leftNavigationStatus !== leftNavigationStatus)"
                    />
                </div>
                <div class="sidebar__body">
                    <router-link
                        v-for="item in routeList"
                        :key="item.name"
                        :to="item.path"
                        @click="triggerLeftNavigation(false, $event)"
                    >
                        {{$t(`Navbar.sidebar.${item.label}`)}}
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
                <h3>{{selectedPage !== "" ? $t(`${selectedPage}.title`) : ""}}</h3>
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
    defineComponent, computed, ref, reactive, watch
} from 'vue'

import {
    useRoute, useRouter
} from 'vue-router'

import {
    cloneDeep
} from 'lodash'

import {
    useStore
} from 'vuex'

import {
    LayoutLanguages
} from '@/i18n/config/locales'
import {
    useI18n
} from 'vue-i18n'

export default defineComponent({
    name: 'Navbar',
    setup () {
        const store = useStore()
        const currentRoute = reactive(useRoute())
        const router = useRouter()
        const routeList = router.options.routes.filter(route => {
            const routeName = route.name as string
            return !routeName.includes('404')
        })
        const { locale } = useI18n()
        const selectedPage = ref('')

        const triggerLeftNavigation = (status: boolean, $event?: MouseEvent) => {
            if ($event) {
                $event.preventDefault()
                router.push({
                    path: `${($event.target as unknown as HTMLHyperlinkElementUtils).hash.split('#')[1]}`
                })
            }
            store.dispatch('triggerLeftNavigation', status)
        }

        watch(() => cloneDeep(currentRoute), (currentValue) => {
            if (currentValue.name) {
                selectedPage.value = currentValue.name as string
            }
        })

        return {
            leftNavigationStatus: computed(() => store.getters.leftNavigationStatus),
            triggerLeftNavigation,
            selectedLanguageModel: computed({
                get () {
                    return store.getters.selectedLanguage
                },
                set (value: string) {
                    locale.value = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            LayoutLanguages,
            selectedPage,
            routeList
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/Navbar.scss"></style>
