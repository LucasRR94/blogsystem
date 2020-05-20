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
      <div class="wrapper-rewiews-section">
        <article class="main-reviews">
          <div class="main-reviews-container">
            <div class="main-reviews-container-title">
              <h2>Some reviews of our systems</h2>
            </div>
            <div class="main-reviews-container-slide-reviews">
              <Card/> 
            </div>
          </div>
        </article>
        <section class="section-sign-in">
          <form class="section-sign-in-form">
            <div class="section-sign-in-form-title">
              <h2>Join now</h2>
            </div>
            <div class="section-sign-in-form-phrase-Intro">
              <p>Join now, enjoy the experience of share thoughts with the world.</p>
            </div>
            <div class="section-sign-in-form-input-area">
              <input type="text" id="emailAdress" placeholder="Your email adress">
              <input type="text" id="yourPass" placeholder="Your password">
              <input type="Submit" value="Sign In">
            </div>
          </form>
        </section>
      </div>  
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
    },
    itSbigger1023(){
      return window.innerWidth  > 1023;
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
    main{
      font-family:$font-stack2;
      width:100%;
      .wrapper-rewiews-section{
        .main-reviews{
          margin:0.1rem 0.1rem;
          &-container{
            background:$primary-pink;
            display:grid;
            grid-template-rows: .8fr .2fr;
            &-title{
              @include positioning-element-flex(center,center);
              h2{
                color:$white-color-font;
              }
            }
            &-slide-reviews{
              @include positioning-element-flex(center,center);
            }
          }
        }
        .section-sign-in{
          background:$secundary-purple;
          &-form{
            &-title{
              h2{
                color:#eeee;  
              }
            }
            &-phrase-Intro{
              p{

              }
            }
            &-input-area{
              
              input{
                background:$black-color-font;
                color:$white-color-font;
                border:none;
                
              }
              input:nth-child(1),input:nth-child(2){
                
              }   
              input:nth-child(3){

              }
            }
          }
        }
      }
    }
  }
  footer{
    display:none
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
      main{
        font-family:$font-stack2;
        width:100%;
        height:66vh;
        .wrapper-rewiews-section{
          width:100%;
          height:66vh;
          @include positioning-two-elements-flex-midle(column);
          .main-reviews{
            @include positioning-element-flex(center,center);
            margin:0.2rem 0.2rem;
            width:95vw;
            height:32vh;
            &-container{
              height:32vh;
              border-radius:.6rem;
              background:$primary-pink;
              display:grid;
              grid-template-rows: .3fr .6fr;
              &-title{
                margin:.5rem .5rem;
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1rem;
                  color:$white-color-font;
                }
              }
              &-slide-reviews{
                margin-bottom: .5rem;
                margin-left:.5rem;
                margin-right:.5rem;
                @include positioning-element-flex(center,center);
              }
            }
          }
          .section-sign-in{
            margin-top:1rem;
            height:32vh;
            width:95vw;
            @include positioning-element-flex(center,center);
            border-radius:.6rem;
            &-form{
              height:32vh;
              width:95vw;
              display:grid;
              grid-template-rows:0.5fr 1.0fr 2.0fr;
              margin:0.1rem 0.1rem;
              &-title{
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1.2rem;
                  color:#eeee;  
                }
              }
              &-phrase-Intro{
                @include positioning-element-flex(center,center);
                display:flex;
                justify-content:center;
                width:90%;
                p{
                  font-size:0.8rem;
                }
              }
              &-input-area{
                display:flex;
                @include positioning-two-elements-flex-midle(column);
                @include positioning-element-flex(center,center);
                input{
                  margin:0.2rem 0rem;
                  border-radius:.4rem;
                  padding:0.1rem;
                  max-width:285px;
                  @include positioning-element-flex(center,center);
                }
                input:nth-child(1),input:nth-child(2){
                  width:80vw;
                }
                input:nth-child(3){
                  width:20vw;
                  max-width:70px;
                }
              }
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
      main{
        font-family:$font-stack2;
        width:100%;
        height:70vh;
        .wrapper-rewiews-section{
          width:100%;
          height:70vh;
          @include positioning-two-elements-flex-midle(column);
          .main-reviews{
            @include positioning-element-flex(center,center);
            margin:0.2rem 0.2rem;
            width:95vw;
            max-width: 400px;
            height:32vh;
            &-container{
              height:32vh;
              border-radius:.6rem;
              background:$primary-pink;
              display:grid;
              grid-template-rows: .1fr .8fr;
              &-title{
                margin:.5rem .5rem;
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1rem;
                  color:$white-color-font;
                }
              }
              &-slide-reviews{
                margin:.5rem;
                @include positioning-element-flex(center,center);
              }
            }
          }
          .section-sign-in{
            height:40vh;
            max-width: 400px;
            width:95vw;
            @include positioning-element-flex(center,center);
            border-radius:.6rem;
            &-form{
              height:40vh;
              max-width: 400px;
              width:95vw;
              display:grid;
              grid-template-rows:0.5fr .8fr 2.0fr;
              margin:0.1rem 0.1rem;
              &-title{
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1.2rem;
                  color:#eeee;  
                }
              }
              &-phrase-Intro{
                @include positioning-element-flex(center,center);
                display:flex;
                justify-content:center;
                width:90%;
                p{
                  font-size:1rem;
                }
              }
              &-input-area{
                display:flex;
                @include positioning-two-elements-flex-midle(column);
                @include positioning-element-flex(center,center);
                input{
                  font-size:1.0rem;
                  margin:0.4rem 0rem;
                  border-radius:.4rem;
                  padding:0.1rem;
                  max-width:285px;
                  @include positioning-element-flex(center,center);
                }
                input:nth-child(1),input:nth-child(2){
                  width:80vw;
                }
                input:nth-child(3){
                  width:20vw;
                }
              }
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
      main{
        font-family:$font-stack2;
        width:100vh;
        height:60vh;
        .wrapper-rewiews-section{
          width:100vh;
          height:60vh;
          display:grid;
          grid-template-columns: 1fr 1fr;
          .main-reviews{
            margin-top:2rem;
            width:50vw;
            max-width: 500px;
            height:60vh;
            margin-right:0.5rem;
            &-container{
              height:60vh;
              border-radius:.6rem;
              background:$primary-pink;
              display:grid;
              grid-template-rows: .1fr .8fr;
              &-title{
                margin:.5rem .5rem;
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1.2rem;
                  color:$white-color-font;
                }
              }
              &-slide-reviews{
                margin:.5rem;
                @include positioning-element-flex(center,center);
              }
            }
          }
          .section-sign-in{
            height:60vh;
            max-width: 500px;
            width:48vw;
            margin-top:1.8rem;
            border-radius:.6rem;
            &-form{
              height:60vh;
              max-width: 500px;
              width:46vw;
              display:grid;
              grid-template-rows:0.4fr .7fr 2fr;
              margin:0.1rem 0.1rem;
              &-title{
                @include positioning-element-flex(center,center);
                h2{
                  font-size:1.2rem;
                  color:#eeee;  
                }
              }
              &-phrase-Intro{
                @include positioning-element-flex(center,center);
                display:flex;
                justify-content:center;
                width:40vw;
                p{
                  font-size:1rem;
                }
              }
              &-input-area{
                margin-top:.5rem;
                display:flex;
                @include positioning-two-elements-flex-midle(column);
                @include positioning-element-flex(center,center);
                input{
                  font-size:1.0rem;
                  margin:0.4rem 0rem;
                  border-radius:.4rem;
                  max-width:285px;
                  @include positioning-element-flex(center,center);
                }
                input:nth-child(1),input:nth-child(2){
                  padding:0.4rem;
                  width:40vw;
                  margin-bottom:1rem;
                }
                input:nth-child(3){
                  width:10vw;
                  padding:0.2rem; 
                }
              }
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
      main{
          font-family:$font-stack2;
          width:100vw;
          height:70vh;
          display:flex;
          flex:1;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          .wrapper-rewiews-section{
            width:98vw;
            height:70vh;
            display:grid;
            grid-template-columns: 1fr 1fr;
            .main-reviews{
              margin-top:2rem;
              width:45vw;
              max-width: 500px;
              height:60vh;
              margin-right:0.5rem;
              display:flex;
              flex-direction: column;
              &-container{
                height:60vh;
                border-radius:.6rem;
                background:$primary-pink;
                display:grid;
                grid-template-rows: .1fr .8fr;
                &-title{
                  margin:.5rem .5rem;
                  @include positioning-element-flex(center,center);
                  h2{
                    font-size:1.2rem;
                    color:$white-color-font;
                  }
                }
                &-slide-reviews{
                  margin:.5rem;
                  @include positioning-element-flex(center,center);
                }
              }
            }
            .section-sign-in{
              height:60vh;
              max-width: 500px;
              width:45vw;
              margin-top:1.8rem;
              border-radius:.6rem;
              &-form{
                height:60vh;
                max-width: 500px;
                width:40vw;
                display:grid;
                grid-template-rows:0.4fr .7fr 2fr;
                margin:0.1rem 0.1rem;
                &-title{
                  @include positioning-element-flex(center,center);
                  h2{
                    font-size:1.2rem;
                    color:#eeee;  
                  }
                }
                &-phrase-Intro{
                  @include positioning-element-flex(center,center);
                  display:flex;
                  justify-content:center;
                  width:38vw;
                  max-width: 380px;
                  p{
                    font-size:1rem;
                  }
                }
                &-input-area{
                  margin-top:.5rem;
                  display:flex;
                  @include positioning-two-elements-flex-midle(column);
                  @include positioning-element-flex(center,center);
                  input{
                    font-size:1.0rem;
                    margin:0.4rem 0rem;
                    border-radius:.4rem;
                    max-width:285px;
                    @include positioning-element-flex(center,center);
                  }
                  input:nth-child(1),input:nth-child(2){
                    padding:0.4rem;
                    width:40vw;
                    margin-bottom:1rem;
                  }
                  input:nth-child(3){
                    width:10vw;
                    padding:0.2rem; 
                  }
                }
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
        main{
          font-family:$font-stack2;
          width:100vw;
          height:70vh;
          display:flex;
          flex:1;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          .wrapper-rewiews-section{
            width:98vw;
            max-width: 1400px;
            height:70vh;
            display:grid;
            grid-template-columns: 1fr 1fr;
            .main-reviews{
              margin-top:2rem;
              width:45vw;
              max-width: 500px;
              height:60vh;
              margin-right:0.5rem;
              display:flex;
              flex-direction: column;
              &-container{
                height:60vh;
                border-radius:.6rem;
                background:$primary-pink;
                display:grid;
                grid-template-rows: .1fr .8fr;
                &-title{
                  margin:.5rem .5rem;
                  @include positioning-element-flex(center,center);
                  h2{
                    font-size:1.2rem;
                    color:$white-color-font;
                  }
                }
                &-slide-reviews{
                  margin:.5rem;
                  @include positioning-element-flex(center,center);
                }
              }
            }
            .section-sign-in{
              height:60vh;
              max-width: 500px;
              width:45vw;
              margin-top:1.8rem;
              border-radius:.6rem;
              &-form{
                height:60vh;
                max-width: 500px;
                width:40vw;
                display:grid;
                grid-template-rows:0.4fr .7fr 2fr;
                margin:0.1rem 0.1rem;
                &-title{
                  @include positioning-element-flex(center,center);
                  h2{
                    font-size:1.2rem;
                    color:#eeee;  
                  }
                }
                &-phrase-Intro{
                  @include positioning-element-flex(center,center);
                  display:flex;
                  justify-content:center;
                  width:38vw;
                  max-width: 380px;
                  p{
                    font-size:1rem;
                  }
                }
                &-input-area{
                  margin-top:.5rem;
                  display:flex;
                  @include positioning-two-elements-flex-midle(column);
                  @include positioning-element-flex(center,center);
                  input{
                    font-size:1.0rem;
                    margin:0.4rem 0rem;
                    border-radius:.4rem;
                    max-width:285px;
                    @include positioning-element-flex(center,center);
                  }
                  input:nth-child(1),input:nth-child(2){
                    padding:0.4rem;
                    width:40vw;
                    margin-bottom:1rem;
                  }
                  input:nth-child(3){
                    width:10vw;
                    padding:0.2rem; 
                  }
                }
              }
            }
          }
        }
      }
  }
</style>