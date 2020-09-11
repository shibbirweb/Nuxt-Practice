<template>
    <div class="posts-page">
      <PostList :posts="loadedPosts"/>
    </div>
</template>


<script>
  export default {
    asyncData(context){
      return new Promise((resolve, reject) => {
        setTimeout(() => {

          /*reject(new Error());
          return;*/

          resolve({
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
      })
        .then(data => {
          return data;
        })
      .catch(e => {
        context.error(e)
      })
    }
  }
</script>
<style scoped>
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
