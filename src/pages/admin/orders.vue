<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">預約管理</h1>
      </v-col>
      <v-col cols="12">
        <v-data-table :items="items" :headers="headers">
          <template #[`item.timeSlot`]="data">
            {{ formatDate(data.item.date) }} {{ data.item.timeSlot }}
          </template>
          <template #[`item.numPeople`]="data">
            {{ data.item.numPeople }} 人
          </template>
          <template #[`item.createdAt`]="data">
            {{ formatDate(data.item.createdAt) }}
          </template>
          <template #[`item.action`]="{ item }">
            <v-btn icon="mdi-delete" variant="text" color="red" @click="deleteReservation(item._id)"></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '貓咪酒吧 | 預約管理',
    login: true,
    admin: true,
    layout: 'admin'  // 使用 admin 布局
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const items = ref([])
const headers = [
  { title: '編號', key: '_id' },
  { title: '帳號', key: 'user.account' },
  {
    title: '日期與時段',
    key: 'timeSlot',
    value: (item) => `${formatDate(item.date)} ${item.timeSlot}`
  },
  {
    title: '人數',
    key: 'numPeople',
    value: (item) => `${item.numPeople} 人`
  },
  {
    title: '創建日期',
    key: 'createdAt',
    value: (item) => formatDate(item.createdAt)
  },
  { title: '操作', key: 'action', sortable: false }
]

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get('/order/all')
    items.value.splice(0, items.value.length, ...data.result)
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
loadItems()

const deleteReservation = async (id) => {
  try {
    await apiAuth.delete(`/order/${id}`)
    createSnackbar({
      text: '刪除成功',
      snackbarProps: {
        color: 'green'
      }
    })
    loadItems()  // 刷新列表
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '刪除失敗',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}

// 日期格式化函數
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toISOString().split('T')[0]  // 只顯示日期部分
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
