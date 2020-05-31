<template>
  <div class="main">
    <div class="main-wrapper">
      <button>List Users</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'BtnListUsers',
}
</script>

<style lang='scss'>
  @import '../style/modulos.scss';
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .main{
    width:100vw;
    height:40%;
    display:flex;
    flex-direction:column;
    flex:1;
    .main-wrapper{
      @include positioning-element-flex(center,center);
      width:90vw;
      height: 20%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      button{
        @include positioning-element-flex(center,center);
        font-size:1rem;
        width:80px;
        height:60px;
        background:black;
        color:rgb(119, 119, 119);
        border:2px solid rgb(119, 119, 119);
        border-radius:.4rem;
        outline:none;
      }
      //@include effect-portable-all-browsers(active,button,'scalling');
    }
  }
</style>