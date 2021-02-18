<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/demo">Demo</router-link>
            </div>
        </div>
        <Suspense>
            <template #default>
                <div class="p-col-12">
                    <router-view />
                </div>
            </template>
            <template #fallback>
                <div class="p-col-12">
                    <p>Loading...</p>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<style lang="scss" src="./styles/App.scss"></style>
