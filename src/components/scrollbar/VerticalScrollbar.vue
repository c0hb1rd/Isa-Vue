<template>
    <div ref='body' class="scrollbar vertical">
        <div ref='content' class="content">
            <slot></slot>
        </div>

        <div ref='scrollbarV' @mousedown="startVDrop($event)"
             @mouseup="endVDrop($event)"
             class="scrollbar-v">
            <div ref='scrollbarVBg'
                 class="scrollbar-v-bg">
                <div ref='scrollbarVCricle'
                     class="scrollbar-v-cricle">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addResizeEvent} from '../../utils/event-listener';

    export default {
        data() {
            return {
                currentMarginL: 0,
                top: 0,
                float: 20,
                scrollbarVRect: 0
            }
        },
        methods: {
            startVDrop(e) {
                this.onVDrop(e);

                document.body.onmousemove = this.onVDrop;
                document.body.onmouseup = this.endVDrop;

            },
            onVDrop(e) {
                let path = 0;
                if (e.y >= this.$refs.scrollbarV.getClientRects()[0].y) {
                    path = (e.y - this.$refs.scrollbarV.getClientRects()[0].y - 10) / this.$refs.scrollbarV.clientHeight;
                }


                if (e.y - this.$refs.scrollbarV.getClientRects()[0].y + 10 >= this.$refs.scrollbarV.clientHeight) {
                    this.$refs.scrollbarVCricle.style.top = (1 - 20 / this.$refs.scrollbarV.clientHeight) * 100 + '%';
                    path = 100;
                }
                else if (e.y - this.$refs.scrollbarV.getClientRects()[0].y <= 0) {
                    this.$refs.scrollbarVCricle.style.top = '0%';
                    path = 0;
                }
                else if (path > 0) {
                    this.$refs.scrollbarVCricle.style.top = path * 100 + '%';
                    path = (path + 20 / this.$refs.scrollbarV.clientHeight) * 100;
                } else if (path < 0) {
                    path = 0;
                }


                this.currentMarginL = -(path / 100 * (this.$refs.content.clientHeight - this.$refs.body.clientHeight));
                this.$refs.content.style.marginTop = this.currentMarginL + 'px';
            },
            endVDrop(e) {
                document.body.onmousemove = null
            }
        },
        mounted() {
            let body = this.$refs.body;
            let content = this.$refs.content;
            let scrollbarV = this.$refs.scrollbarV;
            let scrollbarVCricle = this.$refs.scrollbarVCricle;
            let maxMargin = content.clientHeight - body.clientHeight;
            let scrollbarHeight = scrollbarVCricle.clientHeight + 4;

            this.scrollbarVRect = scrollbarV.getClientRects()[0];

            if (maxMargin <= 0) {
                scrollbarV.style.display = 'none';
                content.style.marginRight = '0';
            } else {
                body.parentElement.style.paddingRight = '0';
                content.style.marginRight = '30px';
            }

            addResizeEvent((e) => {
                let maxMargin = content.clientHeight - body.clientHeight;

                if (maxMargin <= 0) {
                    scrollbarV.style.display = 'none';
                    content.style.marginRight = '0px';
                    content.style.marginTop = '0';
                    scrollbarVCricle.style.top = '0%';
                    this.currentMarginL = 0;

                } else {
                    scrollbarV.style.display = 'flex';
                    body.parentElement.style.paddingRight = '0';
                    content.style.marginRight = '30px';
                }
            });

            body.onmousewheel = (event) => {
                let maxMargin = content.clientHeight - body.clientHeight;


                if (maxMargin <= 0) {
                    return;
                }

                if (event.deltaY > 0) {
                    this.currentMarginL -= this.float;
                } else {
                    this.currentMarginL += this.float;
                }

                if (-this.currentMarginL <= 0) {
                    this.currentMarginL = 0;
                }

                if (-this.currentMarginL >= maxMargin) {
                    this.currentMarginL = -maxMargin;
                }


                if ((scrollbarHeight / body.clientHeight <= -(this.currentMarginL / maxMargin))) {
                    let x = (-(this.currentMarginL / maxMargin) - scrollbarHeight / scrollbarV.clientHeight) * 100;

                    if (x > 0)
                        scrollbarVCricle.style.top = x + '%';
                } else {
                    scrollbarVCricle.style.top = '0%';
                }

                content.style.marginTop = this.currentMarginL + 'px';
            }
        }
    }
</script>

<style lang="scss">
    .scrollbar.vertical {
        position: relative;
        flex-grow: 1;
        flex-direction: column;
        overflow: hidden;
        padding: 0;

        & > .content {
            display: block;

            transition: margin .2s, transfrom .2s;
        }

        .scrollbar-v {
            position: absolute;
            padding-bottom: 1.5px;
            right: 5px;
            top: 5px;
            bottom: 5px;
            justify-content: center;
            width: 24px;
            flex-direction: row;

            .scrollbar-v-bg {
                min-width: 3px;
                position: relative;
                transition: background-color .25s, display .3s;

                .scrollbar-v-cricle {
                    border-radius: 90px;
                    width: 16px;
                    height: 16px;
                    right: -9px;

                    position: absolute;

                    transition: border-color .25s, background-color .25s;

                    top: 0;
                }
            }

        }
    }
</style>