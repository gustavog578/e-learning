<template>
    <div>
  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div class="container">
              <router-link :to="{ name: 'Home' }" class="navbar-brand js-scroll-trigger">E-Learning</router-link><button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#portfolio">Sections</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><router-link :to="{ name: 'Activities' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Activities</router-link></li>                      
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#about">About us</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#contact">Contact</a></li>
                     <!--<form
                        id="app"
                        @submit="checkForm"
                        action="https://vuejs.org/"
                        method="post"
                        novalidate="true"
                        >   
                        <input v-model="usuario" placeholder="username">
                        <input v-model="password" placeholder="Password">

                     </form>-->
                      
                  </ul>
              </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
   data () {
    return {
      info: null
    }
  },
methods: {
    login(){

    }
}
}
</script>

<style scoped src="@/assets/css/styles.css">

</style>