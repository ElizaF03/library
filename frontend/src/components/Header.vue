<script setup>
import {ref} from 'vue'
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__column">
          <div class="header__logo">
            <a href="/index" class="logo"><img src="../assets/img/logoLibraryBlue%202.svg" alt=""></a>
          </div>
        </div>
        <div class="header__column header__column_right">
          <ul class="header__navigate-list">
            <li class="navigate-header__item">
              <a href="/index" class="navigate-header__link">
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


</style>