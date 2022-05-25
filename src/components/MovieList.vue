<template>
  <div class="movieList-wrapper">
    <article
      v-for="movie in movieList" 
      :key="movie.imdbID" 
      class="movieCard" 
      @click="clickMovie(movie.imdbID)">
      <img class="poster" :src="movie.Poster" alt="영화 포스터" />
      <span class="title">{{movie.Title}} / {{movie.Year}}</span>
    </article>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('movieList', ['movieList'])
  },
  methods: {
    async clickMovie(id) {
      await this.$store.dispatch('movieList/bringMovie', id)
      this.$router.push({
        name: 'Movie',
        params: {
          id
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped >
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
    cursor: pointer;

    .poster {
      width: 100%;
      height: 223px;
      background-color: rgba(0,0,0,.3);
      background-size: cover;
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
</style>
