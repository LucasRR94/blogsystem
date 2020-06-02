<template>
  <div class="main-load-and-search-users">
    <ul class="main-load-and-search-users-area-profile" v-if="searchRunning">
      <li class="main-load-and-search-users-area-profile-profile-card" v-for="user in contentConsultUsersLinks" :key="user.id"> 
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
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'LoadAndSearchUsers',
  props:{
    querySearch:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      contentConsultUsersLinks:[],
      picturePath:"pictureUnknown.svg",
      searchRunning:false
    }
  },
  watch:{
    querySearch:function(newQuery,oldQuery){
      // make the consultation for the name
      this.updateConsultContent(newQuery);
      //this.getUsers();
      this.searchRunning = true;
    }
  },
  methods:{
    updateConsultContent(query){
      axios({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        data: JSON.stringify({
          name:query
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      .then(response => this.contentConsultUsersLinks.push(response.data))
      .catch(err => {
        console.log(`Error detected:${err}`)
        alert("Error detected please reload the page or try again later")
      });
    }
  }
}
</script>

<style lang="scss">
  @import "../style/_modulos.scss";
  
  *,html,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .main-load-and-search-users{
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

  }
</style>