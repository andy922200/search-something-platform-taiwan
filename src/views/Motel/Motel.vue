<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
    </div>
</template>

<script lang="ts">
import {
    defineComponent, computed
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
