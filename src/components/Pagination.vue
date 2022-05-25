<template>
  <div class="selectPage">
    <button 
      v-if="page > 10" 
      class="prev" 
      @click="goPage">이전</button>
    <template v-for="n in Math.ceil(totalResults/10)" :key="n">
      <div v-if="Math.floor((n-1)/10) === Math.floor((page-1)/10)">
        <button 
          :id="n"
          :class="{active: n === parseInt(page,10)}"
          @click="goPage">{{n}}</button>
      </div>
    </template>
    <button
      v-if="totalResults && Math.floor((totalResults-1)/100) !== Math.floor((page-1)/10)"
      class="next" @click="goPage(this)">다음</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('movieList', ['totalResults','page'])
  },
  methods: {
    async goPage(event) {
      let page = this.$store.state.movieList.page
      const button = event.target.closest('button')

      // 다음 버튼 누를 때 11, 21로 넘어가게
      if(button.classList.contains('next')) {
        page = Math.floor((page-1)/10)*10+11
      // 이전 버튼 누를 때 10, 20로 넘어가게
      } else if (button.classList.contains('prev')) {
        page = Math.floor((page-1)/10)*10
      } else {
        page = button.id      
      }

      await this.$store.dispatch('movieList/changePage', page)
    }
  }
}
</script>

<style lang="scss" scoped >
.selectPage {
  display: flex;
  justify-content: center;

  .active {
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
