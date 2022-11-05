<template>
    <div 
        class='column' 
        @drop='onDrop'  
        @dragover.prevent 
        @dragenter.prevent>
            <div class='header'>
                <div class='title'>{{ columnTitle }}</div>
                <el-button class='button' text @click='dialogFormVisible = true'>
                    <el-icon size='18px'>
                        <Plus />
                    </el-icon>
                </el-button>
                <el-button class='button' text>
                    <el-icon size='18px'>
                        <MoreFilled />
                    </el-icon>
                </el-button>
        </div>

        <Task
            v-for='task in array'
            :key='task.title'
            :title='task.title'
            :description='task.description'
            :type='this.type'
        />

        <el-dialog 
            v-model='dialogFormVisible' 
            title='Create task'
            >
            <el-form>
                <div>
                    <el-date-picker
                        v-model='value3'
                        type='datetime'
                        placeholder='Select date and time'
                        :default-time='defaultTime'
                    />
                </div>
                 <el-form-item label='Title'>
                    <el-input v-model='title'/>
                </el-form-item>
                <el-form-item label='Description'>
                    <el-input v-model='description'/>
                </el-form-item> 
            </el-form>
            <el-form-item>
                <el-button 
                    type='danger'
                    @click='dialogFormVisible=false'
                    >
                    Cancel
                </el-button>
                <el-button 
                    type='success' 
                    @click=addTask
                    >
                    Create
                </el-button>  
            </el-form-item>
        </el-dialog>

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
import Task from '@/components/Task.vue'

export default {
    name: 'Column',
    components: {
        Task
    },
    data() {
        return {
            title: '',
            description: '',
            deadline: '',
            dialogFormVisible: false,
            elAlert: false
        }
    },
    props: {
        columnTitle: String,
        type: String,
        array: Array
    },
    methods: {
        addTask() {
            this.dialogFormVisible=false
            const task = {title: this.title, description: this.description}
            if (this.type === 'requested') {
                this.$store.commit('PUSH_REQUESTED', task)
            } else if (this.type === 'inProgress') {
                this.$store.commit('PUSH_IN_PROGRESS', task)
            } else if (this.type === 'inReview') {
                this.$store.commit('PUSH_IN_REVIEW', task)
            } else if (this.type === 'completed') {
                this.$store.commit('PUSH_COMPLETED', task)
            }
            this.title=''
            this.description=''
        },
        onDrop(e) {
            const task = JSON.parse(e.dataTransfer.getData('task'))
            if (this.type === 'requested' && task.type !== 'completed') {
                this.$store.commit('PUSH_REQUESTED', task)
            } else if (this.type === 'inProgress' && task.type !== 'completed') {
                this.$store.commit('PUSH_IN_PROGRESS', task)
            } else if (this.type === 'inReview' && task.type !== 'completed') {
                this.$store.commit('PUSH_IN_REVIEW', task)
            } else if (this.type === 'completed' && task.type !== 'completed') {
                this.$store.commit('PUSH_COMPLETED', task)
            }
            if (task.type === 'requested') {
                this.$store.commit('DELETE_REQUESTED', task)
            } else if (task.type === 'inProgress') {
                this.$store.commit('DELETE_PROGRESS', task)
            } else if (task.type === 'inReview') {

                
                this.$store.commit('DELETE_IN_REVIEW', task)
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
        .button
            padding: 0 !important
            margin: 0 0 0 10px !important
.elAlert
    width: 500px
    position: absolute
    bottom: 2%
    right: 1%
</style>