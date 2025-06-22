<script setup>

</script>

<template>
  <div class="author-body__container container">
    <div class="author-body__column">
      <div class="author-body__img">
        <img src="../assets/img/authors/rowling.jpg" alt="">
      </div>
    </div>
    <div class="author-body__column">
      <div class="author-body__row">
        <div class="row-author__name">
          Джоан Кэ́тлин Роулинг (англ. Joanne Kathleen Rowling)
        </div>
      </div>
      <div class="author-body__row">
        <div class="row-author__item">
          Дата рождения
        </div>
        <div class="row-author__item_info">
          31 июля 1965
        </div>
      </div>
      <div class="author-body__row">
        <div class="row-author__item">
          Место рождения
        </div>
        <div class="row-author__item_info">
          Йейт, Бристоль, Англия
        </div>
      </div>
      <div class="author-body__row">
        <div class="row-author__item">
          Гражданство
        </div>
        <div class="row-author__item_info">
          Великобритания
        </div>
      </div>
      <div class="author-body__row">
        <div class="row-author__info">
          Джоан Кэтлин Роулинг – одна из самых известных писательниц современности, подарившая миру серию книг о юном
          волшебнике Гарри Поттере и его друзьях. Оказавшись на самом дне, без копейки в кармане и с маленькой дочерью
          на руках, она сумела преодолеть все жизненные трудности и стать одной из самых и успешных женщин на планете.
          Сейчас у нее есть возможность не только радовать читателей своим творчеством, но и помогать больным и
          обездоленным людям, остро нуждающимся в финансовой и моральной поддержке.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.author-body{
&__container{
  margin-top: 30px;
  display: flex;
  align-items: start;
  gap: 30px;
}
  &__column{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Ledger, serif;
    font-size: 22px;
    color: #062A46;
  }
  &__img{
    height: 640px;
    width: 470px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
.row-author{
  &__item_info{
    color: #03487F;
  }
  &__info{
    font-family: Nunito, serif;
    line-height: 130%;
    font-size: 22px;
    color: #062A46;
  }
}
</style>