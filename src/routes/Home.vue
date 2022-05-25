<template>
  <section>
    <Title />
    <MovieList />
    <Pagination />
  </section>
</template>

<script>
import Title from '~/components/Title'
import Pagination from '~/components/Pagination'
import MovieList from '~/components/MovieList'

export default {
  components: {
    Title,Pagination,MovieList
  },
}
</script>

<style lang="scss" scoped >
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
