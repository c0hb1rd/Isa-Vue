<template>
    <div class="middle-header common-header">
        <div class="left-nav">
            <slot name="left-nav"></slot>
        </div>

        <div class="middle-nav">
            <slot name="middle-nav"></slot>
        </div>

        <div class="right-nav">
            <slot name="right-nav"></slot>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .middle-header {
        flex-grow: 1;
        max-height: 50px;
        flex-direction: row;
        overflow: visible;

        & > div {
            height: 50px;
        }

        .left-nav, .right-nav {
            flex-grow: 1;
        }

        .middle-nav {
            max-width: 210px;
            min-width: 210px;
            height: 210px;
            margin-top: -110px;
            border-radius: 105px;
            background-color: transparent;

            overflow: hidden;
            flex-direction: column;

        }
    }
</style>