<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  export default {
    asyncData(context, callback){

      console.log(context)

      setTimeout(() => {
        callback(null,  {
          loadedPosts:  [
            {
              id: '1',
              author: 'Shibbir',
              title: 'My awesome title',
              previewText: 'Super amazing, thanks for that!',
              thumbnail: 'https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg'
            },
            {
              id: '2',
              author: 'Shibbir',
              title: 'My second title',
              previewText: 'Super amazing, thanks for that!',
              thumbnail: 'https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg'
            }
          ]
        })

      }, 1500)
    },
    created(){

    }
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('~assets/images/main-page-background.jpg');
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }


</style>
