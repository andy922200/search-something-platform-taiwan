import {
    createStore
} from 'vuex'

import motelModule from './modules/motel'
import dayjs from 'dayjs'

import {
    RootState
} from './declarations/index'

const state: RootState = {
    today: dayjs(),
    leftNavigationStatus: false,
    windowWidth: 0
}

export default createStore({
    state,
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
        motelModule
    }
})
