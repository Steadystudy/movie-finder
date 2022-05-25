<template>
  <div class="selectPage">
    <button 
      v-if="hasPrevPage()" 
      class="prev" 
      @click="goPage('이전')">이전</button>
    <template v-for="n in Math.ceil(totalResults/10)" :key="n">
      <div v-if="Math.floor((n-1)/10) === Math.floor((page-1)/10)">
        <button 
          :id="n"
          :class="{active: n === parseInt(page,10)}"
          @click="goPage(n)">{{n}}</button>
      </div>
    </template>
    <button
      v-if="hasNextPage()"
      class="next" @click="goPage('다음')">다음</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('movieList', ['totalResults','page'])
  },
  methods: {
    async goPage(btn) {
      let {page} = this.$store.state.movieList

      if(btn === '다음') {
        page = Math.floor((page-1)/10)*10+11
      } else if (btn === '이전') {
        page = Math.floor((page-1)/10)*10
      } else {
        page = btn     
      }

      await this.$store.dispatch('movieList/changePage', page)
    },
    hasNextPage() {
      let {page, totalResults} = this.$store.state.movieList
      return totalResults && Math.floor((totalResults-1)/100) !== Math.floor((page-1)/10)
    },
    hasPrevPage() {
      let {page} = this.$store.state.movieList
      return page > 10
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
