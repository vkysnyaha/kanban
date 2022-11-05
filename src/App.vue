<template>
  <div class='wrapper'>
    <Header />
    <Board />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'App',
  components: {
    Header,
    Board
  }
}
</script>

<style lang='sass' scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap')
.wrapper
  font-family: 'Inter', sans-serif
</style>
