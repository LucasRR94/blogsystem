<template>
  <div class="main">
    <div class="main-wrapper">
      <button v-on:click="$emit('requestedList')">List Users</button>
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
    height:auto;
    display:flex;
    flex-direction:column;
    flex:1;
    max-height: 200px;
    .main-wrapper{
      max-height: 200px;
      @include positioning-element-flex(center,center);
      width:90vw;
      height: auto;
      display:flex;
      flex-direction:column;
      justify-content:center;
      button{
        @include positioning-element-flex(center,center);
        font-size:1rem;
        width:90px;
        height:60px;
        background:black;
        color:rgb(119, 119, 119);
        border:2px solid rgb(119, 119, 119);
        border-radius:.4rem;
        outline:none;
        &:active:hover{
          border:2px solid black;
        }
        &:hover{
          background:rgb(11, 11, 49);
          color:white;
        }
      }
    }
  }
</style>