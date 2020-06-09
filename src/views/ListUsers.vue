<template>
  <div class="list-users">
    <header>
      <div class="area-logo">
        <LogoComponent/>
      </div>
    </header>
    <main> 
      <div class="list-btn">
        <BtnListUsers v-on:requestedList="genList"/>
      </div>
      <div class="list-search">
        <MountListUsers v-bind:searchRequested="searchRequested"/>
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
import BtnListUsers from '../components/BtnListUsers.vue'
import MountListUsers from '../components/MountListUsers.vue'

export default {
  name: 'ListUsers',
  props:{},
  data(){
    return{
      searchQuery:'',
      searchRequested:false
    }
  },
  components: {MountListUsers,BtnListUsers,LogoComponent,FooterComponent},
  methods:{
    updateQuery(newQuery){
      this.searchQuery = newQuery;
    },
    genList(){
      this.searchRequested = true;
    }
  }
}
</script>

<style lang='scss'>
@import '../style/modulos.scss';
  html,*,body{
    padding: 0 0;
    margin: 0 0;
    box-sizing:border-box;
  }
  body{
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
  }
  .list-users{
    flex:1;
    display:grid;
    grid-template-rows:auto;
    justify-content: center;
    width:100vw;
    height:auto;
    header {
      align-self:start;
      width:100vw;
      height:auto;
      min-height:100px;
      .area-logo{
        margin:0.5rem;
      }
    }
    main{
      align-self:center;
      width:100vw;
      height:auto;
      display:grid;
      grid-template-rows:.1fr 1.9fr;
      justify-content: center;
      align-content: center;
      .list-btn{
        width:100vw;
        height:auto;
        min-height:100px
      } 
      .list-search{
        width:100vw;
        height:auto;
        min-height:350px;
      }
    }
    footer{
      margin-top:.5rem;
      align-self:end;
      width:100vw;
      height:auto;
      min-height: 50px;
      
    }
  }
</style>