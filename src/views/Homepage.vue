<template>
  <div class='main-homepage'>
    <header>
      <div class="logo">
        <img src="../assets/logo.svg">
        <div class="title">
          <h1>MyPBlog</h1>
        </div>
      </div>
      <div v-if="windowScreen < 1024" class="hamburger-menu">
        <div class="hamburger-menu-area"  id="dropDownMenu">
          <div class="hamburger-menu-area-container-list" v-bind:class=" { 'hidden-element' : menuVisible }">
            <ul class="hamburger-menu-area-container-list-dropdown-menu">
              <li class="hamburger-menu-area-container-list-dropdown-menu-container">Sign up</li>
              <li class="hamburger-menu-area-container-list-dropdown-menu-container">item 2</li>
              <li class="hamburger-menu-area-container-list-dropdown-menu-container">item 3</li>
              <li class="hamburger-menu-area-container-list-dropdown-menu-container">item 4</li>
              <li class="hamburger-menu-area-container-list-dropdown-menu-container">item 5</li>
            </ul>
          </div>
          <img src="../assets/hamburger_menu.svg" alt="picture-menu" v-on:click="showMenu" v-bind:class=" { 'hidden-element' : !menuVisible }">
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
            <SlideShowReview/>         
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
      <div class="wrapper-content-footer">
        <router-link  to="/listusers"><div><p>List Users</p></div></router-link>
        <section> 
          <div class="Title-icons">
            <h3>Social networks:</h3>
          </div>
          <div class="container-models-social-network-icon"> 
            <img src="../assets/social_network_icon.svg" alt="social_media_link">
            <img src="../assets/social_network_icon.svg" alt="social_media_link">
            <img src="../assets/social_network_icon.svg" alt="social_media_link">
          </div> 
        </section>
        </div>
    </footer>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import SlideShowReview from '../components/SlideShowReview.vue'

export default {
  name:'Homepage',
  components:{Card,SlideShowReview},
  data(){
    return{
      menuVisible: true,
      iconVisible: false,
      windowScreen:window.innerWidth
    }
  },
  methods:{
    showMenu(e){
      e.preventDefault();
      this.menuVisible = !(this.menuVisible);
    },
    updateSizeScreen(){
      this.windowScreen=window.innerWidth;
    },
    ItsMobile(){
      return this.windowScreen < 1024;
    },
    CheckIfClickInsideOrInChildMenu(elementRef,targetClicked){
      return ((elementRef!==targetClicked)  && !elementRef.contains(targetClicked));
    },    
    closeMenu(e){
      e.preventDefault();
      const element = document.getElementById("dropDownMenu");
      const target = e.target;
      if(this.ItsMobile() && this.menuVisible === false && this.CheckIfClickInsideOrInChildMenu(element,target)){
        this.menuVisible=!(this.menuVisible);
      } 
    }
  },
  created(){
    window.addEventListener('resize',this.updateSizeScreen);
    window.addEventListener('click',this.closeMenu);
  },
  destroyed(){
    window.removeEventListener('resize',this.updateSizeScreen);
    window.removeEventListener('click',this.closeMenu);
  }
}
</script>

<style lang="scss">

