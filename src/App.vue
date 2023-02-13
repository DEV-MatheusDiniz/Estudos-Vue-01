<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar menu">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>

        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo do vue.js">
        </section>

        <section class="navbar-section">
          <a href="https://www.linkedin.com/in/matheus-diniz-941935187/" class="btn btn-link">Linkedin</a>
          <a href="https://github.com/DEV-MatheusDiniz" class="btn btn-link">GitHub</a>
        </section>
      </header>


      <router-view class="pt-2" />
    </div>
  </div>
</template>


<style scoped>
.img-logo {
  max-width: 40px;
}
</style>
