<template>
  <v-footer class="footer-section pa-4" color="dark">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="footer-title">Spirits Cat Bar</h2>
          <br>
          <p>好好喝酒酒好好喝，貓咪好摸好好摸。</p>
          <h6>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;----以此為通關密語可以跟老闆換一杯每日神秘特調。</h6>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="footer-title">聯絡我們</h3>
          <ul>
            <li>地址：台中市北區青島路一段</li>
            <li>電話：02-2680-9427 </li>
            <li>郵件：spiritsCatClub@gmail.com</li>
          </ul>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="footer-title">關注我們</h3>
          <v-btn icon href="https://www.facebook.com/">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://x.com/">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/" target="_blank">
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
