<template>
    <div ref='rotate' class="isa-animate rotate">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                intervalID: null,
            }
        },
        mounted() {
            let rotateArea = this.$refs.rotate;

            let rotateDep = 0;
            this.intervalID = setInterval(() => {
                if (rotateDep >= 360)
                    rotateDep = 0;


                rotateArea.style.transform = "rotate(" + rotateDep + "deg)";
                rotateDep += 0.05;
            }, 1);
        }
    }
</script>

<style lang="scss">
    .isa-animate.rotate {
        flex-grow: 1;
        flex-direction: column;
        color: #c4c4c4;

        & > * {
            flex-grow: 1;
        }
    }
</style>