@import "../style/_control_cards_desktop_tablet.scss","../style/_mobile.scss","../style/_configs.scss","../style/_modulos.scss";
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
  
  *,body,html{
    margin:0 0;
    padding:0 0;
    box-sizing:border-box;
  }
  .hidden-element{
    display:none;
  }
  .visible-element{
    display:block;
  }
  .active-span{
    background-color:rgb(235, 226, 226) !important;            
  }
  .main-homepage{
    grid-template-rows: 1fr 3fr 1fr;
    align-content: space-around;
    justify-content: center;
    width:100vw;
    height:auto;
    header{
      position:relative;
      font-family:$font-stack1;
      @include pic-config($url-pic);
      @include positioning-two-elements-flex-midle(row);
      height:auto;
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
          &-container-list{
            height:auto;
            width:auto;
            &-dropdown-menu{
              background:rgb(65, 65, 65);
              list-style: none;
              margin:.2rem;
              padding:.2rem .2rem;
              border-radius:.4rem;
              z-index:2;
              &-container{  
                z-index:2;
                color:#000;
                background:#fff;
                padding:.6rem 0.6rem;
                margin:0.5rem;
                border-radius:.4rem;
              }
            }
          }
          img{
            margin-right:1rem;
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
          margin-right: 1rem;
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
      position:static;
      font-family:$font-stack2;
      width:100%;
      height:auto;
      .wrapper-rewiews-section{
        .main-reviews{
          // min-height:180px;
          margin:0.1rem 0.1rem;
          &-container{
            min-height:180px;
            background:$primary-pink;
            display:grid;
            grid-template-rows: .8fr .2fr;
            &-title{
              @include positioning-element-flex(center,center);
              h2{
                color:$white-color-font;
              }
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
              input:nth-child(3):hover{
                background:$button-color-blue-hover;
              }
              
            }
          }
        }
      }
    }
    
    footer{
      grid-row-start:2;
      grid-row-end:3;
      width:100vw;
      height: auto;
      background: rgb(153, 153, 153);
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top:0.8rem;
      .wrapper-content-footer{
        align-self: center;
        width:90vw;
        height:auto;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        a{
          color:#f1f1f1;
          text-decoration:$black-color-font;
          font-size:1.2rem;
        }
        a:hover{
          color:rgb(54, 52, 52);
        }
        section{
          padding:.1rem;
          .Title-icons{
            font-size:1.0rem;
            font-weight: lighter;
          }
          .container-models-social-network-icon{
            height:32px;
            display: flex;
            flex-direction: row;
            flex:auto;
            justify-content: center;
            align-content: center;
            img{
              background: inherit;
              padding:.1rem .1rem;
              width:30px;
              height:30px;
              margin:0rem .3rem;
            }
            img:hover{
              background:rgb(80, 80, 80);
              border-radius:0.2rem;
            }

          }
          
        }
      }
      
    }
  }
  
  @media(max-width:425px){
    .main-homepage{
      header{
        @include defined_height(140px,140px);
        .logo{
            margin-left:0.2rem;
            margin-right:0.2rem;
            margin-top:0.2rem;
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
      @include design_cards_rows(0.8fr,0.6fr);
      footer{
       min-height:100px;
       max-height: 200px; 
      }      
    }
  }
  @media(min-width:425px){
    .main-homepage{
      header{
        @include defined_height(140px,140px);
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
      @include design_cards_rows(.3fr,1fr);
    }
  }
  @media(min-width:768px){
    .main-homepage{
      header{
        @include defined_height(240px,260px);
        .logo{
            margin:0.5rem 0.5rem;
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
      @include control_cards_desktop_tablet(380px,.5fr,.5fr,1rem);
      footer{
        @include defined_height(100px,150px);
      }
    }
  }
  @media(min-width:1024px){
    .main-homepage{
      min-height:760px;
      header{
        @include defined_height(280px,320px);
        .logo{
          margin:1rem;
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
          margin:1rem;
          &-container{
            width:7rem;
            height:3rem;
            box-shadow: 2px 2px 3px black;
            a{
              padding:1rem 1rem;
              font-size:1.2rem;
            }
          }
        }
      }
      @include control_cards_desktop_tablet(500px,.2fr,.8fr,1.6rem);
      footer{
        @include defined_height(100px,150px);
      }
    }
  }
  @media(min-width:1440px){
    .main-homepage{
        min-height:760px;
        header{
          @include defined_height(280px,320px);
          .logo{
            margin:2rem;
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
            margin:2rem;
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
        @include control_cards_desktop_tablet(560px,.2fr,.8fr,1.6rem);
        footer{
          @include defined_height(120px,170px);
        }      
      }
  }
</style>