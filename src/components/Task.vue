<template>
    <div 
        class='task'
        @dragstart='onDragStar($event)' 
        :draggable=draggable
        >
        <div class='header'>
            <div class='header-left'>
                <el-icon size='18px' :color="type === 'completed' ? 'green' : 'grey'"><CircleCheck /></el-icon>
                <div class='title'>{{ title }}</div>
            </div>
            <DialogEdit 
                class='edit'
                :title='this.title'
                :priority='this.priority'
                :type='this.type'
                :id='this.id'
            />
        </div>
        <div class='bottom'>
            <div class='bottom-left'>
                <PriorityTag class='priority' :text='priority'/>
                <div class='data'>{{ dataStart }} - {{ dataEnd }}</div>
            </div>
            <el-popconfirm
                confirm-button-text='Yes'
                cancel-button-text='No'
                :icon='InfoFilled'
                icon-color='#626AEF'
                title='Delete'
                @confirm='deleteTask'>
                    <template #reference>
                        <el-icon color='#ff5062' size='18px'>
                            <Delete />
                        </el-icon>
                    </template>
            </el-popconfirm>
        </div>
    </div>
</template>

<script>
import PriorityTag from '@/components/PriorityTag.vue'
import DialogEdit from '@/components/DialogEdit.vue'

export default {
    components: { 
        PriorityTag,
        DialogEdit
    },
    name: 'Name',

    data: () => {
        return {
            dialogVisible: false,
            draggable: true,
            elAlert: false
        }
    },

    props: {
        title: String,
        type: String,
        id: Number,
        priority: String,
        dataStart: String,
        dataEnd: Number
    },
    
    methods: {
        onDragStar(e) {
            if (this.type === 'requested' || this.type === 'inProgress' || this.type === 'inReview') {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('task', JSON.stringify({id: this.id}))
            }
        },
        changeTask() {
            console.log('puck')
        },
        deleteTask() {
            this.$store.commit('DELETE_TASK', this.id)
        }
    }
}
</script>

<style lang='sass' scoped>
.task
    background-color: #fff 
    border-radius: 15px
    padding: 8px 10px 8px 10px
    box-shadow: 0px 0px 9px 1px rgba(94, 94, 94, 0.2)
    display: flex
    flex-direction: column
    gap: 10px
    margin: 0 0 15px 0
    .header
        display: flex
        justify-content: space-between
        min-height: 30px
        .header-left
            display: flex
            gap: 5px
            .title
                word-wrap: break-word

    .bottom 
        display: flex
        justify-content: space-between
        align-items: center
        .bottom-left
            display: flex
            align-items: center
            gap: 5px
        .data 
            font-size: 14px
            color: grey
            font-style: italic
            font-weight: 300
        
</style>