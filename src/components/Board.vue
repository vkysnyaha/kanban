<template>
    <Nav />
    <div class='wrapper'>
        <div class='board'>
            <Column columnTitle='Requested' type='requested' :array=getRequested />
            <Column columnTitle='In Progress' type='inProgress' :array=getInProgress />
            <Column columnTitle='In Review' type='inReview' :array=getInReview />
            <Column columnTitle='Completed' type='completed' :array=getCompleted />
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Column from '@/components/Column.vue'
export default {
    name: 'Board',
    components: {
        Nav,
        Column
    },
    computed: {
        getRequested() {
            return this.$store.getters['GET_REQUESTED']
        },
        getInProgress() {
            return this.$store.getters['GET_IN_PROGRESS']
        },
        getInReview() {
            return this.$store.getters['GET_IN_REVIEW']
        },
        getCompleted() {
            return this.$store.getters['GET_COMPLETED']
        },
    }
}
</script>

<style lang='sass' scoped>
.wrapper
    background-color: #f5f8fa
    .board
        margin: 0 auto
        width: 1300px
        min-height: 100vh
        display: flex
        justify-content: space-around
</style>
