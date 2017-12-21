<template>
    <div class="column middle">
        <div class="column-header">
            <slot></slot>
        </div>

        <section ref="content">
            <slot name="content"></slot>
        </section>
    </div>
</template>

<script>
    import {addResizeEvent} from '../../utils/event-listener'

    export default {
        data() {
            return {
                lastMargin: '0px'
            }
        },
//        mounted() {
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
//        }
    }
</script>

<style lang="scss">
    .column.middle {
        background-color: transparent;
        flex-direction: column;
        padding: 0;

        .column-header {
            background-color: transparent;
            min-height: 30px;
            max-height: 30px;
            justify-content: center;
            flex-direction: row;
        }

        section {
            border-radius: 4px;
            flex-grow: 1;
            flex-direction: column;
            padding: 5px;
            transition: margin .3s, padding .3s, transform .3s;
        }
    }
</style>