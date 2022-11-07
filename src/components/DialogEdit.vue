<template>
    <div>
        <el-icon 
            color='blue'
            size='18px'
            @click='dialogVisible = true'>
                <Edit />
        </el-icon>
        <el-dialog
            v-model='dialogVisible'
            title='Edit task'
            width='30%'
            :before-close='handleClose'
            align-center
            center
            @keydown.enter='editTask'>
                <div class='title'>
                    <div class='name'>Title</div>
                    <el-input class='input'  v-model='titleValue'/>
                </div>
                <div class='priority'>
                    <div class='name'>Priority</div>
                    <el-select v-model="priorityValue" size="low">
                        <el-option
                            v-for="item in priorityArray"
                            :key="item"
                            :label="item"
                            :value="item"
                        />
                    </el-select>
                </div>
                <div class='column'>
                    <div class='name'>Column</div>
                    <el-select v-model='typeValue' size="low">
                        <el-option
                            v-for="item in columnArray"
                            :key="item"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <template #footer>
                    <el-button @click='dialogVisible = false'>Cancel</el-button>
                    <el-button @click='editTask' type='primary'>Confirm</el-button>
                </template>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'DialogEdit',
    data() {
        return {
            dialogVisible: false,
            titleValue: this.title,
            priorityValue: this.priority,
            typeValue: this.type,
            priorityArray: ['Triage','Medium', 'Low', 'High'],
            columnArray: [
                {
                    label: 'Requested',
                    value: 'requested'
                },
                {
                    label: 'In Progress',
                    value: 'inProgress'
                },
                {
                    label: 'In Review',
                    value: 'inReview'
                },
                {
                    label: 'Completed',
                    value: 'completed'
                }
            ]
        }
    },
    props: {
        title: String,
        priority: String,
        type: String,
        id: Number
    },
    methods: {
        editTask() {
            this.dialogVisible = false
            const task = {
                id: this.id,
                title: this.titleValue,
                priority: this.priorityValue,
                status: this.typeValue
            }
            this.$store.commit('CHANGE_TASK', task)
        }
    }
    
}
</script>

<style lang='sass' scoped>
.title,.priority, .column
    display: flex
    align-items: center
    padding-left: 50px
    gap: 10px
    margin-bottom: 20px
.name 
    width: 50px
.input 
    width: 190px
</style>