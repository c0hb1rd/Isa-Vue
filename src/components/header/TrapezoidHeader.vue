<template>
    <div class="trapezoid-header">
        <div class="icon-area" v-if="icon">
            <i :class="['fa', icon]"></i>
        </div>

        <div class="trapezoid-header_title">
            <span class="">{{ title }}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            icon: String
        }
    }
</script>

<style lang="scss">
    .trapezoid-header {
        border-radius: 5px 5px 0 0;
        height: 20px;
        line-height: 20px;
        min-width: 80px;
        padding: 5px;

        position: relative;
        flex-direction: row;
        justify-content: center;

        border-left: 5px solid transparent;
        border-right: 5px solid transparent;

        &:before {
            content: '';
            position: absolute;
            top: 3px;
            left: -30px;

            border-bottom: 27px solid;
            border-left: 25px solid transparent;
        }

        &:after {
            content: '';
            position: absolute;
            top: 3px;
            right: -30px;

            border-bottom: 27px solid;
            border-right: 25px solid transparent;

        }

        .icon-area {
            margin-right: 5px;
        }

        .icon-area, .trapezoid-header_title {
            font-size: 12px;

            justify-content: center;
            flex-direction: column;
        }
    }


</style>