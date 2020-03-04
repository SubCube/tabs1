<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <div class="text">{{text}}</div>
    <button class="del">Delete</button>
  </div>
</template>

<script>
export default {
 name: 'Card',
 props:{
     title: {type:String, default:'fdf'},
     text: {type:String, default:'fdf'}
 }
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    width: 30%;
    min-height: 200px;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
  }
</style>
