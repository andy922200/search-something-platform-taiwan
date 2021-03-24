<template>
    <div class="motel">
        <div class="dropdown__wrapper">
            <i class="pi pi-map-marker" style="font-size: 2rem;"></i>
            <Dropdown
                class="dropdown--custom"
                v-model="selectedMotelModel"
                :options="motelsForSelector"
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                :filter="true"
                :placeholder="$t('general.PleaseSelect')"
                @change="methodSelectNewMotel"
            >
                <template #optiongroup="slotProps">
                    <div class="p-d-flex p-ai-center country-item">
                        <div>{{slotProps.option.label}}</div>
                    </div>
                </template>
            </Dropdown>
        </div>

        <p class="motel__info">{{selectedMotelModel.value ? selectedMotelModel.value.addressFull : ""}}</p>
        <p class="motel__info">{{selectedMotelModel.value ? selectedMotelModel.value.tel : ""}}</p>

        <div class="motelMap__wrapper">
            <ProgressSpinner v-if="motelLoadingStatus" />
            <div id="motelMap" ref="motelMap" v-else>
                <div class="motelMap__popup">
                    <div class="motelMap__popupContent"></div>
                </div>
            </div>
        </div>

        <Card class="motelCard__info">
            <template #content>
                <DataTable
                    :value="motelsList"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    :rowsPerPageOptions="[10,20,50]"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    responsiveLayout="stack"
                    breakpoint="960px"
                    filterDisplay="menu"
                    :filters="filterRules"
                    selectionMode="single"
                    @row-select="methodSelectNewMotelFromDataTable"
                >
                    <Column
                        field="name"
                        :header="$t('general.Name')"
                        :showApplyButton="false"
                        :showFilterMenu="true"
                        :showFilterMatchModes="false"
                    >
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        <template #filter="{filterCallback}">
                            <InputText
                                type="text"
                                v-model="filterRules.name.value"
                                @keydown.enter="filterCallback()"
                                class="p-column-filter"
                                :placeholder="`Search by name`"
                            >
                            </InputText>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" @click="filterCallback()" :label="$t('general.Close')" class="p-button-danger"></Button>
                        </template>
                    </Column>
                    <Column
                        field="city"
                        :header="$t('general.City')"
                        :showApplyButton="false"
                        :showFilterMenu="true"
                        :showFilterMatchModes="false"
                    >
                        <template #body="{data}">
                            {{data.city}}
                        </template>
                        <template #filter="{filterCallback}">
                            <InputText
                                type="text"
                                v-model="filterRules.city.value"
                                @keydown.enter="filterCallback()"
                                class="p-column-filter"
                                :placeholder="`Search by City`"
                            >
                            </InputText>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" @click="filterCallback()" :label="$t('general.Close')" class="p-button-danger"></Button>
                        </template>
                    </Column>
                    <Column
                        field="area"
                        :header="$t('general.Area')"
                        :showApplyButton="false"
                        :showFilterMenu="true"
                        :showFilterMatchModes="false"
                    >
                        <template #body="{data}">
                            <span class="image-text">{{data.area}}</span>
                        </template>
                        <template #filter>
                            <MultiSelect
                                v-model="filterRules.area.value"
                                :options="filterRules.area.areaList"
                                :filter="false"
                                :placeholder="$t('general.PleaseSelect')"
                                class="p-column-filter"
                                display="chip"
                                style="max-width: 300px;"
                                @change="limitMaximumSelect"
                                @show="changeMultiSelectorHeader"
                            >
                                <template #option="slotProps">
                                    <div>
                                        <span class="image-text">{{slotProps.option}}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" @click="filterCallback()" :label="$t('general.Close')" class="p-button-danger"></Button>
                        </template>
                    </Column>
                    <Column field="addressFull" :header="$t('general.Address')"></Column>
                    <Column field="tel" :header="$t('general.Tel')"></Column>
                </DataTable>
            </template>

        </Card>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, computed, onMounted, ref, reactive
} from 'vue'
import {
    useStore
} from 'vuex'
import {
    MotelModule
} from '../../store/declarations/motel'
import {
    debounce
} from 'lodash'
import {
    Map
} from 'ol'
import {
    generateNewMap
} from '../../utils/openLayer'
import {
    FilterMatchMode
} from 'primevue/api'
import {
    useI18n
} from 'vue-i18n'

