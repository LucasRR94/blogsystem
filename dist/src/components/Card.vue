<template>
  <div class="template-card">
    <div class="main-card">
      <div class="main-review-text-box">
        <div class="main-review-text-box-paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Provident fugit doloremque omnis in ex harum, tenetur laborum a,
          quod nihil quasi. Similique ea quae autem iusto commodi repellat 
          rem incidunt.</p>
        </div>
      </div>
      <div class="container-picture-box">
        <div class="container-picture-box-picture">
          <img v-bind:src="require(`../assets/${picturePath}`)" alt="picture-user">
        </div>
        <div class="container-picture-box-title">
          <p>Unknown user</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    picturePath:{
      type: String,
      default:"pictureUnknown.svg"
    }
  },
  data() {
    return{
      pathImg:"./assets/pictureUnknown.svg"
    }
  },
  methods: {
    getCurrentPicture(){
      return "assets/pictureUnknown.png";
    }
  }
}
</script>

<style lang="scss">
  .template-card{
    width:auto;
    height:auto;
    .main-card{
      border-radius:0.6rem;
      background: #cfcfcf;
      width:auto;
      height:auto;
      display:flex;
      flex-direction: row;
      .main-review-text-box{
        flex:0.7;
        display:grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-content: center;
        margin:0.5rem;
        &-paragraph{
          font-size:1rem;
          padding:0.5rem 0.5rem;
          background: white;
          border-radius: 0.8rem;
          width:30vw;
          height:20vh;
          color:black;
        }
      }
      .container-picture-box{
        flex:0.3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:0.5rem;
        &-picture{
          flex:0.6;
          padding:0.5rem 0.5rem;
          img{
            height:7rem;
            width:7rem;
            border-radius: 5.0rem;
            
          } 
        }
        &-title{
          flex:0.4;
          p{
            padding:0.3rem 0.3rem;
            background:white;
            color:black;
            border-radius: 0.6rem;
            font-size: auto;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>