<template>
  <v-navigation-drawer permanent mini-variant>
    <v-list>
      <v-list-item :prepend-avatar="avatar" title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :title="item.text"
        :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main :style="{ '--v-layout-left': '0px' }">
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const user = useUserStore();

const navItems = [
  { to: "/admin/products", text: "貓咪管理", icon: "mdi-cat" },
  { to: "/admin/orders", text: "預約管理", icon: "mdi-list-box" },
  { to: "/admin/account", text: "會員管理", icon: "mdi-account-group" },
  { to: "/", text: "回首頁", icon: "mdi-home" },
];

const avatar = computed(() => {
  return `https://api.multiavatar.com/${user.account}.png`;
});
</script>
