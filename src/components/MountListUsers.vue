<template>
  <div class="main-load-and-search-users">
    <div class="main-load-and-search-users-wrapper" v-if="searchRequested">
      <ul class="main-load-and-search-users-wrapper-area-profile" v-if="dataAvailable">
        <li class="main-load-and-search-users-wrapper-area-profile-profile-card" v-for="user in contentConsultUsersLinks" :key="user.id"> 
          <router-link :to="{ name: 'User', params: { idUser: user.id }}"> 
            <div class="container-profile">
              <div class="container-profile-pic">
                <img v-bind:src="require(`../assets/${picturePath}`)" alt="picture-user">
              </div>
              <div class="container-profile-name">
                <p>{{user.name}}</p>
              </div>
            </div>
          </router-link>  
        </li>
      </ul>
      <div class="main-load-and-search-users-wrapper-error-area" v-else>
        <article class="main-load-and-search-users-wrapper-error-area-msg" v-if="errorLoadingAPIContent">
          <p>{{ErrorMessage}}</p>
        </article>
        <div class="main-load-and-search-users-wrapper-error-area-loadscreen" v-else>
          <LoaderSmallScreen/>           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LoaderSmallScreen from '../components/LoaderSmallScreen.vue';

export default {
  name:'MountListUsers',
  components:{LoaderSmallScreen,axios},
  props:{
    searchRequested:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      contentConsultUsersLinks:[],
      picturePath:"pictureUnknown.svg",
      ErrorMessage:"Error detected,unfortly don't was possible load response from API, try later.",
      dataAvailable:false,
      errorLoadingAPIContent:false
    }
  },
  methods:{
    getUsers(){
      axios({method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        headers: {  
          "Access-Control-Allow-Origin": "localhost",
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response =>{
        this.dataAvailable = true;
        this.contentConsultUsersLinks = response.data;
      })
      .catch(err => {
        console.log(`Error detected:${err.response}`);
        this.dataAvailable = false;
        this.errorLoadingAPIContent = true; 
      });
    }
  },
  mounted(){
    this.getUsers();
  }
}
</script>

<style lang="scss">
  @import "../style/_configs.scss","../style/_modulos.scss";
  
  *,html,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .main-load-and-search-users{
    width:100vw;
    height:auto;
    @include center-div;
    &-wrapper{
      width:100vw;
      height:auto;
      @include center-div;
      &-area-profile{
        width:98vw;
        max-width:600px;
        height:auto;
        &-profile-card{
          list-style: none;
          a{
            text-decoration:none;
            font-size:1.2rem;
            .container-profile{
              width:auto;
              height:auto;
              margin:1rem .5rem;
              border-radius:0.4rem;
              background:#5f5f5f;
              color:black;
              display:grid;
              @include positioning-two-elements-flex-midle(row);
              &-pic{
                @include positioning-element-flex(center,center);
                background:black;
                width:100px;
                height:100px;
                border-radius:.4rem 0 0 .4rem;
                img{
                  margin:.5rem;
                  width:80px;
                  height:80px;
                }
              }
              &-name{
                @include positioning-element-flex(center,center);
                text-decoration:none;
                font-weight: lighter;
                margin:.5rem;
              }
              &-name:hover{
                color:white;
              }
            }
          }
        }
      }
      &-error-area{
        width:80vw;
        height:auto;
        font-weight: lighter;
        color:$grey-color-font;
        @include center-div;
        p{
          max-width:600px;
        }
      }
    }
  }
</style>