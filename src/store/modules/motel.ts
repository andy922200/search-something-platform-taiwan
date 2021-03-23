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
    motels: [],
    motelsForSelector: [],
    areaList: [],
    loadingStatus: false
}

const getters: GetterTree<MotelModule.State, RootState> = {
    motels: (state: MotelModule.State) => state.motels,
    motelsForSelector: (state: MotelModule.State) => state.motelsForSelector,
    areaList: (state: MotelModule.State) => state.areaList,
    loadingStatus: (state: MotelModule.State) => state.loadingStatus
}

const mutations: MutationTree<MotelModule.State> = {
    setMotels (state: MotelModule.State, payload: Array<MotelModule.OneMotelData>) {
        state.motels = payload
    },
    setMotelsForSelector (state: MotelModule.State, payload: Array<MotelModule.GetMotelListReturnValue>) {
        state.motelsForSelector = payload
    },
    setAreaList (state: MotelModule.State, payload: Array<MotelModule.AreaOption>) {
        state.areaList = payload
    },
    setLoadingStatus (state: MotelModule.State, payload: boolean) {
        state.loadingStatus = payload
    }
}

const actions: ActionTree<MotelModule.State, RootState> = {
    async getMotelList ({ commit }) {
        try {
            commit('setLoadingStatus', true)

            const { data: rawData } = await motelDatabaseAPIs.getMotelList()
            const cityIdList = [...new Set(rawData.feed.entry.map((d: { [index: string]: MotelModule.CellContent }) => d.gsx$cityid.$t))].sort() as Array<string>
            const resultForSelector = [] as Array<MotelModule.GetMotelListReturnValue>
            const areaList = [] as Array<MotelModule.AreaOption>

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
            }).sort((a, b) => a.cityId > b.cityId ? 1 : -1)

            cityIdList.forEach((id: string) => {
                resultForSelector.push({
                    cityId: id,
                    label: undefined,
                    items: []
                })
            })

            initialObjects.forEach((d: MotelModule.OneMotelData) => {
                if (areaList.findIndex(area => area.value === d.zip) === -1) {
                    areaList.push({
                        label: d.area ? d.area : '',
                        value: d.zip ? d.zip : ''
                    })
                }

                resultForSelector.forEach(content => {
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

            areaList.sort((a, b) => a.value > b.value ? 1 : -1)

            commit('setAreaList', areaList)
            commit('setMotels', initialObjects)
            commit('setMotelsForSelector', resultForSelector)
            commit('setLoadingStatus', false)
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
