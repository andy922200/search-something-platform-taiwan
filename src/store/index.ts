import {
    createStore
} from 'vuex'

import motelModule from './modules/motel'
import dayjs from 'dayjs'

// vue-i18n start
import {
    Locales
} from '@/i18n/config/locales'
import {
    defaultLocale
} from '@/i18n/config'
// vue-i18n end

import {
    RootState
} from './declarations/index'

const state: RootState = {
    today: dayjs(),
    leftNavigationStatus: false,
    windowWidth: 0,
    selectedLanguage: defaultLocale
}

export default createStore({
    state,
    getters: {
        today: state => state.today,
        leftNavigationStatus: state => state.leftNavigationStatus,
        windowWidth: state => state.windowWidth,
        selectedLanguage: state => state.selectedLanguage
    },
    mutations: {
        setToday (state, time: string) {
            state.today = dayjs(time)
        },
        setLeftNavigationStatus (state, status: boolean) {
            state.leftNavigationStatus = status
        },
        setWindowWidth (state, value: number) {
            state.windowWidth = value
        },
        setLanguage (state, payload: Locales) {
            state.selectedLanguage = payload
        }
    },
    actions: {
        triggerLeftNavigation ({ commit }, status: boolean) {
            status
                ? commit('setLeftNavigationStatus', true)
                : commit('setLeftNavigationStatus', false)
        },
        selectNewDefaultLanguage ({ getters, commit }, lang: Locales) {
            const { selectedLanguage }: { selectedLanguage: Locales } = getters
            if (lang !== selectedLanguage) {
                commit('setLanguage', lang)
            }
        }
    },
    modules: {
        motelModule
    }
})
