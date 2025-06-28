<script setup>

</script>

<template>
  <section class="body">
    <div class="body__wrapper">
      <div class="body__container container">
        <div class="body__column">
          <div class="column-body__img">
            <img src="../assets/img/books/potter.jpg" alt="">
          </div>
        </div>
        <div class="body__column body__column_info">
          <div class="column-body__info">
            <div class="info__column">
              <div class="column-info__left">
                <div class="column-info__title">
                  Гарри Поттер и Принц-полукровка
                </div>
                <div class="column-info__author">
                  <a href="/author"> Дж. К. Роулинг</a>
                </div>
              </div>
              <div class="column-info__right">
                <p class="column-info__book-mark">
                  Добавить в закладки
                </p>
                <img src="../assets/img/icons/bookmark.svg" alt="">
              </div>
            </div>
            <div class="info__column">
              <div class="column-info__left">
                Год издания
              </div>
              <div class="column-info__right">
                2022
              </div>
            </div>
            <div class="info__column">
              <div class="column-info__left">
                Количество страниц
              </div>
              <div class="column-info__right">
                672
              </div>
            </div>
            <div class="info__column">
              <div class="column-info__left">
                Издательство
              </div>
              <div class="column-info__right">
                Махаон
              </div>
            </div>
            <div class="info__column">
              <div class="column-info__left">
                Тип обложки
              </div>
              <div class="column-info__right">
                Твердый переплет
              </div>
            </div>
            <div class="info__column">
              <div class="column-info__left">
                Возрастные ограничения
              </div>
              <div class="column-info__right">
                6+
              </div>
            </div>
            <div class="info__column">
              <p class="summary">
                Министерство магии терпит поражение за поражением в битвах с Волан-де-Мортом. Даже маглы страдают от
                второй войны - каждый день происходят катастрофы, причины которых никому не ведомы. Но и на войне жизнь
                продолжается. Гарри, Рон и Гермиона, как и все шестнадцатилетние, учатся, ходят на вечеринки и
                влюбляются. Однако опасность все ближе. Несмотря на все усилия Дамблдора по защите школы, в Хогвартсе
                происходят очень странные события. Омут памяти на этот раз откроет Гарри самую большую тайну Темного
                Лорда, и ради того, чтобы победить, Гарри вынужден пожертвовать самым дорогим... Какую сторону в этой
                войне примет загадочный Принц-полукровка?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.body__container {
  align-items: start;
  justify-content: space-between;
  gap: 30px;
  margin-top: 30px;
}

.column-body {
  &__img {
    height: 640px;
    width: 470px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    &__info {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

  }
}
.info__column{
  display: flex;
 justify-content: space-between;
  font-family: Ledger, serif;
  font-size: 20px;
  margin-bottom: 15px;
  color: #062A46;
  line-height: 130%;
}
.column-info{
  &__title{
    font-family: Alegreya, serif;
    font-size: 32px;
    line-height: 110%;
  }
  &__author{margin-top: 15px;
    a{
      color: #E2C112;
      &:hover{
        text-decoration: underline;
      }
    }


  }
  &__right{
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  &__book-mark{
    color: #E2C112;
    font-size: 18px;
display: flex;
    flex-shrink: 0;
    img{
      display: block;
      height: 55px;
      width: 30px;
    }
  }
}
.summary{
  font-family: Nunito, serif;
}
</style>