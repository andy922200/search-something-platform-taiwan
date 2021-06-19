<template>
    <div class="about">
        <h2>{{$t('Navbar.sidebar.taiwanMotelSearch')}}</h2>
        <p>{{$t('About.dataResources')}}：
            <a href="https://www.google.com/maps/d/viewer?mid=1acWLkLWyki5Ar-ajXI6wSmhlBVg&ll=23.87249485207198%2C121.04822130000001&z=8">QK TODAY 摩鐵、旅館休息快找</a>
        </p>
        <Panel :header="$t('About.corePackages')">
            <div class="p-grid about__packages-list">
                <div
                    v-for="item in packagesList"
                    :key="item.name"
                    class="p-col-12 p-md-6 p-lg-3 about__packages-list-item-wrapper"
                >
                    <div class="img-wrapper">
                        <img :src="`${item.imageSrc}`" :alt="item.name">
                    </div>
                    <p class="about__packages-list-item-name">{{item.name}}</p>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'About',
    setup () {
        const packagesList = [
            {
                name: 'Vue 3',
                imageSrc: require('../../assets/vue-logo.png')
            },
            {
                name: 'ESLint',
                imageSrc: require('../../assets/eslint-logo.png')
            },
            {
                name: 'Prime Vue',
                imageSrc: require('../../assets/primevue-logo.png')
            },
            {
                name: 'TypeScript',
                imageSrc: require('../../assets/typescript-logo.png')
            }
        ]

        return {
            packagesList
        }
    }
})
</script>

<style scoped lang="scss" src="./styles/About.scss"></style>
