<template>
  <v-container class="reservation-container">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-4">預約</h1>
        <v-btn-toggle
          v-model="activeTab"
          class="d-flex justify-center mb-6"
          color="primary"
          mandatory
        >
          <v-btn value="reservationForm" class="text-uppercase">預約時段</v-btn>
          <v-btn value="reservationHistory" class="text-uppercase">預約紀錄</v-btn>
        </v-btn-toggle>
      </v-col>

      <!-- 預約時段 -->
      <v-col cols="12" v-if="activeTab === 'reservationForm'">
        <v-card class="pa-6">
          <v-form @submit.prevent="submitReservation">
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <v-date-picker
                  v-model="selectedDate"
                  :min="minDate"
                  is-expanded
                  :first-day-of-week="1"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" class="d-flex justify-center">
                <v-select
                  v-model="timeSlot"
                  :items="availableTimeSlots"
                  label="選擇時間段"
                  :disabled="!selectedDate"
                />
              </v-col>
              <v-col cols="12" md="6" class="d-flex justify-center">
                <v-select
                  v-model="numPeople"
                  :items="[1, 2, 3, 4]"
                  label="選擇人數"
                  :disabled="!timeSlot"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="d-flex justify-center">
                <v-btn
                  type="submit"
                  color="green"
                  :loading="isSubmitting"
                  block
                  class="text-uppercase"
                >
                  提交預約
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <!-- 預約紀錄 -->
      <v-col cols="12" v-if="activeTab === 'reservationHistory'">
        <v-card class="pa-4">
          <v-data-table
            :items="items"
            :headers="headers"
            class="elevation-1"
            hide-default-footer
          >
            <template #[`item.date`]="data">
              {{ formatDate(data.item.date) }}
            </template>
            <template #[`item.timeSlot`]="data">
              {{ data.item.timeSlot }}
            </template>
            <template #[`item.numPeople`]="data">
              {{ data.item.numPeople }}
            </template>
            <template #[`item.createdAt`]="data">
              {{ formatDate(data.item.createdAt) }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { definePage } from 'vue-router/auto'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'

definePage({
  meta: {
    title: '貓咪酒吧 | 預約',
    login: true
  }
})

const createSnackbar = useSnackbar()
const { apiAuth } = useApi()

const selectedDate = ref(null)
const timeSlot = ref(null)
const numPeople = ref(1)
const isSubmitting = ref(false)
const minDate = ref(new Date())

const availableTimeSlots = [
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
  '19:00 - 21:00',
  '21:00 - 23:00'
]

const activeTab = ref('reservationForm')

const items = ref([])
const headers = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '時段',
    key: 'timeSlot'
  },
  {
    title: '預約人數',
    key: 'numPeople'
  },
  {
    title: '創建日期',
    key: 'createdAt'
  }
]

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get('/order')
    items.value.splice(0, items.value.length, ...data.result)
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

const submitReservation = async () => {
  if (!selectedDate.value || !timeSlot.value || !numPeople.value) {
    createSnackbar({
      text: '請選擇日期、時間段和人數',
      snackbarProps: {
        color: 'red'
      }
    })
    return
  }

  isSubmitting.value = true

  try {
    await apiAuth.post('/order', {
      date: selectedDate.value,
      timeSlot: timeSlot.value,
      numPeople: numPeople.value
    })

    createSnackbar({
      text: '預約成功',
      snackbarProps: {
        color: 'green'
      }
    })

    activeTab.value = 'reservationHistory'
    loadItems()
  } catch (error) {
    console.error(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  } finally {
    isSubmitting.value = false
  }
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' })
}

onMounted(() => {
  loadItems()
})
</script>
