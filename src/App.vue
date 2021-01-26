<template>
    <f7-app v-bind="f7params">
        <f7-view main url="/"></f7-view>
    </f7-app>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import { f7 } from 'framework7-vue';
import routes from './routes';

export default {
    name: 'App',
    setup() {
        const state = reactive({
            f7params: {
                id: 'com.myapp.app',
                name: 'F7Vue3',
                theme: 'ios',
                routes,
                view: {
                    browserHistory: true,
                    browserHistorySeparator: '#',
                },
            },
        });

        const routeChange = (newRoute) => {
            window.document.title = newRoute.name;
        };

        onMounted(() => {
            // watch route
            f7.views.main.router.on('routeChange', routeChange);
        });

        return {
            ...toRefs(state),
        };
    },
};
</script>

<style lang="less">
@import './styles/reset.less';
#app {
    // width: 375pt; ===> width: 100vw;
    padding: 0;
    *::-webkit-scrollbar {
        display: none;
    }
    .page-content {
        padding: 0;
    }
}
</style>
