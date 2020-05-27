<template>
  <div class="main-user">
    <header>
      <div class="area-logo">
        <LogoComponent/>
      </div>
    </header>
    <main> 
      <div class="area-search">
        <SearchUserArea/>
      </div>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>  
</template>

<script>
import LogoComponent from '../components/LogoComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import SearchUserArea from '../components/SearchUserArea.vue'


export default {
  name:'MainUser',
  components: {SearchUserArea,LogoComponent,FooterComponent}
}
</script>

<style lang="scss">
  @import '../style/modulos.scss';
  html,*,body{
    padding: 0 0;
    margin: 0 0;
    box-sizing:border-box;
  }
  .main-user{
    display:grid;
    grid-template-rows: 1f 3fr 1fr;
    justify-content: center;
    align-content: center;
    width:100vw;
    height:100vh;
    header {
      width:100vw;
      height:20vh;
      .area-logo{
        margin:0.5rem;
      }
    }
    main{
      width:100vw;
      height:60vh;
      @include center-div;  
      
    }
    footer{
      margin-top:.5rem;
      align-self:end;
      width:100vw;
      height:15vh;
    }
  }
</style>