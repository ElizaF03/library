<script setup>
import Header from './components/Header.vue';
import Footer from "./components/Footer.vue";
import AuthorBody from "./components/AuthorBody.vue";
import BooksByAuthor from "./components/BooksByAuthor.vue";
</script>

<template>
  <Header/>
  <div class="main">
    <AuthorBody/>
    <BooksByAuthor/>
  </div>
  <Footer/>
</template>

<style scoped lang="scss">

</style>