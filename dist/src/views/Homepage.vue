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
            <div class="section-sign-in-form-title-phrase-Intro">
              <div class="section-sign-in-form-title-phrase-Intro-title">
                <h2>Join now</h2>
              </div>
              <div class="section-sign-in-form-title-phrase-Intro-phrase-Intro">
                <p>Join now, enjoy the experience of share thoughts with the world.</p>
              </div>
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
      <router-link to="/contact"> <div><p>Contact</p></div> </router-link>
      <article><p>Social Networks Area</p></article>
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

@import "../style/_mobile.scss","../style/_configs.scss","../style/_modulos.scss";
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
          max-width: 400px;
          background:$secundary-purple;
          display:flex;
          flex:1;
          border-radius:.6rem;
          justify-content: center;
          align-content: center;
          @include positioning-element-flex(center,center);
          &-form{
            max-width: 290px;
            margin:.5rem .5rem;
            display:grid;
            grid-template-rows: 0.8fr 1fr;
            &-title-phrase-Intro{
              display: flex;
              flex-direction:column;
              &-title{
                flex:1;
                font-size:0.82rem;
                font-weight: light;
                @include positioning-element-flex(center,center);
                h2{
                  color:black;
                }
              }
              &-phrase-Intro{
                line-height: 100%;
                font-size:0.8rem;
                text-align:center;
                color:$white-color-font;
                @include positioning-element-flex(center,center);
                flex:1;
              }
            }
            &-input-area{
              display:grid;
              grid-template-rows: 1fr 1fr .5fr;
              row-gap: 1.2rem;
              max-height: 120px; 
              input{
                border-radius:.3rem;
                padding:.2rem .5rem;
                // margin-top:0.5rem;
                background:$black-color-font;
                color:$white-color-font;
                border:none;
              }
              input:nth-child(3){
                border-radius:.6rem;
                justify-self:center; 
                color:$black-color-font; 
                background:$button-color-blue;
                
              }
              
            }
          }
        }
      }
    }
  }
  footer{
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
      @include design_cards_rows(1fr,0.6fr);      
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
      @include design_cards_rows(0.8fr,0.8fr);
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
        width:100vh;
        height:80vh;
        .wrapper-rewiews-section{
          width:100vh;
          height:70vh;
          display:grid;
          grid-template-columns: 1fr 1fr;
          .main-reviews{
            margin-top:2rem;
            width:48vw;
            max-width: 500px;
            height:60vh;
            margin-right:0.5rem;
            &-container{
              height:60vh;
              border-radius:.6rem;
              background:$primary-pink;
              display:grid;
              grid-template-rows: .5fr .5fr;
              &-title{
                margin:1rem .5rem;
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
            margin-top:2rem;
            border-radius:.6rem;
            &-form{
                &-title-phrase-Intro{
                  &-phrase-Intro{
                    font-size:1rem;
                  }
                }
                &-input-area{
                  
                  input{
                    font-size:1rem;
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
          width:100vw;
          height:80vh;
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
            max-height: 600px;
            .main-reviews{
              margin-top:2rem;
              width:45vw;
              max-width: 500px;
              height:60vh;
              max-height: 400px;
              margin-right:0.5rem;
              display:flex;
              flex-direction: column;
              &-container{
                height:60vh;
                max-height: 400px;
                border-radius:.6rem;
                background:$primary-pink;
                display:grid;
                grid-template-rows: .1fr .8fr;
                &-title{
                  margin:1rem .5rem;
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
              max-height: 400px;
              width:45vw;
              margin-top:2rem;
              border-radius:.6rem;
              &-form{
                &-title-phrase-Intro{
                  &-title{
                    h2{
                      font-size:1.2rem;
                    }
                  }
                  &-phrase-Intro{
                    font-size:1.05rem;
                  }
                }
                &-input-area{
                  
                  input{
                    font-size:1rem;
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
            max-height: 600px;
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
                grid-template-rows: .2fr .8fr;
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
                &-title-phrase-Intro{
                  &-title{
                    h2{
                      font-size:1.2rem;
                    }
                  }
                  &-phrase-Intro{
                    font-size:1.05rem;
                  }
                }
                &-input-area{
                  input{
                    font-size:1rem;
                  }
                }
              }
            }
          }
        }
      }
  }
</style>