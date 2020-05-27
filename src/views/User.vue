<template>
  <div class="main-user">
    <header>
      <LogoComponent/>
    </header>
    <main>
      <div class="area">
        <SearchUserArea/>
      </div>
    </main>
    <aside></aside>
    <footer></footer>
  </div>  
</template>

<script>
import LogoComponent from '../components/LogoComponent.vue'
import ProfileArea from '../components/ProfileArea.vue'

export default {
  name:'User',
  components: {LogoComponent,ProfileArea}
}
</script>

<style>

</style>