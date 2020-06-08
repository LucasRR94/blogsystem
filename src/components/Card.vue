<template>
  <div class="template-card">
    <div class="main-card">
      <div class="main-review-text-box">
        <div class="main-review-text-box-paragraph">
          <p>{{review}}</p>
        </div>
      </div>
      <div class="container-picture-box">
        <div class="container-picture-box-picture">
          <img v-bind:src="require(`../assets/${picturePath}`)" alt="picture-user">
        </div>
        <div class="container-picture-box-title">
          <p>{{userName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    userName:{
      type:String,
      default:"Unknown user"
    },
    review:{
      type:String,
      default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloremque omnis in ex harum, tenetur laborum a,quod nihil quasi. Similique ea quae autem iusto commodi repellat rem incidunt."
    },
    picturePath:{
      type: String,
      default:"pictureUnknown.svg"
    }
  }
}
</script>

<style lang="scss">
  @import '../style/_modulos.scss';
  .template-card{
    .main-card{
      border-radius:0.6rem;
      background: #cfcfcf;
      width:auto;
      height:auto;
      display:flex;
      flex-direction: row;
      .main-review-text-box{
        flex:0.65;
        height:auto;
        display:grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-content: center;
        &-paragraph{
          margin-top:0.1rem;
          background: white;
          border-radius: 0.8rem;
          color:black;
          p{
            overflow-y: auto;
            overflow: -moz-scrollbars-vertical;
            overflow:-webkit-scrollbars-vertical;
            margin:0.1rem;
          }
        }
      }
      .container-picture-box{
        flex:0.35;
        display:grid;
        grid-template-rows: 1fr 1fr; 
        &-picture{
          justify-self:center;
          display: flex;
          flex:1;
          flex-direction:row;
          justify-content: center;
        }
        &-title{
          display:flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          p{
            text-align: center;
            flex:0.3;
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
      height:auto;
      min-height:80px;
      max-width:285px;//20px each side  
      .main-card{
        min-height: 80px;
        max-height: 80px;
        .main-review-text-box{
          margin:0rem 0.2rem;
          &-paragraph{
            font-size:0.6rem;
            padding:0.3rem 0.3rem;
            p{
              max-height: 60px;
            }
          }
        }
        .container-picture-box{
          margin:.2rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width:80%;
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
      height: 80px;
      max-width:300px;
      .main-card{
        max-height: 80px;
        .main-review-text-box{
          margin:0rem 0.2rem;
          &-paragraph{
            font-size:0.6rem;
            padding:0.2rem 0.2rem;
            width:auto;
            height:auto;
            p{
              max-height: 80px;
            }
          }
        }
        .container-picture-box{
          margin:.2rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width:80%;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.7rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  @media(max-width:768px){
     .template-card{
      margin:1rem .2rem;
      width:auto;
      max-width:400px;
      @include defined_height(160px,160px);
      .main-card{
        @include defined_height(160px,160px);
        .main-review-text-box{
          margin:0rem 0.2rem;
          &-paragraph{
            font-size:.8rem;
            padding:0.2rem 0.2rem;
            width:auto;
            height:auto;
            p{
              max-height: 100px;
            }
          }
        }
        .container-picture-box{
          margin:1rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width: 80%;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.7rem;
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
      @include defined_height(200px,200px);
      .main-card{
        @include defined_height(180px,180px);
        .main-review-text-box{
          margin:0rem 0.2rem;
          &-paragraph{
            font-size:.8rem;
            padding:0.2rem 0.2rem;
            width:auto;
            height:auto;
            p{
              max-height: 100px;
            }
          }
        }
        .container-picture-box{
          margin:1rem .2rem;
          &-picture{
            padding:.1rem .1rem;
            img{
              width: 75%;
            } 
          }
          &-title{
            flex:0.1;
            p{
              padding:0.2rem 0.2rem;
              border-radius: 0.6rem;
              font-size: 0.7rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>