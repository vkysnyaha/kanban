<template>
    <div class='header'>
        <div class='title'>
            Kanban Board
        </div>
        <div class='header-right'>
            <div class='search'>
                <input placeholder='Search' class='search_input' v-model='searchValue'/>
                <div class='search_button'><el-icon color='grey' size='18px' v-show='searchValue'><Search /></el-icon></div>
            </div>
            <div class='theme'>
                <div>Dark theme {{ themeValue === true ? 'On' : 'Off'}}</div>
            <el-switch v-model='themeValue' />
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',

    data() {
        return {
            themeValue: false,
            searchValue: ''
        }
    }
}
</script>

<style lang='sass' scoped>
.header
    height: 50px
    border-bottom: solid 2px #f1f3f4
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 50px
    .title
        font-size: 18px
        font-weight: 500
        display: inline-block
    .header-right
        display: flex
        gap: 50px
        align-items: center
    .search
        display: flex
        gap: 10px
        align-items: center
        .search_input
            border-radius: 20px
            padding-left: 10px
            border: solid 1px #d5dee2
            height: 25px
            width: 170px
        .search_button
            width: 50px
    .theme
        font-size: 14px
        display: flex
        gap: 10px
        align-items: center 
        justify-content: center
</style>