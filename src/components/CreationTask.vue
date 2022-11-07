<template>
    <div>
        <el-button 
            text 
            @click='dialogFormVisible = true'>
                <el-icon size='18px'>
                    <Plus />
                </el-icon>
        </el-button>   
        <el-dialog 
            v-model='dialogFormVisible' 
            title='Create task'
            @keydown.enter='addTask'
            width='30%'
            >
                <div class='name'>
                    <div class='title'>Name task</div>
                    <el-input class='input' v-model='title' :prefix-icon='Search' placeholder='Walk the dog'/>
                </div>
                <div class='deadline'>
                    <div class='title'>Deadline</div>
                    <el-date-picker
                        v-model='dataEnd'
                        type='date'
                        placeholder='Pick a day'
                        :disabled-date='disabledDate'
                        :shortcuts='shortcuts'
                        :size='size'
                        value-format="MM.DD"
                    />
                </div>
                <div class='buttons'>
                    <el-button type='danger' @click='dialogFormVisible=false'>Cancel</el-button>
                    <el-button type='success' @click=addTask>Create</el-button> 
                </div> 
        </el-dialog>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'CreationTask',

    data() {
        return {
            dialogFormVisible: false,
            title: '',
            dataEnd: '',
        }
    },
    props: {
        type: String
    },
    methods: {
        addTask() {
            let dayjs = require('dayjs')
            this.dialogFormVisible=false
            const task = {
                title: this.title, 
                priority: this.type === 'requested' ? 'Triage' : 'Medium',
                status: this.type,
                dataStart: dayjs().format('DD.MM'),
                dataEnd: dayjs(this.dataEnd).format('DD.MM'),
                id: Date.now()
            }
            
            console.log(task)
            this.$store.commit('PUSH_TASK', task)
            this.title = ''
        },
    }
}
</script>

<style lang='sass' scoped>
.buttons
    display: flex
    justify-content: end
.deadline, .name
    display: flex
    margin: 0 0 10px 10px
    gap: 10px
    align-items: center
    justify-content: start
    .title
        width: 100px
.input
    width: 220px
</style>