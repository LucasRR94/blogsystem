<template>
  <div class="main-area">
    <div class="main-area-input-search">
      <div class="main-area-input-search-title">
        <h2>Search for a user:</h2>
      </div>
      <div class="main-area-input-search-bar">
        <input type="search" id="searchArea">
        <a></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SearchUserArea'
}
</script>

<style lang="scss">

  @import '../style/modulos.scss';
  .main-area{
        width:90vw;
        height:60vh;
        margin: 1rem;
        @include center-div;
        &-input-search{
          height:20vh;
          width:90vw;
          border-radius: .4rem;
          background:rgb(150, 150, 150);  
          @include positioning-two-elements-flex-midle(column);
          max-width: 400px; 
          min-height: 100px;
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
            a{
              border-radius:0rem 0.4rem 0.4rem 0rem;
              background:url("../assets/search-icon.svg");
              background-color:black;
              background-repeat:no-repeat;
              background-size:cover;
              width:40px;
              height:40px;
            }
          }
        }
      }
</style>