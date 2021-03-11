<template>
    <div class="motel">
        <Dropdown
            class="dropdown--custom"
            v-model="selectedMotel"
            :options="motels"
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
        <div class="motelMap__wrapper">
            <div id="motelMap" ref="motelMap">
                <div class="motelMap__popup">
                    <div class="motelMap__popupContent"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, computed, onMounted, ref
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

export default defineComponent({
    name: 'Motel',
    setup () {
        try {
            const store = useStore()
            const selectedMotel = ref({
            })
            let map = undefined as Map | undefined

            onMounted(async () => {
                await store.dispatch('motelModule/getMotelList')
                const defaultMotel: MotelModule.OneMotelData = store.state.motelModule.motels[0].items[0]
                selectedMotel.value = defaultMotel
                map = generateNewMap('motelMap', defaultMotel.value as MotelModule.OneMotelData)
            })

            const methodSelectNewMotel = debounce(
                function (e: {originalEvent: MouseEvent; value: MotelModule.OneMotelData}) {
                    const selectedMotel = e.value.value as MotelModule.OneMotelData
                    if (map) {
                        const motelMapDom = document.querySelector('#motelMap')
                        map.dispose()
                        if (motelMapDom) {
                            motelMapDom.innerHTML = `
                            <div class="motelMap__popup">
                                <div class="motelMap__popupContent"></div>
                            </div>
                        `
                        }
                        map = generateNewMap('motelMap', selectedMotel)
                    }
                }, 3000)

            return {
                motels: computed(() => store.state.motelModule.motels),
                selectedMotel,
                methodSelectNewMotel
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>

<style lang="scss" scoped src="./styles/Motel.scss"></style>
