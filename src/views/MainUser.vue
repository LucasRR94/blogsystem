<template>
  <div class="main-user">
    <header>
      <div class="area-logo">
        <LogoComponent/>
      </div>
    </header>
    <main> 
      <div class="area-search">
        <SearchUserArea v-on:searchUser="updateQuery"/>
      </div>
      <div class="results-search">
        <LoadAndSearchUsers v-bind:querySearch="searchQuery"/>
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
import LoadAndSearchUsers from '../components/LoadAndSearchUsers.vue'

export default {
  name:'MainUser',
  data(){
    return{
      searchQuery:''
    }
  },
  components: {LoadAndSearchUsers,SearchUserArea,LogoComponent,FooterComponent},
  methods:{
    updateQuery(newQuery){
      this.searchQuery = newQuery;
    }
  }
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
    //grid-template-rows:2fr 2.5fr 1fr;
    grid-template-rows:auto;
    justify-content: center;
    align-content: space-between;
    width:100vw;
    height:100vh;
    header {
      width:100vw;
      height:auto;
      .area-logo{
        margin:0.5rem;
      }
    }
    main{
      width:100vw;
      height:auto;
      @include positioning-two-elements-flex-midle(column);
      .area-search {
        width:100vw;
        height:auto;
      } 
      .results-search{
        width:100vw;
        height:auto;
      }
    }
    footer{
      margin-top:.5rem;
      align-self:end;
      width:100vw;
      height:auto;
    }
  }
</style>