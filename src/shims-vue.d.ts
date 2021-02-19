declare module '*.vue' {
    import type {
        DefineComponent
    } from 'vue'
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const component: DefineComponent<{}, {}, any>
    /* eslint-disable @typescript-eslint/no-explicit-any */
    export default component
}

declare module 'primevue/*' {
    import {
        PluginFunction
    } from 'vue'
    export const install: PluginFunction<{}>
}
