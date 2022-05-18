require("dotenv").config();

const defaultValue = {
  s: '',
  page: '1',
  movieName: '',
  movieList: [],
  movie: {},
  totalResults: ''
}

export default {
  namespaced: true,
  state: () => ({
    ...defaultValue
  }),
  mutations: {
    assignState(state,payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
  },
  actions: {
    async searchMovieName({commit, dispatch},movieName) {
      commit('assignState', {
        movieName
      })

      await dispatch('bringMovieList', {s:movieName})
    },
    async bringMovieList({commit}, options) {
      const {page = '1'} = options
      const {Search, totalResults} = await _request({
        ...options,
        page
      })

      commit('assignState', {
        movieList : Search,
        totalResults
      })
    },
    async changePage({state, commit, dispatch}, page) {
      commit('assignState', {
        page
      })
      const movieName = state.movieName
  
      await dispatch('bringMovieList', {s:movieName , page})
    },
    async bringMovie({commit},id) {
      const movie = await _request({i:id})

      commit('assignState', {
        movie
      })
    },
    defaultState({commit}) {
      commit('assignState', defaultValue)
    }
  }
}

const _request = async (options= {}) => {
  const {API_END_POINT, API_KEY} = process.env
  try {
    let params = ''
    Object.entries(options)?.forEach(([key, value]) => {
      params += `&${key}=${value}`
    })

    const res = await fetch(`${API_END_POINT}?apikey=${API_KEY}${params}`)
    
    if(res.ok) {
      return await res.json()
    }

    throw new Error('API 호출 오류')
    } catch(error) {
    alert(error.message)
  }
  
}
