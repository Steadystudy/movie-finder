<template>
  <TheHeader />
  <RouterView />
  <h1 :message="heel" name="dd"></h1>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>
