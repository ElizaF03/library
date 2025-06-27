<script setup>
import ItemByBook from "./ItemByBook.vue";
</script>

<template>
<div class="books-by-author">
  <div class="books-by-author__container container">
    <h3 class="name-section">Книги</h3>
    <div class="books-by-author__body">
<ul class="books-by-author__list">
  <ItemByBook/>
</ul>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
.books-by-author{
  &__container{
    flex-direction: column;
    margin-top: 30px;
  }
  &__list{
display: flex;
    flex-direction: column;
    gap: 70px;
  }
}
</style>