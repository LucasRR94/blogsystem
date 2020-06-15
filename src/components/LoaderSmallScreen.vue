<template>
  <div class="loader-small-screen">
    <div class="loader-small-screen-wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name:'LoaderSmallScreen'
}
</script>

<style lang='scss'>
  @import "../style/_modulos.scss";
  .loader-small-screen{
    width:400px;
    height:400px;
    @include center-div;
    &-wrapper{
      width:100px;
      height:100px;
      border-radius:50%;
      // background:black;
      animation:changeBorderColor 2s linear infinite;
    }
    @keyframes changeBorderColor{
      0%{
        border-top:2px solid black;
        border-left:2px solid white;
        border-right:2px solid white;
        border-bottom:2px solid white;
      }
      25%{
        border-top:2px solid white;
        border-left:2px solid white;
        border-right:2px solid black;
        border-bottom:2px solid white;
      }
      50%{
        border-top:2px solid white;
        border-left:2px solid white;
        border-right:2px solid white;
        border-bottom:2px solid black;
      }
      75%{
        border-top:2px solid white;
        border-left:2px solid black;
        border-right:2px solid white;
        border-bottom:2px solid white;
      }
      100%{
        border-top:2px solid black;
        border-left:2px solid black;
        border-right:2px solid black;
        border-bottom:2px solid black;
      }
    }
  }
</style>