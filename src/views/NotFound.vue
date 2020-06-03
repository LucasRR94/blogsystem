<template>
  <div class="main-not-Found">
    <header>
      <LogoComponent/>
    </header>
    <main>
      <p>Sorry, This Page does not Exist 404 error.</p>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import LogoComponent from '../components/LogoComponent.vue'
export default {
  name:'NotFound',
  components:{FooterComponent,LogoComponent}
  
}
</script>

<style lang='scss'>
  html,*,body{
    margin: 0 0;
    padding: 0 0;
    box-sizing:border-box;
  }
  .main-not-Found{
    width:100vw;
    height:100vh;
    grid:auto;
    display:grid;
    justify-content:center;
    align-content:space-arround;
    header{
      width:100vw;
      height:30vh;
      .main-logo{
        margin:.5rem .5rem;
      }
    }
    main{
      width:100vw;
      height:50vh;
      font-size:2rem;
      color:rgb(139, 139, 139);
      p{
        padding:1rem 1rem;
    
      }
    }
    footer{
      width:100vw;
      height:10vh;
    }
  }
</style>