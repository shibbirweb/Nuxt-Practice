import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post){
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token){
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data){
              postsArray.push({...data[key], id: key})
            }
            vuexContext.commit('setPosts', postsArray)
          }).
        catch(e => context.error(e));
      },
      addPost(vuexContext, post){
        const createdPost = {...post, updatedDate: new Date()}
        return this.$axios.$post('/posts.json', createdPost)
          .then(data => {
            vuexContext.commit('addPost', {...createdPost, id: data.name})
          })
          .catch(reason => console.log(reason))
      },
      editPost(vuexContext, editedPost){
        const updatedPost = {...editedPost};
        return this.$axios.$put('/posts/' + editedPost.id + '.json', editedPost)
          .then(res => {
            vuexContext.commit('editPost', updatedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData){
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
        if (!authData.isLogin){
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ process.env.fbAPIKey
        }

        return this.$axios.$post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
