<template>
  <!-- 手機版側欄 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer">
    <v-list nav>
      <!-- 回首頁按鈕 -->
      <v-list-item
        prepend-icon="mdi-home"
        to="/"
        title="回首頁"
      ></v-list-item>

      <template v-for="item in navItems" :key="item.to">
        <v-list-item
          :prepend-icon="item.icon"
          :to="item.to"
          :title="item.text"
          v-if="item.show"
        >
          <template #append>
            <v-badge
              color="error"
              :content="user.cart"
              v-if="item.to === '/cart' && user.cart > 0"
              inline
            ></v-badge>
          </template>
        </v-list-item>
      </template>
      <v-list-item
        prepend-icon="mdi-account-arrow-right"
        v-if="user.isLogin"
        title="登出"
        @click="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- 導覽列 -->
  <v-app-bar
    v-bind:class="{'transparent-bar': isHomePage, 'regular-bar': !isHomePage}"
    flat
    app
  >
    <v-container class="d-flex align-center justify-center">

      <v-btn to="/" :active="false" class="title-btn"><img src="../assets/sLogo.png" height="50px"></v-btn>

      <v-spacer />
      <template v-if="mobile">
        <!-- 手機版漢堡按鈕 -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>
      <template v-else>
        <!-- 電腦版選單 -->
        <v-layout class="nav-layout">
          <template v-for="item in navItems" :key="item.to">
            <v-btn v-if="item.show" :prepend-icon="item.icon" :to="item.to">
              {{ item.text }}
              <v-badge
                color="red"
                :content="user.cart"
                v-if="item.to === '/cart' && user.cart > 0"
                floating
              ></v-badge>
            </v-btn>
          </template>
          <v-btn
            prepend-icon="mdi-account-arrow-right"
            v-if="user.isLogin"
            @click="logout"
          >登出</v-btn>
        </v-layout>
      </template>
    </v-container>
  </v-app-bar>

  <!-- 主要內容 -->
  <v-main :class="{'no-padding-top': isHomePage}">
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { mobile } = useDisplay()
const user = useUserStore()
const createSnackbar = useSnackbar()
const router = useRouter()

const drawer = ref(false)
const route = useRoute()

const isHomePage = computed(() => route.path === '/')

// 導覽列
const navItems = computed(() => {
  return [
    { to: '/aboutUs', text: '關於我們', icon: 'mdi-bottle-wine', show: true },
    { to: '/product', text: '站檯小貓', icon: 'mdi-cat', show: true },
    { to: '/menu', text: '酒水小點', icon: 'mdi-food', show: true },
    {
      to: '/reservation',
      text: '預約',
      icon: 'mdi-calendar-check',
      show: true
    },
    {
      to: '/admin/products',
      text: '管理',
      icon: 'mdi-shield-account',
      show: user.isAdmin
    },
    {
      to: '/register',
      text: '註冊',
      icon: 'mdi-account-plus',
      show: !user.isLogin
    },
    {
      to: '/login',
      text: '登入',
      icon: 'mdi-account-arrow-left',
      show: !user.isLogin
    }
  ]
})

const logout = async () => {
  await user.logout()
  createSnackbar({
    text: '登出成功',
    snackbarProps: {
      color: 'green'
    }
  })
  router.push('/') // 登出後跳轉回首頁
}
</script>

<style scoped>
.logo-img {
  height: 45px;
  object-fit: contain;
  margin-left: 50px;
}

.transparent-bar {
  background-color: transparent;
  color: white;
  box-shadow: none;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.regular-bar {
  background-color: black;
  color: white;
}

.v-navigation-drawer {
  background-color: #2e2e2e;
}

.v-btn {
  color: white;
}

.nav-layout {
  display: flex;
  justify-content: space-around;
  width: 60%;
  width: 60%; /* 调整导航栏宽度来控制按钮间距 */
}

.title-btn {
  font-weight: bold;
  font-size: 1.5em;
  color: white;
}

.v-container {
  justify-content: space-between;
}

.no-padding-top {
  padding-top: 0 !important;
  padding-top: 0 !important; /* 消除 v-main 的 padding-top */
}
</style>
