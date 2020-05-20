<template>
  <div class='main-homepage'>
    <header>
      <div class="logo">
        <img src="../assets/logo.svg">
        <div class="title">
          <h1>MyPBlog</h1>
        </div>
      </div>
      <div v-if="designMobile" class="hamburger-menu">
        <div class="hamburger-menu-area">
          <img src="../assets/hamburger_menu.svg" alt="picture-menu">
        </div>
      </div>
      <div v-else  class="link-sign-up">
        <div class="link-sign-up-container">
          <a href="###">Sign Up</a>
        </div>
      </div>
    </header>
    <main>
      <article class="main-reviews">
        <div class="main-reviews-container">
          <div class="main-reviews-container-title">
            <h2>Some reviews of our systems</h2>
            </div>
          <div class="main-reviews-slide-reviews">
            <Card/> 
            </div>
        </div>
      </article>
      <section class="section-sign-in">
        <form class="section-sign-in-form">
          <div>
            <h2>Join now</h2>
          </div>
          <div>
            <p>Join now, enjoy the experience of share thoughts with the world.</p>
          </div>
          <div>
            <input type="text" id="emailAdress" placeholder="Your email adress">
            <input type="text" id="yourPass" placeholder="Your password">
            <input type="Submit" value="Sign In">
          </div>
        </form>
      </section>
      
    </main>
    <footer>
      <article><h3>Contact us</h3></article>
      <article><p>Imgs</p></article>
    </footer>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name:'Homepage',
  components:{Card},
  computed: {
    designMobile(){
      /*If true , means that will be mobile design */
      return window.innerWidth  < 1024;
    }
  }
}
</script>

<style lang="scss">

@import "../style/_configs.scss","../style/_modulos.scss";
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
  
  *,body,html{
    margin:0 0;
    padding:0 0;
    box-sizing:border-box;
  }
  .main-homepage{
    header{
      font-family:$font-stack1;
      @include pic-config($url-pic);
      @include positioning-two-elements-flex-midle(row);
      .logo{
        flex:1;
        display:flex;
        flex-direction:row;
        width:auto;
        height:auto;
        @include positioning-element-flex(center,start);
        img{
          flex:1;
          @include positioning-element-flex(center,center);
        }
        .title{
          flex:1;
          @include positioning-element-flex(center,center);
        }
      }
      .hamburger-menu{
        @include positioning-element-flex(center,start);
        flex:1;
        display:flex;
        justify-content:flex-end;
        &-area{
          img{
            width:auto;
            height:auto;
          }
        }
      }
      .link-sign-up{
        @include positioning-element-flex(center,start);
        flex:1;
        display:flex;
        justify-content:flex-end;
        &-container{
          background-color:black;
          border-radius: 0.3rem;
          @include  one-flex-row-column(row);
          a{
            @include positioning-element-flex(center,center);
            text-decoration:none;
            color:white;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media(min-width:320px){
    .main-homepage{
      header{
        height:15vh;
        .logo{
            margin:0.2rem 0rem;
            img{
              max-width:45px; // 320px -> size width screen
              max-height:45px;
            }
            .title{
              font-size:0.35rem;
            }
         }
        .hamburger-menu{
          margin:0.1rem 0rem;
          &-area{
            img{
              max-width:50px; // max-width 320px
              max-height:50px;
            }
          }
        }
      }
    }
  }
  @media(min-width:425px){
    .main-homepage{
      header{
        height:20vh;
        .logo{
            margin:0.2rem 0.2rem;
            img{
              max-width:45px; // 320px -> size width screen
              max-height:45px;
            }
            .title{
              font-size:0.5rem;
            }
         }
        .hamburger-menu{
          margin:0.1rem .2rem;
          &-area{
            img{
              max-width:50px; // max-width 320px
              max-height:50px;
            }
          }
        }
      }
    }
  }
  @media(min-width:768px){
    .main-homepage{
      header{
        height:40vh;
        .logo{
            margin:0.2rem 0.2rem;
            img{
              max-width:80px; // 320px -> size width screen
              max-height:80px;
            }
            .title{
              font-size:0.7rem;
            }
         }
        .hamburger-menu{
          margin:0.1rem .2rem;
          &-area{
            img{
              max-width:80px; // max-width 320px
              max-height:80px;
            }
          }
        }
      }
    }
  }
  @media(min-width:1024px){
    .main-homepage{
      header{

        .logo{
          img{
          }
          .title{
          }
        }
        .hamburger-menu{
          &-area{
            img{
              width:auto;
              height:auto;
            }
          }
        }
        .link-sign-up{
          margin:1rem 0.7rem;
          &-container{
            width:7rem;
            height:3rem;
            box-shadow: 2px 5px 5px black;
            a{
              padding:1rem 1rem;
              font-size:1.2rem;
            }
          }
        }
      }
    }
  }
  @media(min-width:1440px){
    .main-homepage{
        header{
          height:45vh;
          .logo{
            img{
            }
            .title{
            }
          }
          .hamburger-menu{
            &-area{
              img{
                width:auto;
                height:auto;
              }
            }
          }
          .link-sign-up{
            margin:1rem 0.7rem;
            &-container{
              width:7rem;
              height:3rem;
              box-shadow: 2px 5px 5px black;
              a{
                padding:1rem 1rem;
                font-size:1.2rem;
              }
            }
          }
        }
      }
  }
</style>