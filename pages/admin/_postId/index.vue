<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      layout: 'admin',
      asyncData(context){
        return axios.get('https://nuxt-practice-b8878.firebaseio.com/posts/' +  context.params.postId + '.json')
        .then(res => {
          return {
            loadedPost: {...res.data, id: context.params.postId}
          }
        })
        .catch(e => context.error(e))

      },
      methods: {
        onSubmitted(editedPost){
          this.$store.dispatch('editPost', editedPost)
          .then(() => {
            this.$router.push('/admin')
          })
        .catch(e => console.log(e))

        }
      }
    }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
