<template>
    <div class="column simple">
        <NavHeader>
            <div slot="left-nav">
                <slot name="left-nav"></slot>
            </div>
            <span slot="middle-nav">{{ title }}</span>
            <div class="icon-area" slot="right-nav" v-if="icon">
                <i :class="['fa', icon]"></i>
            </div>
        </NavHeader>

        <section ref="content">
            <!--<vue-scrollbar>-->
                <!--<div>-->
                    <slot name="content"></slot>
                <!--</div>-->
            <!--</vue-scrollbar>-->
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
        },
        data() {
            return {
                lastMargin: '0px'
            }
        },
        mounted() {
//            let contentBody = this.$refs.content;
//
//            let scrollArea = contentBody.getElementsByClassName('vue-scrollbar__area')[0];
//            contentBody.style.width = contentBody.style.clientWidth + 'px';
//
//            if (contentBody.clientHeight < scrollArea.clientHeight) {
//                contentBody.style.paddingRight = '2px';
//                scrollArea.style.marginRight = '12px';
//
//            }
//
//            addResizeEvent(() => {
//                if (contentBody.clientHeight < scrollArea.clientHeight) {
//                    contentBody.style.paddingRight = '2px';
//                    scrollArea.style.marginRight = '12px';
//                    scrollArea.style.marginTop = this.lastMargin;
//                } else {
//                    this.lastMargin = scrollArea.style.marginTop;
//                    scrollArea.style.marginTop = '0px';
//                    contentBody.style.paddingRight = '5px';
//                    scrollArea.style.marginRight = '0';
//                }
//            });

        }

    }
</script>


<style lang="scss">
    .column.simple {

        section {
            margin-top: 5px;
            background-color: rgba(255, 255, 255, .1);
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

