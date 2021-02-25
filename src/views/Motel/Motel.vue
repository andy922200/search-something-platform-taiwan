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
            @change="selectNewMotel"
        >
            <template #optiongroup="slotProps">
                <div class="p-d-flex p-ai-center country-item">
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Dropdown>
        <div class="motelMap__wrapper">
            <div id="motelMap" ref="motelMap"></div>
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
    generateNewMap
} from '../../utils/openLayer'

export default defineComponent({
    name: 'Motel',
    async setup () {
        try {
            const store = useStore()
            const selectedMotel = ref({
            })
            const selectNewMotel = debounce(function (e: {originalEvent: MouseEvent; value: MotelModule.OneMotelData}) {
                console.log(e.value.value)
            }, 3000)

            onMounted(() => {
                generateNewMap('motelMap')
            })

            store.dispatch('motelModule/getMotelList')

            return {
                motels: computed(() => store.state.motelModule.motels),
                selectedMotel,
                selectNewMotel
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>

<style lang="scss" scoped src="./styles/Motel.scss"></style>