export default defineComponent({
    name: 'Motel',
    setup () {
        try {
            const store = useStore()
            const selectedMotelModel = ref({
            })
            const { t } = useI18n()
            let map = undefined as Map | undefined

            onMounted(async () => {
                await store.dispatch('motelModule/getMotelList')
                const defaultMotel: MotelModule.OneMotelData = store.state.motelModule.motels[0]
                const defaultObject = {
                    label: defaultMotel.name,
                    value: defaultMotel
                }
                selectedMotelModel.value = defaultObject
                map = generateNewMap('motelMap', defaultObject.value as MotelModule.OneMotelData)
            })

            const generateUniqueMotelMap = function (selectedMotel: MotelModule.OneMotelData) {
                if (map) {
                    const motelMapDom = document.querySelector('#motelMap')
                    map.dispose()
                    store.commit('motelModule/setLoadingStatus', true)
                    if (motelMapDom) {
                        motelMapDom.innerHTML = `
                            <div class="motelMap__popup">
                                <div class="motelMap__popupContent"></div>
                            </div>
                        `
                    }
                    map = generateNewMap('motelMap', selectedMotel)
                    store.commit('motelModule/setLoadingStatus', false)
                }
            }

            const methodSelectNewMotel = debounce(function (e: {originalEvent: MouseEvent; value: MotelModule.OneMotelData}) {
                const selectedMotel = e.value.value as MotelModule.OneMotelData
                generateUniqueMotelMap(selectedMotel)
            }, 1000)

            const methodSelectNewMotelFromDataTable = debounce(
                function (e: {originalEvent: MouseEvent; data: MotelModule.OneMotelData}) {
                    const selectedMotel = {
                        label: e.data.name,
                        value: e.data
                    } as {label: string; value: MotelModule.OneMotelData}
                    generateUniqueMotelMap(selectedMotel.value)
                    selectedMotelModel.value = selectedMotel
                }, 100)

            const motelsList = computed(() => store.state.motelModule.motels)
            const motelsForSelector = computed(() => store.state.motelModule.motelsForSelector)
            const areaList = computed(() => store.state.motelModule.areaList.map(d => d.label))
            const filterRules = reactive({
                area: {
                    value: undefined,
                    areaList,
                    matchMode: FilterMatchMode.IN
                },
                city: {
                    value: undefined,
                    matchMode: FilterMatchMode.STARTS_WITH
                },
                name: {
                    value: undefined,
                    matchMode: FilterMatchMode.STARTS_WITH
                }
            })
            const limitMaximumSelect = (e: {originalEvent: MouseEvent; value: Array<string>}) => {
                const maximumSelectNumber = 3
                if (e.value.length > maximumSelectNumber) {
                    e.value.pop()
                }
            }

            const changeMultiSelectorHeader = () => {
                const multiSelectHeader = document.querySelector<HTMLElement>('.p-multiselect-header')
                const multiSelectPanel = document.querySelector<HTMLElement>('.p-multiselect-panel')
                if (multiSelectHeader && multiSelectPanel) {
                    multiSelectHeader.innerHTML = `
                        <span style="display:block; width:100%">
                            ${t('general.MultiSelectHeader')}
                        </span>
                    `
                }
            }

            return {
                motelsForSelector,
                motelsList,
                motelLoadingStatus: computed(() => store.state.motelModule.loadingStatus),
                selectedMotelModel,
                methodSelectNewMotel,
                methodSelectNewMotelFromDataTable,
                filterRules,
                limitMaximumSelect,
                changeMultiSelectorHeader
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>

<style lang="scss" scoped src="./styles/Motel.scss"></style>
