<template>
  <div class='main-class'>
    <header>
      <div class="logo">
        <img src="../assets/logo.svg">
        <div class="title">
          <h1>MyPBlog</h1>
        </div>
      </div>
      <div class="link-sign-up">
        <div class="link-sign-up-container">
          <a href="###">Sign Up</a>
        </div>
      </div>
    </header>
    <main>
      <article class="main-reviews">
        <div class="main-reviews-container">
          <div class="main-reviews-container-title">
            <h2>Some reviews of our systems</h2>
            </div>
          <div class="main-reviews-slide-reviews">
            <Card/> 
            </div>
        </div>
      </article>
      <section class="section-sign-in">
        <form class="section-sign-in-form">
          <div>
            <h2>Join now</h2>
          </div>
          <div>
            <p>Join now, enjoy the experience of share thoughts with the world.</p>
          </div>
          <div>
            <input type="text" id="emailAdress" placeholder="Your email adress">
            <input type="text" id="yourPass" placeholder="Your password">
            <input type="Submit" value="Sign In">
          </div>
        </form>
      </section>
      
    </main>
    <footer>
      <article><h3>Contact us</h3></article>
      <article><p>Imgs</p></article>
    </footer>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name:'Homepage',
  components:{Card}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
$font-stack1: 'Raleway', sans-serif;
$font-stack2: 'Arial',sans-serif;  
  *,body,html{
    margin:0 0;
    padding:0 0;
    box-sizing:border-box;
  }
  .main-class{
    background:#ffffff;
    header{
      font-family:$font-stack1;
      background: rgb(235, 235, 241) url("https://source.unsplash.com/mk7D-4UCfmg/1600x900") no-repeat;
      background-size:cover;
      background-position:50% 90%;
      background-origin:border-box;
      display:grid;
      align-items: flex-start;
      height: 45vh;
      width: 100vw;
      grid-template-columns: 0.9fr 0.1fr;
      .logo{
        margin-left:0.7rem;
        margin-top:0.7rem;
        display: flex;
        flex-direction: row;
        img{
          width:5rem;
          height:5rem;
        }
        .title{
          font-weight: 100;
          color:#444444;
          display:flex;
          flex-direction:row;
          h1{
            justify-self: center;
            align-self: center;
          }
        }
      }
      .link-sign-up{
        margin-top:0.7rem;
        height:3rem;
        .link-sign-up-container{
          width: 8rem;
          height: 3rem;
          padding:1rem 1rem;
          background: black;
          box-shadow: 1px 4px 10px black;
          display: flex;
          border-radius:0.6rem;
          flex-direction:column;
          align-items: center;
          a{
            font-size:1.2rem;
            text-decoration:none;
            color:white;
            font-weight: bold;
          }
        }
      }
    }
    main{
      display:grid;
      width: 100vw;
      height:60vh;
      grid-template-columns: 1fr 1fr;
      font-family:$font-stack2;
      .section-sign-in {
        background:#512Da8;
        &-form{
          color:white;
        }
      }
      .main-reviews{
        display:flex;
        flex:1;
        align-content: center;
        justify-content: center;
        margin:0.4rem 0.4rem;
        &-container{
          background: #C2185B;
          display:grid;
          width: 46vw;
          height:60vh;
          border-radius: 0.6rem;
          grid-template-rows: 0.4fr 1fr;
          justify-content: center;
          align-self: center;
          &-title{
            display:flex;
            flex-direction: column;
            justify-content: center;
            width:auto;
            h2{
                align-self: center;
                color:#ffffff;
              }
          }
          &-reviews{
            background: white;
          }
        }
        
        
      }
    }
  }
</style>