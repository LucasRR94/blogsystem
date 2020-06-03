<template>
  <article v-bind:class="{'main-profile-user':!state.hidden,'pic-showed':state.hidden}">
    <div class="main-profile-user-pic" v-on:click="changeState">
      <img v-bind:src="require(`../assets/${profile.picPath}`)" alt="pic-profile">
    </div>
    <div v-if="!state.hidden" class="main-profile-user-info-profile"> 
      <div class="main-profile-user-info-profile-wrapper">
        <span>Name: {{profile.name}}</span>
      </div>
      <div class="main-profile-user-info-profile-wrapper">
        <span>Unique Id: {{profile.id}}</span>
      </div>
      <div class="main-profile-user-info-profile-wrapper">
        <span>Published posts: {{profile.numberPost}}</span>
      </div>
    </div>
    <div v-else class="pic-showed-empty">

    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name:'ProfileUser',
  props:{
    NumberOfPublishedPosts:{
      type:Number,
      default:0
    },
    idProfile:{
      type:String
    }
  },
  watch :{
    NumberOfPublishedPosts :function updatePost(){
      this.profile.numberPost = this.NumberOfPublishedPosts;
    }
  },
  data(){
    return{
      profile:{
        picPath:"pictureUnknown.svg",
        name:"",
        id:"",
        numberPost:0
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
    height:auto;
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
      grid-template-rows: 1fr 1fr 1fr;
      &-wrapper{
        @include center-div;
        border-radius:.4rem;
        margin:0.2rem .1rem;
        background: #BDBDBD;
        span{
          display:flex;
          align-self: center;
          height:1.2rem;
          font-size:1.2rem;
        }
      }      
    }
  }
  .pic-showed{
    width:auto;
    height:auto;
    @include positioning-two-elements-flex-midle(column);
    border-radius:.5rem;
    .main-profile-user-pic{
      @include center-div;
      flex:.3;
      img{
        height:auto;
        width:100px;
      }
    }
    &-empty{
      flex:.7;
    }
  }

@media(max-width:375px){
    .main-profile-user{
      height:200px;
      border-radius:.5rem;
      min-width: 160px;
      &-pic{
        img{
          height:auto;
          width:60px;
        }
      }
      &-info-profile{
        &-wrapper{
          span{
            font-size:.8rem;
            margin:0.2rem .1rem;
            border-radius:.4rem;
          }
        }
      }
    }
    .pic-showed{
      width:160px;
      height:200px;
      .main-profile-user-pic{
        width:auto;
        height:auto;
        img{
          width:60px;
          border-radius: 50%;
        }
      }
      &-empty{
        flex:.7;
      }
    }
  }
  @media (min-width: 375px){
    .main-profile-user{
      width:160px;
      height:240px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:70px;
        }
      }
      &-info-profile{
        &-wrapper{
          span{
            font-size:.9rem;
            margin:0.2rem .1rem;
            height: 1.2rem;
            border-radius:.4rem;
            padding:0 .1rem;
          }
        }
      }
    }
    .pic-showed{
      width:160px;
      height:240px;
      .main-profile-user-pic{
        width:auto;
        height:auto;
        img{
          width:70px;
        }
      }
    }
  }
  @media (min-width:425px){
    .main-profile-user{
      width:200px;
      height:300px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:80px;
        }
      }
      &-info-profile{
        &-wrapper{
          span{
            font-size:1.0rem;
            margin:0.2rem .1rem;
            height: 1.4rem;
            border-radius:.4rem;
            padding:.1 .1rem;
          }
        }
      }
    }
    .pic-showed{
      width:200px;
      height:300px;
      .main-profile-user-pic{
        width:auto;
        height:auto;
        img{
          width:70px;
        }
      }
    }
  }
  @media (min-width:768px){
    .main-profile-user{
      width:300px;
      height:360px;
      border-radius:.5rem;
      &-pic{
        img{
          height:auto;
          width:100px;
        }
      }
      &-info-profile{
        &-wrapper{
        span{
            font-size:1.2rem;
            margin:0.2rem .1rem;
            height: 1.6rem;
            border-radius:.4rem;
            padding:.1 .1rem;
          }
        }
      }
    }
    .pic-showed{
      width:300px;
      height:360px;
      .main-profile-user-pic{
        width:auto;
        height:auto;
        img{
          width:100px;
        }
      }
    }
  }
</style>