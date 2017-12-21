<template>
    <div ref='body' class="scrollbar simple">
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
                currentMarginT: 0,
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


                this.currentMarginT = -(path / 100 * (this.$refs.content.clientHeight - this.$refs.body.clientHeight));
                this.$refs.content.style.marginTop = this.currentMarginT + 'px';
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
                    content.style.marginRight = '5px';
                    content.style.marginTop = '0';
                    scrollbarVCricle.style.top = '0%';
                    this.currentMarginT = 0;

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
                    this.currentMarginT -= this.float;
                } else {
                    this.currentMarginT += this.float;
                }

                if (-this.currentMarginT <= 0) {
                    this.currentMarginT = 0;
                }

                if (-this.currentMarginT >= maxMargin) {
                    this.currentMarginT = -maxMargin;
                }


                if ((scrollbarHeight / body.clientHeight <= -(this.currentMarginT / maxMargin))) {
                    let x = (-(this.currentMarginT / maxMargin) - scrollbarHeight / scrollbarV.clientHeight) * 100;

                    if (x > 0)
                        scrollbarVCricle.style.top = x + '%';
                } else {
                    scrollbarVCricle.style.top = '0%';
                }

                content.style.marginTop = this.currentMarginT + 'px';
            }
        }
    }
</script>

<style lang="scss">
    .scrollbar.simple {
        position: relative;
        flex-grow: 1;
        flex-direction: column;
        overflow: hidden;
        padding: 0;

        .content {
            display: block;

            transition: margin .2s, transfrom .2s;
        }

        .scrollbar-v {
            position: absolute;
            right: 5px;
            top: 20px;
            bottom: 20px;
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
                    right: -8px;

                    position: absolute;

                    transition: border-color .25s, background-color .25s;

                    top: 0;
                }
            }

        }
    }
</style>