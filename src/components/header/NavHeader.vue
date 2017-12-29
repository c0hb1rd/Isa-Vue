<template>
    <div class="nav-header common-header">
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
    .nav-header {
        flex-grow: 1;
        max-height: 30px;
        min-height: 30px;
        flex-direction: row;
        overflow: visible;
        border-radius: 4px;
        margin-bottom: 5px;

        & > div {
            height: 20px;
            line-height: 20px;
            padding: 5px;
            font-size: 13px;
        }

        .left-nav, .right-nav {
            flex-grow: 1;
        }

        .left-nav {
            justify-content: flex-start;
        }

        .right-nav {
            justify-content: flex-end;
        }

        .middle-nav {
            max-width: 210px;
            min-width: 210px;

            justify-content: center;
        }
    }
</style>