<template>
  <section>
    <div class="introduceMovie">
      <img :src="movie.Poster" alt="영화 포스터"/>
      <div class="tags">
        <div class="tags-info">
          <dt>DIRECTOR:</dt>
          <dd>{{movie.Title}}</dd>
        </div>
        <div class="tags-info">
          <dt>RELEASE DATE:</dt>
          <dd>{{movie.Released}}</dd>
        </div>
          <div class="tags-info">
            <dt>STUDIO:</dt>
            <dd>{{movie.Production}}</dd>
          </div>
        <div class="tags-info">
          <dt>CAST:</dt>
          <dd>{{movie.Actors}}</dd>
        </div>
        <div class="tags-info">
          <dt>WRITERS:</dt>
          <dd>{{movie.Writer}}</dd>
        </div>
        <div class="tags-info">
          <dt>RATING:</dt>
          <dd>{{movie.Rated}}</dd>
        </div>
        <div class="tags-info">
          <dt>RUNTIME:</dt>
          <dd>{{movie.Runtime}}</dd>
        </div>
        <div class="tags-info">
          <dt>GENRE:</dt>
          <dd>{{movie.Genre}}</dd>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.state.movieList.movie
    },
  }
}
</script>

<style lang="scss" scoped>

.introduceMovie {
  display: flex;
  padding: 100px;
  gap: 30px;
  background: $color-background;
  color: $color-font;

  img {
    width: 350px;
    height: 500px;
    background-size: cover;
  }
  .tags {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;

    &-info {
      display: flex;
      height: 50px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  } 
}
</style>
