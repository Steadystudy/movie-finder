<template>
  <section>
    <div class="searchMovieName">
      찾으시는 영화 이름 : {{ movieName }}
    </div>
    <div class="movieList-wrapper">
      <div
        v-for="movie in movieList" 
        :id="movie.imdbID" 
        :key="movie.imdbID" 
        class="movieCard" 
        @click="clickMovie">
        <img class="poster" :src="movie.Poster" alt="영화 포스터" />
        <span class="title">{{movie.Title}} / {{movie.Year}}</span>
      </div>
    </div>
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
        class="next" @click="goPage">다음</button>
    </div>    
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('movieList', ['movieName','movieList','totalResults','page'])
  },
  methods: {
    async clickMovie(event) {
      const movie = event.target.closest('div')

      await this.$store.dispatch('movieList/bringMovie', movie.id)
      this.$router.push({
        name: 'Movie',
        params: {
          id: movie.id
        }
      })
    },
    async goPage(event) {
      let p = this.$store.state.movieList.page
      const button = event.target.closest('button')

      // 다음 버튼 누를 때 11, 21로 넘어가게
      if(button.classList.contains('next')) {
        p = Math.floor((p-1)/10)*10+11
      // 이전 버튼 누를 때 10, 20로 넘어가게
      } else if (button.classList.contains('prev')) {
        p = Math.floor((p-1)/10)*10
      } else {
        p = button.id      
      }

      await this.$store.dispatch('movieList/changePage', p)
    }
  }
}
</script>

<style lang="scss" scoped >
section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.searchMovieName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.movieList-wrapper {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  width: 1000px;
  gap: 20px;
  padding: 0 150px;

  .movieCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 250px;

    .poster {
      width: 100%;
      height: 223px;
      background-color: rgba(0,0,0,.3);
      background-size: cover;

      &:hover {
        transform: scale(1.2)
      }
    }

    .title {
      width: 100%;
      text-align: center;
      overflow:hidden; 
      text-overflow:ellipsis; 
      white-space:nowrap;
    }
  }
}

.selectPage {
  display: flex;
  justify-content: center;

  .active {
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
