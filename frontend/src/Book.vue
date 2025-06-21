<script setup>
import Header from './components/Header.vue';
import Breadcrumb from "./components/Breadcrumb.vue";
import BookBody from "./components/BookBody.vue";
import NewBooks from "./components/NewBooks.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header/>
  <div class="main">
    <Breadcrumb/>
    <BookBody/>
    <NewBooks/>
  </div>
  <Footer/>
</template>

<style scoped>


</style>
