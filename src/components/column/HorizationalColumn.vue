<template>
    <horizontal-scrollbar ref="body">
        <template slot="toolbar">
            <slot name="toolbar"></slot>
        </template>

        <div ref='column' class="column horizational">
            <div class="item" :key="index" v-for="item, index in items"
                 :style="{height: height + 'px', width: width + 'px'}">
                {{ item.label }}
            </div>
        </div>
    </horizontal-scrollbar>
</template>

<script>
    import HorizontalScrollbar from '../scrollbar/HorizontalScrollbar.vue'
    //    import {addResizeEvent} from '../../utils/event-listener';

    export default {
        watch: {
            toggleItem(val) {
                if (val) {
                    this.$refs.column.style.whiteSpace = 'normal';
                    this.$refs.body.$refs.content.style.marginLeft = 0;
                    this.$refs.body.$refs.scrollbarXCricle.style.left = 0;
                    this.$refs.body.$refs.scrollbarX.style.display = 'none';
                    this.$refs.body.currentMarginL = 0;
                }
                else {
                    this.$refs.column.style.whiteSpace = 'nowrap';
                    this.$refs.body.$refs.scrollbarX.style.display = 'flex';
                }

                document.body.onresize();
            }
        },
        components: {HorizontalScrollbar},
        props: {
            items: Array,
            height: Number,
            width: Number,
            toggleItem: Boolean
        },
    }
</script>

<style lang="scss">
    .column.horizational {
        /*background-color: rgba(0, 0, 0, 0.3);*/
        padding: 5px;
        height: auto;
        display: inline-block;
        min-width: 100%;
        margin: 0;

        overflow: hidden;
        white-space: nowrap;

        .item {
            display: inline-block;
            /*background-color: rgba(211, 212, 214, 0.3);*/
            margin: 30px;
        }

        .item:first-child {
            margin-left: 30px;
        }

        .item:last-child {
            margin-right: 30px;
        }
    }
</style>