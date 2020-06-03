<template>
  <div class="main-user-post">
    <div class="main-user-post-title">
      <h3>{{publishedPost.title}}</h3>
    </div>
    <div class="main-user-post-body">
      <p>{{publishedPost.body}}</p>
    </div>
    <div class="main-user-post-id">
      <p>{{publishedPost.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'UserPost',
  props:{
    publishedPost:{
      type:Object,
      default:{
        UserId:0,
        id:0,
        title:'lorem ipsum',
        body:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        }
    }
  }
}
</script>

<style lang='scss'>
  @import '../style/_configs.scss';
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .main-user-post{
   width:auto;
   height:auto;
   max-width: 900px;
   min-height: 200px;
   background:rgba(62, 1, 102, 1);
   border-radius:1rem;
   display: grid;
   grid-template-rows: 1fr 2fr 1fr;
   border-radius:.4rem;
   div{
     margin:.2rem .4rem;
     border-radius:.4rem;
     color:$black-color-font;
     display:flex;
     justify-content: center;
     &:nth-child(3){
       justify-content: flex-end;
     }
     &:nth-child(2){
       p{
         width:100%;
       }
     }
     h3,p{
       padding:1rem;
       background: #f4f4f4;
       border-radius: .4rem;
     }
   }
  }
</style>