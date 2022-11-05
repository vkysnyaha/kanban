<template>
    <div class='task' @dragstart='onDragStar($event)' :draggable=draggable>
        <div class='title'>
            <div 
                v-if="type === 'requested' || type === 'inProgress' || type === 'inReview'"
                >
                    <el-icon color='grey'>
                        <CircleCheckFilled />
                    </el-icon>
            </div>
            <div v-else-if="type === 'completed'">
                <el-icon color='green'>
                    <CircleCheckFilled />
                </el-icon>
            </div>
            <div class='title-text'>{{ title }}</div>
        </div>
        <div class='description'>{{ description }}</div>

        <el-alert
            v-if='elAlert'
            title="Can't be dragged" 
            type="error" 
            effect="dark" 
            show-icon
            center
            class='elAlert'
        />
    </div>
</template>

<script>
export default {
    name: 'Name',
    data: () => {
        return {
            draggable: true,
            elAlert: false
        }
    },
    props: {
        title: String,
        description: String,
        type: String
    },
    methods: {
        onDragStar(e) {
            // if (this.type === 'requested' || this.type === 'inProgress' || this.type === 'inReview') {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('task', JSON.stringify({title: this.title, description: this.description, type: this.type}))
            // }
        }
    }
}
</script>

<style lang='sass' scoped>
.task
    background-color: #fff 
    border-radius: 15px
    margin: 10px 0 0 0
    padding: 10px 0 10px 15px
    display: flex
    flex-direction: column
    gap: 15px
    box-shadow: 0px 0px 9px 1px rgba(94, 94, 94, 0.2)
    .title
        display: flex
        gap: 10px
        .title-text
            font-size: 16px
            font-weight: 300
    .description
        font-size: 14px
        font-weight: 200
.elAlert
    width: 500px
    position: absolute
    bottom: 2%
    right: 1%

</style>