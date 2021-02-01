<template>
    <el-container>
        <el-header height="80px">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/demo">Demo</router-link>
            </div>
        </el-header>
        <el-main>
            <Suspense>
                <template #default>
                    <router-view />
                </template>
                <template #fallback>
                    <p>Loading...</p>
                </template>
            </Suspense>
        </el-main>
    </el-container>
</template>

<style lang="scss" src="./styles/App.scss"></style>
