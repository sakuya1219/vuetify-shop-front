<template>
  <v-card @click="goToProductDetails" class="hover-card">
    <v-img :src="image" class="full-image"></v-img>
    <div class="overlay">
      <v-card-title class="title-center">
        {{ name }}
      </v-card-title>
      <v-card-subtitle class="subtitle-center">
        {{ age }} 歲
      </v-card-subtitle>
      <v-card-text class="text-center">
        {{ breed }}
        <br />
        <span :class="adoptable ? 'status-green' : 'status-red'">
          <v-icon :color="adoptable ? 'green' : 'red'" small>mdi-cat</v-icon>
          &nbsp;
          {{ adoptable ? '閒置中' : '上工中' }}
        </span>
      </v-card-text>
      <v-card-text class="description">
        {{ description }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  _id: String,
  image: String,
  name: String,
  age: Number,
  description: String,
  adoptable: Boolean,
  breed: String
});

const goToProductDetails = () => {
  router.push(`/products/${props._id}`);
};
</script>

<style scoped>
.hover-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 500px;
  width: 100%;
  max-width: 400px;
  margin: auto;
}

.full-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%; /* 覆蓋下方 25% */
  background-color: rgba(0, 0, 0, 0.7); /* 黑色背景，70%透明度 */
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-center,
.subtitle-center,
.text-center {
  text-align: center;
  margin: 0; /* 移除默认的 margin */
  padding: 2px 0; /* 增加一些 padding 确保内容不挤在一起 */
}

.status-green,
.status-red {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
}
</style>
