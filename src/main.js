import babelpolyfill from 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import NProgress from 'nprogress';

import './assets/main.scss'
import './assets/dissable-select.scss'
import './assets/theme/light.scss'
import './assets/theme/common.scss'

import 'vue2-scrollbar/dist/style/vue2-scrollbar.css';
import 'font-awesome/css/font-awesome.min.css';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});


import router from './router';

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {

    NProgress.start();
    next();
    // NProgress.done();
});

router.afterEach(() => {
    NProgress.done();
});


new Vue({
    // i18n,
    router,
    render: h => h(App)
}).$mount("#app");
