<template>
  <title class="searchMovieName">
    찾으시는 영화 이름 : {{ movieName }}
  </title>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('movieList', ['movieName'])
  },
}
</script>

<style lang="scss" scoped>
.searchMovieName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}
</style>
