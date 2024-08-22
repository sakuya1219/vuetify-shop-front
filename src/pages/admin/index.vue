<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">管理介面</h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item to="/admin/products">
              <v-list-item-icon>
                <v-icon>mdi-cat</v-icon>
              </v-list-item-icon>
              <v-list-item-content>管理貓咪</v-list-item-content>
            </v-list-item>
            <v-list-item to="/admin/reservations">
              <v-list-item-icon>
                <v-icon>mdi-calendar-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content>管理預約</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '管理介面',
    login: true,
    admin: true
  }
})
</script>
