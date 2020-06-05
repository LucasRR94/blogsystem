<template>
  <div class="main-reviews-container-slide-reviews">
    <button v-on:click="previousSlide"> &#10094;</button>
    <div class="main-reviews-container-slide-reviews-card-area">
      <Card  v-for="review in listReviews" :key="review.id" v-bind:class="{'hidden-element':review.notVisibility}"  v-bind:review="review.review" v-bind:userName="review.UserNameReviews"></Card>
    </div> 
    <button v-on:click="nextSlide">&#10095;</button> 
    <div class="main-reviews-container-slide-reviews-options-cards">
      <span class="main-reviews-container-slide-reviews-options-cards-link-dot" v-bind:class="{'active-span':!this.listReviews[0].notVisibility}" v-on:click="changeToSlide(0)"></span>
      <span class="main-reviews-container-slide-reviews-options-cards-link-dot" v-bind:class="{'active-span':!this.listReviews[1].notVisibility}" v-on:click="changeToSlide(1)"></span>
      <span class="main-reviews-container-slide-reviews-options-cards-link-dot" v-bind:class="{'active-span':!this.listReviews[2].notVisibility}" v-on:click="changeToSlide(2)"></span>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name:'SlideShowReview',
  components:{Card},
  data(){
    return{
      actualSlideShowed:0,
      sizeListReviews:3,
      listReviews:[
        {review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.",
        UserNameReviews:"Unknown user 1",
        id:0,
        notVisibility:false
        },
        {review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit.",
        UserNameReviews:"Unknown user 2",
        id:1,
        notVisibility:true
        },
        {review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.",
        UserNameReviews:"Unknown user 3",
        id:2,
        notVisibility:true
        }
      ],
    }
  },
  methods:{
    nextSlide(){
      if(this.actualSlideShowed == this.sizeListReviews-1){
        this.actualSlideShowed = 0;
        this.listReviews[this.sizeListReviews-1].notVisibility = true;
        this.listReviews[0].notVisibility = false;
      }
      else{
        this.listReviews[this.actualSlideShowed].notVisibility = true;
        this.actualSlideShowed++;
        this.listReviews[this.actualSlideShowed].notVisibility = false;
      }
    },
    previousSlide(){
      if(this.actualSlideShowed == 0){
        this.listReviews[0].notVisibility = true;
        this.actualSlideShowed = this.sizeListReviews - 1;
        this.listReviews[this.actualSlideShowed].notVisibility = false;
      }
      else{
        this.listReviews[this.actualSlideShowed].notVisibility = true;
        this.actualSlideShowed--;
        this.listReviews[this.actualSlideShowed].notVisibility = false;
      }
    },
    hideAllSlides(){
      this.listReviews.forEach((el)=>{
        el.notVisibility=true;
      });
    },
    changeToSlide(actualChooseToShow){
      this.listReviews[this.actualSlideShowed].notVisibility = true;
      this.actualSlideShowed = actualChooseToShow;
      this.listReviews[actualChooseToShow].notVisibility=false;
    }
  }
}
</script>

<style lang='scss'>
  @import '../style/_configs.scss' ,'../style/_modulos.scss';
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .hidden-element{
    display:none;
  }
  .visible-element{
    display:block;
  }
  .main-reviews-container-slide-reviews{
    @include positioning-element-flex(center,center);
    display:grid;
    grid-template-columns: .1fr auto .1fr;
    grid-template-rows:1fr .1fr;
    align-items: center;
    justify-items: center;
    button{
      font-size: 2.2rem;
      padding-bottom:0.1rem;
      border:none;
      color:rgb(54, 52, 52);
      background-color:inherit;
      outline:none;
    }
    button:hover{
      color:rgb(100, 100, 100);
    }
    &-card-area{
      grid-column-start:2;
      grid-row-start:1; 
    }
    &-options-cards{
      grid-column-start:2;
      grid-row-start:2;
      position:relative;
      height:30px;
      width:100px;
      display: flex;
      flex-direction: row;
      flex:1 1 1;
      justify-content: space-around;
      align-items: center;
      &-link-dot{
        border-radius:50%;
        width:1.2rem;
        height:1.2rem;
        background-color: rgb(90, 90, 90);
      }
      &-link-dot:hover{
        background-color: rgb(216, 216, 216);
      }
    }
  }
</style>