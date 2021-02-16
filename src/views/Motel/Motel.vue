<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import {
    motelDatabaseAPIs
} from '../../utils/apis'
import {
    Motel
} from './declarations/Motel'

export default defineComponent({
    name: 'Motel',
    async setup () {
        try {
            const { data: rawData } = await motelDatabaseAPIs.getMotelList()
            const result = rawData.feed.entry.map((d: {[index: string]: Motel.CellContent}) => {
                const newObject: Motel.OneMotelData = {
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
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
})
</script>
