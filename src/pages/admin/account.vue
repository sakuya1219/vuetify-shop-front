<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">會員管理</h1>
      </v-col>
      <v-col cols="12">
        <v-data-table :items="items" :headers="headers">
          <template #[`item.role`]="{ item }">
            {{ formatRole(item.role) }}
          </template>
          <template #[`item.action`]="{ item }">
            <v-btn icon="mdi-delete" variant="text" color="red" @click="deleteAccount(item._id)"></v-btn>
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
    title: '貓咪酒吧 | 會員管理',
    login: true,
    admin: true,
    layout: 'admin'  // 使用 admin 布局
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const items = ref([])
const headers = [
  { title: '帳號', key: 'account' },
  { title: '身分組', key: 'role' },
  { title: '電子郵件', key: 'email' },
  { title: '刪除', key: 'action', sortable: false }
]

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get('/account')
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

const deleteAccount = async (id) => {
  try {
    await apiAuth.delete(`/account/${id}`)
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

const formatRole = (role) => {
  return role === 1 ? '管理員' : '會員';
}

loadItems()
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
