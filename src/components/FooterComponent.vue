<template>
  <div class="main-footer">
    <div class="wrapper-content-footer">
      <router-link  to="/contact"><div class="page-contact"><p>Contact</p></div></router-link>
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
  </div>
</template>

<script>  
export default {
  name:'FooterComponent'
}
</script>

<style lang="scss">
  @import "../style/_configs.scss","../style/_modulos.scss";
  html,body,*{
    margin:0 0;
    padding:0 0;
    box-sizing: border-box;
  }
  .main-footer{
      grid-row-start:2;
      grid-row-end:3;
      width:100vw;
      height:16vh;
      background: rgb(153, 153, 153);
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top:0.8rem;
      .wrapper-content-footer{
        align-self: center;
        width:90vw;
        height:8vh;
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

</style>