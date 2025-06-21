<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'; // Импортируем компоненты Swiper и SwiperSlide
import 'swiper/swiper-bundle.css'; // Подключаем стили для Swiper
// Явный импорт только тех изображений, которые нужны
import image1 from '../assets/img/books/potter.jpg';
import image2 from '../assets/img/books/80.jpg';
import image3 from '../assets/img/books/cat.jpg';
import image4 from '../assets/img/books/bird.jpg';
import image5 from '../assets/img/books/bakuman.webp';
import image6 from '../assets/img/books/dorian.jpg';
import image7 from '../assets/img/books/free.jpg';
import image8 from '../assets/img/books/iden.jpg';
import image9 from '../assets/img/books/graf.jpg';
import image10 from '../assets/img/books/psy.webp';
</script>

<template>
  <section class="new-books">
    <div class="new-books__wrapper">
      <div class="new-books__container container">
        <h3 class="name-section">Новые книги</h3>
        <Swiper
            :slides-per-view="7"
            :loop="true"
            :autoplay="{ delay: 250, disableOnInteraction: false }"
            :space-between="15"
        >
          <swiper-slide><a href="#"><img :src="image1" alt="Книга 1"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image2" alt="Книга 2"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image3" alt="Книга 3"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image4" alt="Книга 4"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image5" alt="Книга 5"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image6" alt="Книга 6"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image7" alt="Книга 7"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image8" alt="Книга 8"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image9" alt="Книга 9"/></a></swiper-slide>
          <swiper-slide><a href="#"><img :src="image10" alt="Книга 10"/></a></swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.new-books__container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.swiper {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  width: 195px;
  height: 300px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

</style>
