import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminStore = defineStore('admin', {
  state: () => ({}),
  actions: {
    async getCats () {
      const response = await axios.get('/api/admin/cats')
      return response.data
    },
    async toggleCatStatus (catId) {
      await axios.patch(`/api/admin/cats/${catId}`)
    },
    async getReservations () {
      const response = await axios.get('/api/admin/reservations')
      return response.data
    },
    async deleteReservation (reservationId) {
      await axios.delete(`/api/admin/reservations/${reservationId}`)
    }
  }
})
