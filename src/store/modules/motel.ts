import {
    GetterTree, ActionTree, MutationTree
} from 'vuex'

import {
    motelDatabaseAPIs
} from '../../utils/apis'

import {
    RootState
} from '../declarations/index'

import {
    MotelModule
} from '../declarations/motel'

const state: MotelModule.State = {
    motels: []
}

const getters: GetterTree<MotelModule.State, RootState> = {
    motels: (state: MotelModule.State) => state.motels
}

const mutations: MutationTree<MotelModule.State> = {
    setMotels (state: MotelModule.State, payload: Array<MotelModule.OneMotelData>) {
        state.motels = payload
    }
}

const actions: ActionTree<MotelModule.State, RootState> = {
    async getMotelList ({ commit }) {
        try {
            const { data: rawData } = await motelDatabaseAPIs.getMotelList()
            const result: Array<MotelModule.OneMotelData> = rawData.feed.entry.map((d: { [index: string]: MotelModule.CellContent }) => {
                const newObject: MotelModule.OneMotelData = {
                    id: undefined,
                    name: undefined,
                    address: {
                        full: undefined,
                        city: undefined,
                        area: undefined,
                        zip: undefined
                    },
                    tel: undefined
                }
                const filledKey = ['id', 'addressarea', 'addresscity', 'addressfull', 'addresszip', 'name', 'tel']
                filledKey.forEach((key: string) => {
                    key.includes('address')
                        ? newObject.address[`${key.slice(7, key.length)}`] = d[`gsx$address${key.slice(7, key.length)}`].$t
                        : newObject[`${key}`] = d[`gsx$${key}`].$t
                })
                return newObject
            })
            commit('setMotels', result)
        } catch (err) {
            console.log(err)
        }
    }
}

const data = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default data
