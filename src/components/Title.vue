<template>
  <div class="searchMovieName">
    <span v-if="movieName === ''">
      영어로 영화를 검색해주세요!
    </span>
    <span v-else>
      찾으시는 영화 이름 : {{ movieName }}
    </span>
  </div>
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
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 600;
}
</style>
