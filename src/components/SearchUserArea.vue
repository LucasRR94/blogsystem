<template>
  <div class="main-area">
    <div class="main-area-input-search">
      <div class="main-area-input-search-title">
        <h2>Search for a user:</h2>
      </div>
      <div class="main-area-input-search-bar">
        <input type="search" id="searchArea">
        <a v-on:click.prevent="$emit('searchUser',collectContentInput())"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SearchUserArea',
  methods:{
    collectContentInput(){
      return document.getElementById('searchArea').value;
    }
  }
}
</script>

<style lang="scss">
  @import '../style/modulos.scss';
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
  }
  .main-area{
        width:100vw;
        height:20vh;
        margin: 1rem 0;
        padding-left:.5rem;
        padding-right:.5rem;
        @include center-div;
        &-input-search{
          justify-self: center;
          height:20vh;
          width:100vw;
          border-radius: .4rem;
          background:rgb(150, 150, 150);  
          @include positioning-two-elements-flex-midle(column);
          max-width: 400px; 
          min-height: 100px;
          border:none;
          &-title{
            display:flex;
            flex:.5;
            flex-direction: row;
            h2{
              justify-self:flex-start;
              align-content: center;
              font-size:1rem;
              margin:.5rem;
            }  
          }
          &-bar{
            @include center-div;
            max-width:400px;
            input:nth-child(1){
              width:80%;
              border-radius:.4rem 0rem 0rem .4rem;
              border:none;
              color:white;
              background:black;
              font-size:1rem;
              padding:0 .4rem;
            }
            input:nth-child(1):focus{
              background: black;
              border-bottom:red 2px solid;
              border-top:none;
              border-left:none;
              border-right:none;
              outline:none; 
            }
            a{
              border-radius:0rem 0.4rem 0.4rem 0rem;
              background:url("../assets/search-icon.svg");
              background-color:black;
              background-repeat:no-repeat;
              background-size:cover;
              width:40px;
              height:40px;
              border: black 2px solid;
            }
            a:hover{
              border:rgb(0, 105, 97) 2px solid;   
            }
          }
        }
      }
</style>