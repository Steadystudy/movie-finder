import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'Movie',
      path: '/movie/:id', // 정규표현식 tt + 숫자 7개 만들기
      component: Movie
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
