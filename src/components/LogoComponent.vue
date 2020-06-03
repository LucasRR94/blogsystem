<template>
  <router-link :to="{name:'Home'}" class="redirect">
    <div class="main-logo">
    <div class="logo">
        <img v-bind:src="require(`../assets/${path}`)">
        <div class="title">
          <h1>MyPBlog</h1>
        </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name:'LogoComponent',
  props:{
    path:{
      type:String,
      default:"logo.svg"
    }
  }
}
</script>

<style lang="scss">
  @import "../style/_modulos.scss","../style/_configs.scss";
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
  
  html,body,*{
    margin: 0 0;
    padding:0 0;
    box-sizing: border-box;
  }
  .redirect{
    text-decoration:none;
    color:black;
    .main-logo{
      width:auto;
      height:auto;
      font-family: $font-stack1;
      .logo{
        display:flex;
        flex:1 1;
        flex-direction:row;
        @include positioning-element-flex(center,start);
        img{
          @include positioning-element-flex(center,center);
        }
        .title{
          @include positioning-element-flex(center,center);
        }
      }
    }
  }
  @media(max-width:425px){
    .main-logo{
      .logo{
        margin:.5rem .5rem;
        img{
          max-width: 50px;
          max-height: 50px;
        }
        .title{
          margin:0rem .4rem;
          font-size:.5rem;
        }
      }
    }
  }
  @media(min-width:425px){
    .main-logo{
      .logo{
        margin:.5rem .52rem;
        img{
          max-width: 65px;
          max-height: 65px;
        }
        .title{
          margin:0rem .4rem;
          font-size:.7rem;
        }
      }
    }
  }
  @media(min-width: 768px){
    .main-logo{
      .logo{
        margin:.5rem .5rem;
        img{
          max-width: 80px;
          max-height: 80px;
        }
        .title{
          margin:0rem .6rem;
          font-size:1rem;
        }
      }
    }
  }
  @media(min-width: 1024px){
    .main-logo{
      .logo{
        margin:.5rem .5rem;
        img{
          max-width: 90px;
          max-height: 90px;
        }
        .title{
          margin:0rem .6rem;
          font-size:1.0rem;
        }
      }
    }
  }
</style>