<template>
    <div class="column simple">
        <NavHeader v-if="showHeader">
            <div slot="left-nav">
                <slot name="left-nav"></slot>
            </div>
            <span slot="middle-nav">{{ title }}</span>
            <div class="icon-area" slot="right-nav" v-if="icon">
                <i :class="['fa', icon]"></i>
            </div>
        </NavHeader>

        <section ref="content">
            <slot name="content"></slot>
        </section>
    </div>
</template>

<script>
    import NavHeader from '../header/NavHeader.vue'
    import {addResizeEvent} from '../../utils/event-listener'

    export default {
        components: {NavHeader},
        props: {
            title: String,
            icon: String,
            showHeader: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                lastMargin: '0px'
            }
        }

    }
</script>


<style lang="scss">
    .column.simple {
        flex-grow: 1;

        & > section {
            flex-grow: 1;
            flex-direction: column;
            padding: 5px;
            transition: margin .3s, padding .3s, transform .3s;
        }

        .icon-area {
            margin-right: 5px;
            justify-content: center;
            flex-direction: column;
        }
    }
</style>

