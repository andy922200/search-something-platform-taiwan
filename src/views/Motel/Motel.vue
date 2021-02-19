<template>
    <div class="home">
        <h3>Motel Search</h3>
        <Dropdown
            v-model="selectedMotel"
            :options="motels"
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
        >
            <template #optiongroup="slotProps">
                <div class="p-d-flex p-ai-center country-item">
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, computed, ref
} from 'vue'
import {
    useStore
} from 'vuex'

export default defineComponent({
    name: 'Motel',
    async setup () {
        try {
            const store = useStore()
            const selectedMotel = ref({
            })

            store.dispatch('motelModule/getMotelList')

            return {
                motels: computed(() => store.state.motelModule.motels),
                selectedMotel
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
