<template>
  <div class="template-card">
    <div class="main-card">
      <div class="main-review-text-box">
        <div class="main-review-text-box-paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Provident fugit doloremque omnis in ex harum, tenetur laborum a,
          quod nihil quasi. Similique ea quae autem iusto commodi repellat 
          rem incidunt.</p>
        </div>
      </div>
      <div class="container-picture-box">
        <div class="container-picture-box-picture">
          <img v-bind:src="require(`../assets/${picturePath}`)" alt="picture-user">
        </div>
        <div class="container-picture-box-title">
          <p>Unknown user</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    picturePath:{
      type: String,
      default:"pictureUnknown.svg"
    }
  },
  data() {
    return{
      pathImg:"./assets/pictureUnknown.svg"
    }
  },
  methods: {
    getCurrentPicture(){
      return "assets/pictureUnknown.png";
    }
  }
}
</script>

<style lang="scss">
  .template-card{
    .main-card{
      border-radius:0.6rem;
      background: #cfcfcf;
      width:auto;
      height:auto;
      display:flex;
      flex-direction: row;
      .main-review-text-box{
        flex:0.7;
        display:grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-content: center;
        &-paragraph{
          background: white;
          border-radius: 0.8rem;
          color:black;
        }
      }
      .container-picture-box{
        flex:0.3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:0.5rem;
        &-picture{
          flex:0.6;
          padding:0.3rem 0.3rem; 
        }
        &-title{
          flex:0.4;
          p{
            background:white;
            color:black;
          }
        }
      }
    }
  }
  @media(min-width:320px){
    .template-card{
      margin:.2rem .2rem;
      width:auto;
      height:20%;
      max-width:285px;
      .main-card{
        height:18vh;
        .main-review-text-box{
          margin:0.2rem;
          &-paragraph{
            font-size:0.6rem;
            padding:0.2rem 0.2rem;
            
          }
        }
        .container-picture-box{
          margin:.2rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width:2.5rem;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.6rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  @media(min-width:425px){
    .template-card{
      margin:.2rem .2rem;
      width:auto;
      height: 100px;;
      max-width:300px;
      
      .main-card{
        .main-review-text-box{
          margin:0.2rem;
          &-paragraph{
            font-size:0.6rem;
            padding:0.2rem 0.2rem;
            width:auto;
            height:auto;
          }
        }
        .container-picture-box{
          margin:.2rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width:2.5rem;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.6rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  @media(min-width:768px){
     .template-card{
      margin:1rem .2rem;
      width:auto;
      max-width:400px;
      height:28vh;
      .main-card{
        height:28vh;
        .main-review-text-box{
          margin:0.2rem;
          &-paragraph{
            font-size:.8rem;
            padding:0.2rem 0.2rem;
            width:auto;
            height:auto;
          }
        }
        .container-picture-box{
          margin:.2rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width:4rem;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.6rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  @media(min-width:1024px){}
</style>