<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">站檯小貓</h1>
      </v-col>

      <v-col cols="12" class="d-flex justify-center mb-4">
        <v-btn
          v-for="filter in filters"
          :key="filter.value"
          :color="status.value === filter.value ? 'primary' : 'secondary'"
          @click="setStatus(filter.value)"
          class="mx-2"
        >
          {{ filter.text }}
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="3"
        v-for="product in displayedProducts"
        :key="product._id"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-col>

      <v-col cols="12">
        <v-pagination
          v-model="page"
          :length="pages"
          rounded="circle"
          @update:model-value="loadProducts"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

definePage({
  meta: {
    title: '貓咪酒吧 | 站檯小貓',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const createSnackbar = useSnackbar()

const page = ref(1)
const pages = ref(1)
const ITEMS_PER_PAGE = 12

const products = ref([])
const status = ref('')

const filters = [
  { text: '所有貓', value: '' },
  { text: '發呆中', value: 'adoptable' },
  { text: '忙碌中', value: 'notAdoptable' }
]

const setStatus = (newStatus) => {
  status.value = newStatus
  page.value = 1
  loadProducts()
}

const filteredProducts = computed(() => {
  let filtered = products.value
  if (status.value === 'adoptable') {
    filtered = products.value.filter(product => product.adoptable)
  } else if (status.value === 'notAdoptable') {
    filtered = products.value.filter(product => !product.adoptable)
  }
  return filtered
})

const displayedProducts = computed(() => {
  const start = (page.value - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  return filteredProducts.value.slice(start, end)
})

const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: 1000,
        page: 1
      }
    })
    products.value = data.result.data
    pages.value = Math.ceil(filteredProducts.value.length / ITEMS_PER_PAGE)
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

loadProducts()
</script>
