<template>
    <div>
        <common-header>
            <TrapezoidHeader>
                    <button @click="change">换肤</button>
                </TrapezoidHeader>
        </common-header>
        <!--<nav-header>-->
            <!--<template slot="middle-nav">-->

            <!--</template>-->
        <!--</nav-header>-->
        <!--<MiddleHeader>-->
        <!--<template slot="middle-nav">-->
        <!--<RotateArea>-->
        <!--<button @click="change">换肤</button>-->
        <!--&lt;!&ndash;<img src="../assets/images/椭圆形.png" style="width: 200px; height: 200px;" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;<span>Hello, World</span>&ndash;&gt;-->
        <!--</RotateArea>-->
        <!--</template>-->
        <!--</MiddleHeader>-->
        <transition name="el-fade-in" mode="out-in" appear>
            <router-view class="common-body"></router-view>
        </transition>
        <common-footer>c0hb1rd.h4ck@gmail.com</common-footer>
    </div>
</template>

<script>
    import CommonHeader from '../components/header/CommonHeader.vue'
    import MiddleHeader from '../components/header/MiddleHeader.vue'
    import NavHeader from '../components/header/NavHeader.vue'
    import TrapezoidHeader from '../components/header/TrapezoidHeader.vue'
    import CommonFooter from '../components/footer/CommonFooter.vue'
    import RotateArea from '../components/animate/RotateArea.vue'


    export default {
        components: {CommonHeader, CommonFooter, MiddleHeader, RotateArea, NavHeader, TrapezoidHeader},
        methods: {
            change() {
                if (document.body.className === 'light-theme')
                    document.body.className = 'common-theme';
                else
                    document.body.className = 'light-theme';
            }
        }
    }
</script>

<style lang="scss">
    button {
        margin: 0;
    }
</style>