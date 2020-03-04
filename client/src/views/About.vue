<template>
  <div class="content">
    <Card 
    v-for="item in state.items" 
    :key="item.id"
    :text="item.text"
    :title="item.title"
    />

  </div>
</template>

<script>
import Card from '../components/Card';
export default {
  components: {Card},
  name: 'About',
  data(){
    return{
      state: {
        items: [
          {id:1, title:'sasas', text:'eeeeee'},
          {id:2, title:'ssa', text:'tttttt'},
          {id:3, title:'saszxczxcas', text:'wwwww'},
          {id:4, title:'sasvcxas', text:'erer'},
          {id:5, title:'xxvx', text:'sdsdsfgddsd'},
          {id:6, title:'vbv', text:'wewe'},
          {id:7, title:'nbn', text:'tttttt'},
        ]
      }
    }
  }
}
</script>

<style scoped>
  .content{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>>

