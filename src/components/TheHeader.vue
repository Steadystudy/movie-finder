<template>
  <header>
    <div class="logo">
      영화 검색기
    </div>
    <form @submit.prevent="submitMovieName">
      <input 
        ref="input"
        v-model.trim.lazy="movieName"
        class="search-movie" 
        placeholder="영화를 검색하세요"/>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      movieName: '',
    }
  },
  methods: {
    async submitMovieName() {
      await this.$store.dispatch('movieList/defaultState')
      await this.$store.dispatch('movieList/searchMovieName',this.$refs.input.value)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: $color-background--header;
  color: $color-font;

  .logo {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .search-movie{
    width: 400px;
    height: 40px;
    padding: 0 10px;
  }
}
</style>
