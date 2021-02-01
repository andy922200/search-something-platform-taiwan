import {
    createStore
} from 'vuex'

import motel from './modules/motel'
import dayjs from 'dayjs'

export default createStore({
    state: {
        today: dayjs(),
        leftNavigationStatus: false,
        windowWidth: 0
    },
    getters: {
        today: state => state.today,
        leftNavigationStatus: state => state.leftNavigationStatus,
        windowWidth: state => state.windowWidth
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
        }
    },
    actions: {
        triggerLeftNavigation ({ commit }, status: boolean) {
            status
                ? commit('setLeftNavigationStatus', true)
                : commit('setLeftNavigationStatus', false)
        }
    },
    modules: {
        motel
    }
})
