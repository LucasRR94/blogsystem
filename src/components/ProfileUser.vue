<template>
  <article v-bind:class="{'main-profile-user':!state.hidden,'pic-showed':state.hidden}">
    <div class="main-profile-user-pic" v-on:click="changeState">
      <img v-bind:src="require(`../assets/${profile.picPath}`)" alt="pic-profile">
    </div>
    <div v-if="!state.hidden" class="main-profile-user-info-profile"> 
      <span>Name: {{profile.name}}</span>
      <span>Unique Id: {{profile.id}}</span>
      <span>Published posts: {{profile.numberPost}}</span>
    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name:'ProfileUser',
  props:{
    publishedPosts:{
      type:Number,
      default:0
    },
    idProfile:{
      type:String
    }
  },
  computed :{
    updatePost(){
      this.profile.numberPost = this.publishedPosts;
    }
  },
  data(){
    return{
      profile:{
        picPath:"pictureUnknown.svg",
        name:"",
        id:"",
        numberPost:this.publishedPosts
      },
      state:{
        hidden:true
      }
    }
  },
  methods:{
    loadProfileInfos(responseServe){
      const maxSize = responseServe.length;
      let cond = true;
      let ind = 0;
      while(cond){
        if(ind > maxSize - 1){
          cond = false;
        }
        else{
          const obj = responseServe[ind];
          if(Number(obj.id) === Number(this.idProfile)){
            this.profile.name = obj.name;
            this.profile.id = obj.id;
            cond = false;
          }
        }
        ind++;
      }
    },
    consultProfile(){
      axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/users',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
       
      })
      .then(response => this.loadProfileInfos(response.data))
      .catch(err => console.log(err));
    },
    changeState(){
      this.state.hidden=!this.state.hidden;
    }
  },
  mounted(){
    this.consultProfile();
  }
}
</script>

<style lang='scss'>
  @import '../style/modulos.scss';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  .main-profile-user{
    width:auto;
    height:400px;
    background:rgb(94, 94, 94);
    @include positioning-two-elements-flex-midle(column);
    border-radius:.5rem;
    &-pic{
      flex:.3;
      @include center-div;
      img{
        height:auto;
        width:100px;
      }
    }
    &-info-profile{
      font-family: 'Roboto', sans-serif;
      flex:.7;
      display:grid;
      grid-template-columns: repeat(1fr,3);
      span{
        @include center-div;
        font-size:1.2rem;
        margin:0.2rem .1rem;
        height: 1.4rem;
        background: #BDBDBD;
        border-radius:.4rem;
      }
    }
  }
  .pic-showed{
    width:120px;
    height:120px;
    @include center-div;
    .main-profile-user-pic{
      @include center-div;
      width:100px;
      height:100px;
      border-radius:50%;
      img{
        height:auto;
        width:100px;
        border-radius: 50%;
      }
    }
  }
  @media(max-width:375px){
    .main-profile-user{
      height:200px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:60px;
        }
      }
      &-info-profile{
        span{
          font-size:.8rem;
          margin:0.2rem .1rem;
          height: 1rem;
          border-radius:.4rem;
        }
      }
    }
    .pic-showed{
      width:60px;
      height:60px;
      .main-profile-user-pic{
        width:60px;
        height:60px;
        border-radius:50%;
        img{
          width:60px;
          border-radius: 50%;
        }
      }
    }
  }
  @media (min-width: 375px){
    .main-profile-user{
      height:240px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:70px;
        }
      }
      &-info-profile{
        span{
          font-size:.9rem;
          margin:0.2rem .1rem;
          height: 1.2rem;
          border-radius:.4rem;
          padding:0 .1rem;
        }
      }
    }
    .pic-showed{
      width:70px;
      height:70px;
      .main-profile-user-pic{
        width:70px;
        height:70px;
        border-radius:50%;
        img{
          width:70px;
          border-radius: 50%;
        }
      }
    }
  }
  @media (min-width:425px){
    .main-profile-user{
      height:300px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:80px;
        }
      }
      &-info-profile{
        span{
          font-size:1.0rem;
          margin:0.2rem .1rem;
          height: 1.4rem;
          border-radius:.4rem;
          padding:.1 .1rem;
        }
      }
    }
    .pic-showed{
      width:80px;
      height:80px;
      .main-profile-user-pic{
        width:80px;
        height:80px;
        border-radius:50%;
        img{
          width:80px;
          border-radius: 50%;
        }
      }
    }
  }
  @media (min-width:768px){
    .main-profile-user{
      height:360px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:100px;
        }
      }
      &-info-profile{
        span{
          font-size:1.2rem;
          margin:0.2rem .1rem;
          height: 1.6rem;
          border-radius:.4rem;
          padding:.1 .1rem;
        }
      }
    }
    .pic-showed{
      width:100px;
      height:100px;
      .main-profile-user-pic{
        width:100px;
        height:100px;
        border-radius:50%;
        img{
          width:100px;
          border-radius: 50%;
        }
      }
    }
  }
</style>