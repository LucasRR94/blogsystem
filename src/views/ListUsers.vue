<template>
  <div class="main">
    <header>
      <div class="area-logo">
        <LogoComponent/>
      </div>
    </header>
    <main> 
      <div class="area-search">
        <BtnListUsers/>
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
import BtnListUsers from '../components/BtnListUsers.vue'
import LoadAndSearchUsers from '../components/LoadAndSearchUsers.vue'
export default {
  name: 'ListUsers',
  data(){
    return{
      searchQuery:''
    }
  },
  components: {LoadAndSearchUsers,BtnListUsers,SearchUserArea,LogoComponent,FooterComponent},
  methods:{
    updateQuery(newQuery){
      this.searchQuery = newQuery;
    }
  }
}
</script>

<style>
  .main{
    width:100vw;
    height:100vh;
  }
</style>