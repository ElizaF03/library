<script setup>
import {ref} from 'vue'
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__column">
          <div class="header__logo">
            <a href="#" class="logo"><img src="../assets/img/logoLibraryBlue%202.svg" alt=""></a>
          </div>
        </div>
        <div class="header__column header__column_right">
          <ul class="header__navigate-list">
            <li class="navigate-header__item">
              <a href="" class="navigate-header__link">
                Главная
              </a></li>
            <li class="navigate-header__item">
              <a href="" class="navigate-header__link">
                Каталог
              </a></li>
            <li class="navigate-header__item">
              <a href="" class="navigate-header__link">
                Контакты
              </a></li>
            <li class="navigate-header__item navigate-header__item_nolink cursor">
              <span class="navigate-header__link">
                График работы
              </span>
              <div class="navigate-header__time">
                <div class="navigate-header__title">
                  <h4>Часы работы</h4>
                </div>
                <div class="navigate-header__item_time">
                  <div class="navigate-header__img">
                    <img src="../assets/img/icons/clock.svg" alt="">
                  </div>
                  <div class="navigate-header__info">
                    <span>10:00-20:00 - ПОНЕДЕЛЬНИК, СРЕДА, ЧЕТВЕРГ</span>
                  </div>

                </div>
                <div class="navigate-header__item_time">
                  <div class="navigate-header__img">
                    <img src="../assets/img/icons/clock.svg" alt="">
                  </div>
                  <div class="navigate-header__info">
                    <span>10:00-18:00 - ВОСКРЕСЕНЬЕ</span>
                  </div>

                </div>
                <div class="navigate-header__item_time">
                  <div class="navigate-header__img">
                    <img src="../assets/img/icons/clock.svg" alt="">
                  </div>
                  <div class="navigate-header__info">
                    <span>09:00-19:00 - ВТОРНИК, ПЯТНИЦА</span>
                  </div>

                </div>
                <div class="navigate-header__item_time">
                  <div class="navigate-header__img">
                    <img src="../assets/img/icons/clock.svg" alt="">
                  </div>
                  <div class="navigate-header__info">
                    <span>10:00-18:00 - ВОСКРЕСЕНЬЕ</span>
                  </div>

                </div>
                <div class="navigate-header__item_time">
                  <div class="navigate-header__img">
                    <img src="../assets/img/icons/clock.svg" alt="">
                  </div>
                  <div class="navigate-header__info">
                    <span>ВЫХОДНОЙ - СУББОТА</span>
                  </div>

                </div>
              </div>
            </li>
          </ul>
          <div class="btn__lk">
            <a href="#" class="lk-link">
              Личный кабинет
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">

.header {
  background-color: #ffffff;
  width: 100%;

  &__wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }

  &__container {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
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
      ), url("../assets/img/background1.jpg");
    }
  }

  &__column {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  &__column_right {
    flex: 1;
    display: flex;
    justify-content: right;
  }

  &__logo img {
    width: 140px;
    height: 50px;

  }

  &__navigate-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  .btn__lk {
    margin-left: 70px;


    .lk-link {
      box-shadow: 0 2px 4px rgba(3,72,127,0.35) ;
      padding: 10px 15px;
      font-family: Ledger, serif;
      font-size: 18px;
      color: #ffffff;
      text-decoration: none;
      transition: background-color 0.3s;
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
      ), url("../assets/img/background1.jpg");

      &:hover {
        background: linear-gradient(to right, rgba(226, 193, 18, 0.55), rgba(226, 193, 18, 0.55)), url("../assets/img/background1.jpg");
      }
    }
  }

  .navigate-header {
    &__item {
      display: flex;
      gap: 15px;
      &_nolink{
        &:hover .navigate-header__time{
          top: 80px;
          z-index: 1;
        }
      }
      &_time{
        display: flex;
        align-items: start;
        margin-bottom: 10px;
      }
    }

    &__link {
      text-decoration: none;
      color: #03487F;
      transition: color 0.3s;
      font-size: 18px;
      font-family: Nunito, serif;

      &:hover {
        text-decoration: underline;
      }
    }

    &__time{
      position: absolute;
      width: 350px;
      z-index: 0;
      top: -1000px;
      left: 50%;
      transform: translateX(60%);
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
      padding: 20px 15px 5px 15px;
      box-shadow: 0 2px 4px rgba(3,72,127,0.35) ;
      transition: top 0.3s;
    }
    &__title{
      font-family: Alegreya, serif;
      font-size: 22px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    &__img {

      margin-right: 10px;
      img {
        width: 23px;
        height: 23px;
        object-fit: none;
        flex-shrink: 0;
      }
    }
    &__info{
      display: inline-block;
      color: #ffffff;
      font-family: Nunito, serif;
      font-size: 18px;
    }
  }
}
</style>