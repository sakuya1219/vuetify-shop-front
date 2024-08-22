<template>
  <v-footer class="footer-section pa-4" color="dark">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="footer-title">Spirits 靈魂伴貓</h3>
          <p>好好喝酒酒好好喝，貓咪好摸</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="footer-title">聯絡我們</h3>
          <ul>
            <li>地址：貓咪市醉酒區</li>
            <li>電話：02-1234-5678</li>
            <li>郵件：info@example.com</li>
          </ul>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="footer-title">關注我們</h3>
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-section {
  background-color: #181818;
  color: white;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

v-icon {
  color: white;
}
</style>
