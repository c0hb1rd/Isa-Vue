<template>
    <div ref="body" class="scrollbar horizational">
        <div class="scrollbar-x-toolbar">
            <slot name="toolbar"></slot>
        </div>

        <div ref='content' class="content">
            <slot></slot>
        </div>

        <div ref='scrollbarX' @mousedown="startXDrop($event)"
             @mouseup="endXDrop($event)"
             class="scrollbar-x">
            <div ref='scrollbarXBg' class="scrollbar-x-bg">
                <div ref='scrollbarXCricle' class="scrollbar-x-cricle"></div>
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
                float: 50,
                scrollbarXRect: 0
            }
        },
        methods: {
            startXDrop(e) {
                this.onXDrop(e);

                document.body.onmousemove = this.onXDrop;
                document.body.onmouseup = this.endXDrop;

            },
            onXDrop(e) {
                let path = 0;
                if (e.x >= this.$refs.scrollbarX.getClientRects()[0].x) {
                    path = (e.x - this.$refs.scrollbarX.getClientRects()[0].x - 10) / this.$refs.scrollbarX.clientWidth;
                }


                if (e.x - this.$refs.scrollbarX.getClientRects()[0].x + 10 >= this.$refs.scrollbarX.clientWidth) {
                    this.$refs.scrollbarXCricle.style.left = (1 - 20 / this.$refs.scrollbarX.clientWidth) * 100 + '%';
                    path = 100;
                }
                else if (e.x - this.$refs.scrollbarX.getClientRects()[0].x <= 0) {
                    this.$refs.scrollbarXCricle.style.left = '0%';
                    path = 0;
                }
                else if (path > 0) {
                    this.$refs.scrollbarXCricle.style.left = path * 100 + '%';
                    path = (path + 20 / this.$refs.scrollbarX.clientWidth) * 100;
                } else if (path < 0) {
                    path = 0;
                }


                this.currentMarginL = -(path / 100 * (this.$refs.content.clientWidth - this.$refs.body.clientWidth));
                this.$refs.content.style.marginLeft = this.currentMarginL + 'px';
            },
            endXDrop(e) {
                document.body.onmousemove = null
            }
        },
        mounted() {
            let body = this.$refs.body;
            let content = this.$refs.content;
            let scrollbarX = this.$refs.scrollbarX;
            let scrollbarXCricle = this.$refs.scrollbarXCricle;

            let maxMargin = content.clientWidth - body.clientWidth;
            let scrollbarHeight = scrollbarXCricle.clientWidth + 4;

            this.scrollbarXRect = scrollbarX.getClientRects()[0];
            let x = content.getClientRects()[0].x;

            if (maxMargin <= 0) {
                scrollbarX.style.display = 'none';
            } else {
                body.parentElement.style.paddingRight = '0';
            }

            addResizeEvent(() => {
                let contentWidth = content.getClientRects()[0].width + content.getClientRects()[0].x;
                let bodyWidth = body.getClientRects()[0].width + body.getClientRects()[0].x;


                if (contentWidth - bodyWidth <= 0) {
                    scrollbarX.style.display = 'none';
                    content.style.marginLeft = '0';
                    scrollbarXCricle.style.left = '0%';
                    this.currentMarginL = 0;

                } else {
                    scrollbarX.style.display = 'flex';
                    body.parentElement.style.paddingRight = '0';
                }
            });

            scrollbarX.onmousewheel = (event) => {
                event.stopPropagation();
                let maxMargin = content.clientWidth - body.clientWidth;

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


                if ((scrollbarHeight / body.clientWidth <= -(this.currentMarginL / maxMargin))) {
                    let x = (-(this.currentMarginL / maxMargin) - scrollbarHeight / scrollbarX.clientWidth) * 100;

                    if (x > 0)
                        scrollbarXCricle.style.left = x + '%';
                } else {
                    scrollbarXCricle.style.left = '0%';
                }

                content.style.marginLeft = this.currentMarginL + 'px';
            }
        }
    }
</script>

<style lang="scss">
    .scrollbar.horizational {
        height: auto;
        display: block;

        overflow: hidden;
        /*white-space: nowrap;*/

        position: relative;
        flex-direction: column;
        padding: 0;

        & > .content {
            display: inline-block;
            min-width: 100%;
            position: relative;

            transition: margin .2s, transfrom .2s;
        }

        .scrollbar-x-toolbar {
            flex-direction: column;
            justify-content: center;
        }

        .scrollbar-x {
            justify-content: center;
            height: 24px;
            flex-direction: column;

            .scrollbar-x-bg {
                min-height: 3px;
                position: relative;
                transition: background-color .25s, display .3s;

                .scrollbar-x-cricle {
                    border-radius: 90px;
                    width: 16px;
                    height: 16px;
                    top: -8px;
                    left: 0;
                    bottom: 0;

                    position: absolute;

                    transition: border-color .25s, background-color .25s;

                }
            }

        }
    }
</style>