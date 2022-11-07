<template>
    <Nav />
    <div class='wrapper'>
        <div class='board'>
            <Column class='column' columnTitle='Requested' type='requested' :array=getRequested />
            <Column class='column' columnTitle='In Progress' type='inProgress' :array=getInProgress />
            <Column class='column' columnTitle='In Review' type='inReview' :array=getInReview />
            <Column class='column' columnTitle='Completed' type='completed' :array=getCompleted bc='opacity'/>
        </div>
    </div>
</template>

<script>
import Column from '@/components/Column.vue'

export default {
    name: 'Board',
    
    components: {
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
        justify-content: space-between
        .column 
            width: 300px
</style>
