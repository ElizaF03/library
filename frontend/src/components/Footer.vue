<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__info">
        <div class="footer__column">
          <div class="footer__contacts">
            <div class="contacts-footer__contact">
              <div class="contacts-footer__title">
                <h4>Контакты</h4>
              </div>
              <div class="contacts-footer__item">
                <div class="item-footer__img">
                  <img src="../assets/img/icons/phone.svg" alt="">
                </div>
                <div class="item-footer__info">
                  <a href="tel:+95436503456">+ 9 (543) 650-34-56</a>
                </div>

              </div>
              <div class="contacts-footer__item">
                <div class="item-footer__img">
                  <img src="../assets/img/icons/phone.svg" alt="">
                </div>
                <div class="item-footer__info">
                  <a href="tel:+95436503457">+ 9 (543) 650-34-57</a>
                </div>

              </div>
              <div class="contacts-footer__item">
                <div class="item-footer__img">
                  <img src="../assets/img/icons/email.svg" alt="">
                </div>
                <div class="item-footer__info">
                  <a href="mailto:library@library.ru">library@library.ru</a>
                </div>

              </div>
            </div>
            <div class="contacts-footer__address">
              <div class="contacts-footer__title">
                <h4>Адрес</h4>
              </div>
              <div class="contacts-footer__item">
                <div class="item-footer__img">
                  <img src="../assets/img/icons/address.svg" alt="">
                </div>
                <div class="item-footer__info">
                  <a href="https://yandex.ru/maps/?text=улица%20Карла-Маркса%2C%2017" target="_blank" class="map-link">улица
                    Карла-Маркса, 17</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__column footer__column_right">
          <div class="contacts-footer__title">
            <h4>Часы работы</h4>
          </div>
          <div class="contacts-footer__item">
            <div class="item-footer__img">
              <img src="../assets/img/icons/clock.svg" alt="">
            </div>
            <div class="item-footer__info">
              <span>10:00-20:00 - ПОНЕДЕЛЬНИК, СРЕДА, ЧЕТВЕРГ</span>
            </div>

          </div>
          <div class="contacts-footer__item">
            <div class="item-footer__img">
              <img src="../assets/img/icons/clock.svg" alt="">
            </div>
            <div class="item-footer__info">
              <span>09:00-19:00 - ВТОРНИК, ПЯТНИЦА</span>
            </div>

          </div>
          <div class="contacts-footer__item">
            <div class="item-footer__img">
              <img src="../assets/img/icons/clock.svg" alt="">
            </div>
            <div class="item-footer__info">
              <span>10:00-18:00 - ВОСКРЕСЕНЬЕ</span>
            </div>

          </div>
          <div class="contacts-footer__item">
            <div class="item-footer__img">
              <img src="../assets/img/icons/clock.svg" alt="">
            </div>
            <div class="item-footer__info">
              <span>ВЫХОДНОЙ - СУББОТА</span>
            </div>

          </div>
        </div>
      </div>
      <div class="footer__title">
        © Муниципальное бюджетное учреждение культуры «Централизованная библиотечная система», 2023-2025
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: linear-gradient(to right,
      rgba(40, 132, 173, 0.55) 6%,
      rgba(77, 192, 219, 0.55) 13%,
      rgba(22, 144, 175, 0.55) 25%,
      rgba(22, 144, 175, 0.55) 38%,
      rgba(40, 174, 184, 0.55) 50%,
      rgba(23, 140, 146, 0.55) 63%,
      rgba(23, 140, 146, 0.55) 75%,
      rgba(112, 218, 213, 0.55) 88%,
      rgba(71, 249, 238, 0.55) 100%
  ), url("../assets/img/background2.jpg");
  padding: 50px 0;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  &__info {
    display: flex;
    align-items: start;
  }

  &__column {
    color: #ffffff;
    display: flex;
    width: 720px;

    &_right {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 10px;
    }
  }

  &__contacts {
    display: flex;
    justify-content: start;
    gap: 30px;
  }

  &__title {
    width: 100%;
    font-family: Nunito, serif;
    font-size: 18px;
    color: #ffffff;
    margin-top: 63px;
    text-align: center;
  }
}

.contacts-footer {
  color: #ffffff;

  &__title {
    font-family: Alegreya, serif;
    font-size: 22px;
    color: #ffffff;
  }

  &__contact {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
  }

  &__address {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;

  }

  &__item {
    display: flex;
    align-items: center;
  }
}

.item-footer {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__img {
    width: 23px;
    height: 23px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: inline-block;
    color: #ffffff;
    font-family: Nunito, serif;
    font-size: 18px;

    a {
      color: #ffffff;
      font-family: Nunito, serif;
      font-size: 18px;
    }

    span {

    }
  }
}
</style>