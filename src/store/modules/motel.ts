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
            const cityIdList = [...new Set(rawData.feed.entry.map((d: { [index: string]: MotelModule.CellContent }) => d.gsx$cityid.$t))].sort() as Array<string>
            const result = [] as Array<MotelModule.GetMotelListReturnValue>

            const initialObjects: Array<MotelModule.OneMotelData> = rawData.feed.entry.map((d: { [index: string]: MotelModule.CellContent }) => {
                const newObject: MotelModule.OneMotelData = {
                    id: undefined,
                    name: undefined,
                    addressFull: undefined,
                    city: undefined,
                    area: undefined,
                    zip: undefined,
                    cityId: undefined,
                    tel: undefined,
                    latitude: undefined,
                    longitude: undefined
                }
                const filledKey = Object.keys(newObject)
                filledKey.forEach((key: string) => {
                    if (key === 'latitude' || key === 'longitude') {
                        newObject[`${key}`] = Number(d[`gsx$${key.toLowerCase()}`].$t)
                    } else {
                        newObject[`${key}`] = d[`gsx$${key.toLowerCase()}`].$t
                    }
                })
                return newObject
            })

            cityIdList.forEach((id: string) => {
                result.push({
                    cityId: id,
                    label: undefined,
                    items: []
                })
            })

            initialObjects.forEach((d: MotelModule.OneMotelData) => {
                result.forEach(content => {
                    if (content.cityId === d.cityId) {
                        content.items.push({
                            label: d.name,
                            value: {
                                ...d
                            }
                        })
                        if (!content.label) {
                            content.label = d.city
                        }
                    }
                })
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
