<template>
  <div class="main-user">
    <div v-if="state" class="main-loader">
      <LoaderAnimation/>
    </div>
    <header v-if="notState">
      <div class="main-logo">
        <LogoComponent/>
      </div>
      <div class="wrapper-main-profile">
        <div class="main-profile">
            <ProfileUser v-bind:idProfile="$route.params.idUser.toString()" v-bind:numberOfPublishedPosts="this.propNumberPosts"/>
        </div>
      </div>
    </header>
    <main v-if="notState" >
      <section class="main-user-posts-area">
        <div class="main-user-posts-area-arr">
          <div class="main-user-posts-area-arr-element" v-for="post in arrPosts" :key="post.id">
            <UserPost v-bind:publishedPost="post"/>
          </div>
        </div>
      </section>
    </main>
    <footer v-if="notState">
      <FooterComponent/>
    </footer>
  </div>  
</template>

<script>
import LogoComponent from '../components/LogoComponent.vue'
import ProfileUser from '../components/ProfileUser.vue'
import FooterComponent from '../components/FooterComponent'
import UserPost from '../components/UserPost'
import axios from 'axios';
import LoaderAnimation from '../components/LoaderAnimation.vue'

export default {
  name:'User',
  components: {LoaderAnimation,UserPost,LogoComponent,ProfileUser,FooterComponent},
  data(){
    return{
      widthScreen:window.innerWidth,
      numberPosts:0,
      arrPosts:{},
      state:true,
      notState:false,
      propNumberPosts:0
    }
  },
  filters:{
    reverseArr : function(arrPosts){
      return arrPosts.slice().reverse();
    }
  },
  watch:{
    numberPosts: function (){
      this.propNumberPosts= this.numberPosts;
    }
  },
  methods:{
    getNumberPosts(){
      return this.numberPosts;
    },
    updateSizeScreen(){
      this.widthScreen = window.innerWidth;
    },
    consultPosts(){
      axios({
        method:'get',
        url:`https://jsonplaceholder.typicode.com/users/${this.$route.params.idUser}/posts`,
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => {
        this.numberPosts = response.data.length;
        this.arrPosts = (response.data).reverse();
        })
      .catch(err => {
        windows.alert("An error it happened please try later, no answer from API.")
        console.log(err)
      });
    },
    startLoading(){
      const timeout = 5000;
      setTimeout(() => {
        this.state=!this.state;
        this.notState = !this.notState;
      }, timeout);
    }
  },
  mounted(){
    window.addEventListener('resize',this.updateSizeScreen);
    this.consultPosts();
    this.startLoading();
  },
  destroyed(){
    window.removeEventListener('resize',this.updateSizeScreen);
  }
}
</script>

<style lang='scss'>
  @import '../style/_modulos.scss';
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
  }
  .hidden{
    visibility:hidden;
  }
  .main-user{
    width:100vw;
    height:100vh;
    display:grid;
    grid-template-rows:1fr 2fr 1fr;
    align-self: center;
    .main-loader{
      display:flex;
      flex-direction:row;
      justify-content: center;
      align-items:center;
      width:100vw;
      height:100vh;
       background: #f4f4f4;
    }
    header{
      width:100vw;
      height:auto;
      display:grid;
      grid-template-columns:  1fr 1fr;
      .main-logo{
        .main-logo{
          margin-left:.5rem;
       }
      }
      .wrapper-main-profile{
        position:absolute;
        width:auto;
        height:auto;
        justify-self: end;
        margin-top:0.5rem;
        
        .main-profile{
          height:auto;
          width:auto;
        }
      }
    }
    main{
      width:100vw;
      height:auto;
      @include center-div;  
      .main-user-posts-area{
        width:98vw;
        height:auto;
        padding-top:1rem;
        @include center-div;
        &-arr{
         &-element{
           margin:.6rem;
         }
        }
      }
      
    }
    footer{
      width:100vw;
      height:auto;
    }

  }
  @media(max-width:375px){
    .main-user{
      width:100vw;
      height:100vh;
      display:grid;
      grid-template-rows:1fr 2fr 1fr;
      align-self: center;
      header{
        width:100vw;
        height:auto;
        display:grid;
        grid-template-columns:  1fr 1fr;
        .main-logo{
          .main-logo{
            margin-left:.5rem;
          }
        }
        .wrapper-main-profile{
          left:48%;
          position:absolute;
          width:auto;
          height:auto;
          justify-self: end;
          margin-top:0.5rem;
          
          .main-profile{
            height:auto;
            width:auto;
          }
        }
      }
      main{
        width:100vw;
        height:auto;
        
      }
      footer{
        width:100vw;
        height:auto;
      }

    }   
  }
  @media(min-width:375px){
    .main-user{
      width:100vw;
      height:100vh;
      display:grid;
      grid-template-rows:1fr 2fr 1fr;
      align-self: center;
      header{
        width:100vw;
        height:auto;
        display:grid;
        grid-template-columns:  1fr 1fr;
        .main-logo{
          .main-logo{
            margin-left:.5rem;
        }
        }
        .wrapper-main-profile{
          left:48%;
          position:absolute;
          width:auto;
          height:auto;
          justify-self: end;
          margin-top:0.5rem;
          
          .main-profile{
            height:auto;
            width:auto;
          }
        }
      }
      main{
        width:100vw;
        height:auto;
        
      }
      footer{
        width:100vw;
        height:auto;
      }

    }   
  }
  @media(min-width:425px){
    .main-user{
      width:100vw;
      height:100vh;
      display:grid;
      grid-template-rows:1fr 2fr 1fr;
      align-self: center;
      header{
        width:100vw;
        height:auto;
        display:grid;
        grid-template-columns:  1fr 1fr;
        .main-logo{
          .main-logo{
            margin-left:.5rem;
        }
        }
        .wrapper-main-profile{
          left:60%;
          position:absolute;
          width:auto;
          height:auto;
          justify-self: end;
          margin-top:0.5rem;
          
          .main-profile{
            height:auto;
            width:auto;
          }
        }
      }
      main{
        width:100vw;
        height:auto;
        
      }
      footer{
        width:100vw;
        height:auto;
      }

    }   
  }

  @media(min-width:768px){
    .main-user{
      width:100vw;
      height:100vh;
      display:grid;
      grid-template-rows:1fr 2fr 1fr;
      align-self: center;
      header{
        width:100vw;
        height:auto;
        display:grid;
        grid-template-columns:  1fr 1fr;
        .main-logo{
          .main-logo{
            margin-left:.5rem;
        }
        }
        .wrapper-main-profile{
          left:65%;
          position:absolute;
          width:auto;
          height:auto;
          justify-self: end;
          margin-top:0.5rem;
          
          .main-profile{
            height:auto;
            width:auto;
          }
        }
      }
      main{
        width:100vw;
        height:auto;
        
      }
      footer{
        width:100vw;
        height:auto;
      }

    }   
  }
</style>