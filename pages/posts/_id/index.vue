<template>
    <div class="single-post-page">
      <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
          <div class="post-detail">
            Last updated on {{ loadedPost.updatedDate }}
          </div>
          <div class="post-detail">
            Written by {{loadedPost.author}}
          </div>
        </div>
        <p class="post-content">
          {{ loadedPost.content}}
        </p>
      </section>

      <section class="post-feedback">
        <p>Let me know what yuo think about the post, send a main to <a href="mailto:contact@shibbir.me">contact@shibbir.me</a></p>
      </section>
    </div>
</template>

<script>
  export default {
    asyncData(context, callback){
      console.log("async data for single post")
      setTimeout(() => {
        callback(null, {
          loadedPost: {
            id: '1',
            author: 'Shibbir',
            title: 'My awesome title (ID: '+ context.params.id + ')',
            previewText: 'Super amazing, thanks for that!',
            updatedDate: new Date,
            content: 'Some dummy text which is definitely not the preview text though!',
            thumbnail: 'https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg'
          },
        })
      }, 1000)
    }
  }
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
