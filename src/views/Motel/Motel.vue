<template>
    <div class="home">
        <h3>Motel Search</h3>

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
            store.dispatch('motelModule/getMotelList')

            return {
                motels: computed(() => store.state.motelModule.motels)
            }
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
