<template>
    <div 
        class='column' 
        @drop='onDrop'  
        @dragover.prevent 
        @dragenter.prevent
        >
            <div class='header'>
                <div class='title'>
                    {{ columnTitle }}
                </div>
                <CreationTask 
                    :type='this.type'
                />
                <el-button 
                    class='button' 
                    text>
                        <el-bottom>
                            <el-icon size='18px'>
                               <MoreFilled />
                            </el-icon>
                        </el-bottom>
                </el-button>
        </div>

        <Task
            v-for='task in array'
            :key='task.title'
            :title='task.title'
            :type='this.type'
            :id='task.id'
            :dataStart='task.dataStart'
            :dataEnd='task.dataEnd'
            :priority='task.priority'
        />
    </div>  
    
</template>

<script>
import Task from '@/components/Task.vue'
import CreationTask from '@/components/CreationTask.vue'

export default {
    name: 'Column',

    components: {
        Task,
        CreationTask
    },

    data() {
        return {
            description: '',
            deadline: '',
            dialogFormVisible: false,
        }
    },

    props: {
        columnTitle: String,
        type: String,
        array: Array,
    },
    
    methods: {
        onDrop(e) {
            const task = JSON.parse(e.dataTransfer.getData('task'))
            if (this.type === 'requested') {
                this.$store.commit('CHANGE_STATUS_TO_REQUESTED', task.id)
            } else if (this.type === 'inProgress') {
                this.$store.commit('CHANGE_STATUS_TO_IN_PROGRESS', task.id)
            } else if (this.type === 'inReview') {
                this.$store.commit('CHANGE_STATUS_TO_IN_REVIEW', task.id)
            } else if (this.type === 'completed') {
                this.$store.commit('CHANGE_STATUS_TO_COMPLETED', task.id)
            }
        }
    }
}
</script>

<style lang='sass' scoped>
.column
    width: 270px
    padding-top: 20px
    font-size: 16px
    font-weight: 500
    .header
        display: flex
        justify-content: space-around
        align-content: center
        .title
            width: 250px
            align-self: center
            margin-bottom: 25px
        .button
            padding: 0 !important
            margin: 0 0 0 10px !important
</style>