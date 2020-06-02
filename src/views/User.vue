<template>
  <div class="main-user">
    <header>
      <div class="main-logo">
        <LogoComponent/>
      </div>
      <div v-bind:class="{'main-profile':hidden,'main-profile-active':!hidden}">
          <ProfileUser v-bind:idProfile="$route.params.idUser" v-bind:publishedPosts="numberPosts"/>
      </div>
    </header>
    <main>
      <section class="main-user-posts-area">
        <!-- <p>User man {{$route.params.idUser}}</p> -->
      </section>
    </main>
    <footer><FooterComponent/></footer>
  </div>  
</template>

<script>
import LogoComponent from '../components/LogoComponent.vue'
import ProfileUser from '../components/ProfileUser.vue'
import FooterComponent from '../components/FooterComponent'
import axios from 'axios';
export default {
  name:'User',
  components: {LogoComponent,ProfileUser,FooterComponent},
  data(){
    return{
      widthScreen:window.innerWidth,
      hidden:true,
      numberPosts:0
    }
  },
  methods:{
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
        // console.log(response.data)
        this.numberPosts = response.data.length;
        })
      .catch(err => console.log(err));
    }
  },
  mounted(){
    window.addEventListener('resize',this.updateSizeScreen);
    this.consultPosts();
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
  .main-user{
    width:100vw;
    height:100vh;
    header{
      width:100vw;
      height:auto;
      @include positioning-two-elements-flex-midle(row);
      justify-content: space-between;
      .main-logo{
        .main-logo{
          margin-left:.5rem;
       }
      }
      .main-profile{
        margin:0.5rem;
        height:auto;
        width:auto;
      }
      .main-profile-active{
        margin:0.5rem;
        height:auto;
        width:auto;
      }
    }
    main{
      width:100vw;
      height:auto;
      display:grid;
      
    }
    footer{
      width:100vw;
      height:auto;
    }

  }
</style>