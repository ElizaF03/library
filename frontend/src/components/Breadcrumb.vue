<script setup>

</script>

<template>
  <div class="crumbs">
    <div class="crumbs__wrapper">
      <div class="crumbs__container container">
        <div class="crumbs__item">
          <a href="#" class="crumbs__link crumbs__link_first">Каталог</a>
        </div>
        <div class="crumbs__item">
          <img src="../assets/img/icons/arrow03.svg" alt="">
        </div>
        <div class="crumbs__item">
          <a href="#" class="crumbs__link">Художественная литература</a>
        </div>
        <div class="crumbs__item">
          <img src="../assets/img/icons/arrow03.svg" alt="">
        </div>
        <div class="crumbs__item">
          <a href="#" class="crumbs__link">Фэнтези</a>
        </div>
        <div class="crumbs__item">
          <img src="../assets/img/icons/arrow03.svg" alt="">
        </div>
        <div class="crumbs__item">
          <span>Гарри Поттер и Принц-полукровка</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.crumbs{
  margin-top: 20px;
  &__wrapper{
    height: 50px;
  }
  &__container{
    gap: 10px;
    img{
      display: block;
    }
  }
  &__item{
    font-size: 22px;
    font-family: Nunito,serif;
    color:#1983AD;
  }
  &__link{
    color: #03487F;
    &:hover{
      text-decoration: underline;
    }
  }
  &__link_first{
    color: #062A46;
  }
}
</style>