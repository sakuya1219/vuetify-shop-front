<template>
  <v-container class="product-container">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ product.name }}</h1>
      </v-col>

      <v-col cols="12">
        <v-img :src="product.image" class="product-image" alt="Product Image"></v-img>
      </v-col>

      <v-col cols="12" class="product-details">
        <p><strong>年齡:</strong> {{ product.age }} 歲</p>
        <p><strong>品種:</strong> {{ product.breed }}</p>
        <hr>
        <p>{{ product.description }}</p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Overlay 當貓咪不可預約時顯示 -->
  <v-overlay
    class="align-center justify-center text-center"
    :model-value="!product.adoptable"
    persistent
  >
    <v-card class="overlay-card">
      <v-card-title class="overlay-title">已經有人點人家囉~!</v-card-title>
      <v-card-actions>
        <v-btn color="#ffffff" to="/product">返回點檯小貓</v-btn>
        <v-btn color="#ff0000" to="/">返回首頁</v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

definePage({
  meta: {
    title: '貓咪酒吧 | 貓咪資訊',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const route = useRoute()
const createSnackbar = useSnackbar()

const product = ref({
  _id: '',
  name: '',
  age: 0,
  description: '',
  image: '',
  adoptable: true,
  breed: ''
})

const load = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    document.title = '貓咪酒吧 | ' + product.value.name
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
load()
</script>

<style scoped>
.product-container {
  background-color: #333333;
  padding: 20px;
  border-radius: 8px;
}

.product-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.product-details {
  background-color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-details p {
  margin: 10px 0;
}

.overlay-card {
  padding: 20px;
  max-width: 300px;
  background-color: #333333;
  border-radius: 8px;
}

.overlay-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.overlay-card v-btn {
  margin-bottom: 10px;
  width: 100%;
}
</style>
