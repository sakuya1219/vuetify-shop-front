<template>
  <v-container class="swiper-container" fluid>
    <v-row>
      <v-col cols="12">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="../assets/cat/menuTitle.png" alt="Slide 1" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/cat/menu01.png" alt="Slide 2" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/cat/menu03.png" alt="Slide 3" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/cat/menu02.png" alt="Slide 4" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/cat/menu03.png" alt="Slide 5" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/cat/menuFooter.png" alt="Slide 6" class="swiper-image">
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// Import required modules
import { EffectCards } from 'swiper/modules'

const modules = [EffectCards]
</script>

<style scoped>
.swiper-container {
  background-image: url('../assets/cat/banner05.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mySwiper {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: auto;
  background-color: transparent; /* 去掉背景的黑影 */
}

.swiper-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* 确保图片覆盖区域并保持纵横比 */
}

@media (max-width: 600px) {
  .mySwiper {
    max-width: 100%;
    height: auto; /* 为手机屏幕调整高度 */
  }
}
</style>
