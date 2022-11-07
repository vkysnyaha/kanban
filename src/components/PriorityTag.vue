<template>
    <div class='priority' :class='color'>
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        text: String
    },
    computed: {
        color() {
            switch (this.text) {
                case 'Medium':
                    return 'yellow'
                case 'Low':
                    return 'green'
                case 'High':
                    return 'red'
                default:
                    return ''
            }
        }
    }
}
</script>

<style lang='sass' scoped>
    .priority
        color: white
        background-color: #8da3a6
        border-radius: 20px
        align-self: start
        padding: 5px 8px 5px 8px
        font-size: 14px
        &.yellow
            background-color: #fbbd03
        &.red
            background-color: #ff5262
        &.green
            background-color: #02bf9d
</style>