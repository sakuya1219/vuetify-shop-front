<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=1" alt="Slide 1" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=2" alt="Slide 2" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=3" alt="Slide 3" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=4" alt="Slide 4" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=5" alt="Slide 5" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=6" alt="Slide 6" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=7" alt="Slide 7" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=8" alt="Slide 8" class="swiper-image">
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/600/900?random=9" alt="Slide 9" class="swiper-image">
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
.mySwiper {
  width: 100%;
  max-width: 600px; /* Adjust for larger screens */
  height: auto;
  margin: auto;
}

.swiper-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the image covers the area while preserving aspect ratio */
}

@media (max-width: 600px) {
  .mySwiper {
    max-width: 100%;
    height: auto; /* Adjust the height for mobile screens */
  }
}
</style>
