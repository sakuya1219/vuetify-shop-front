<template>
  <v-container>
    <v-col cols="12">
      <h1 class="text-center">{{ product.name }}</h1>
    </v-col>
    <v-col cols="12">
      <v-img :src="product.image" height="200"></v-img>
    </v-col>
    <v-col cols="12">
      <p>{{ product.age }} 歲</p>
      <p>品種: {{ product.breed }}</p>
      <p>{{ product.description }}</p>
    </v-col>
  </v-container>
  <v-overlay
    class="align-center justify-center text-center"
    :model-value="!product.adoptable"
    persistent
  >
    <h1 class="text-center">已經有人點人家囉~!</h1>
    <br>
    <v-btn to="/product">返回點檯小貓</v-btn>
    <br>
    <br>
    <v-btn to="/">返回首頁</v-btn>

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
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.age = data.result.age
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.adoptable = data.result.adoptable
    product.value.breed = data.result.breed

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
