<template>
  <v-container fluid class="content-container pa-0">
    <section class="hero-section">
      <v-img src="https://picsum.photos/1920/1080?random=1" alt="Hero Image" class="hero-image"></v-img>
      <div class="hero-overlay">
        <h1>Spirits 靈魂伴貓</h1>
        <p>喜歡摸貓貓的你，叫小姐不如叫小貓。</p>
      </div>
    </section>

    <!-- 中間介紹段落 -->
    <section class="intro-section">
      <div class="intro-text">
        <br />
        <br />
        <h2>貓咪酒吧靈魂伴貓好多貓</h2>
        <p>Cat 分會 / Kitty 分會 / Pussy 分會</p>
        <p>貓貓愛好者同溫層俱樂部</p>
        <p>到處都是咪咪貓貓 & 毛線團</p>
        <p>Life Once, Second Chance, Always Nonsense.</p>
        <br />
        <br />
      </div>
    </section>

    <!-- 第一組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="https://picsum.photos/800/600?random=2" alt="ONCE Cafe&Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="text-container">
          <h2>Spirits Bar</h2>
          <p>酒吧酒吧酒吧酒吧酒吧酒吧酒吧。</p>
          <v-btn color="orange" to="/aboutUs">ABOUT CATS</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 插入橫幅圖片 -->
    <section class="banner-section">
      <v-img src="https://picsum.photos/1920/600?random=6" alt="Banner Image" class="banner-image"></v-img>
    </section>

    <!-- 第二組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="https://picsum.photos/800/600?random=3" alt="Chance Cafe & Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="text-container">
          <h2>C Bar</h2>
          <p>酒吧酒吧酒吧酒吧酒吧酒吧酒吧。</p>
          <v-btn color="orange" to="#">LEARN MORE</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 第三組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" order-md="2" class="pa-0">
        <v-img src="https://picsum.photos/800/600?random=4" alt="Nonsense Cafe & Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" order-md="1" class="content-text pa-0">
        <div class="text-container">
          <h2>K Bar</h2>
          <p>酒吧酒吧酒吧酒吧酒吧酒吧酒吧。</p>
          <v-btn color="orange" to="#">LEARN MORE</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 第四組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="https://picsum.photos/800/600?random=7" alt="Echo Chamber Club" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="text-container">
          <h2>P Club</h2>
          <p>以各類咪咪喵喵及摸貓貓為主題的貓貓酒吧。</p>
          <v-btn color="orange" to="#">LEARN MORE</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 訂位資訊 -->
    <section class="reserve-section">
      <div class="reserve-background"></div>
      <div class="reserve-content">
        <h2>訂位資訊</h2>
        <p>請洽各店現場電話或粉絲專頁</p>
        <ul>
          <li>Cat 分會 : 02-2331 6266 / C Bar 粉絲專頁</li>
          <li>Kitty 分會 : 02-2388 5883 / K Bar 粉絲專頁</li>
          <li>Pussy 分會 : 02-2381 2368 / P Bar 粉絲專頁</li>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </v-container>
</template>

<script>
import AppFooter from '@/components/footer.vue'

export default {
  components: {
    AppFooter
  }
}
</script>

<style scoped>
.text-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.content-container {
  background-color: #2e2e2e;
  color: white;
  padding: 0;
}

.hero-section {
  position: relative;
  text-align: center;
}

.hero-image {
  width: 100%;
  height: auto;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.content-section {
  margin: 0;
}

.content-image {
  width: 100%;
  height: auto;
}

.content-text {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中 */
  background-color: #181818; /* 文字部分的背景色 */
}

.text-container {
  padding: 20px;
  width: 100%; /* 确保文字容器占满宽度 */
}

.intro-section {
  padding: 100px 50px; /* 增加上下padding */
  text-align: center;
  background-color: #181818;
}

.intro-text {
  color: #ffffff;
}

.banner-section {
  margin: 0;
  padding: 0;
}

.banner-image {
  width: 100%;
  height: auto;
}

.reserve-section {
  position: relative;
  padding: 50px;
  color: white;
}

.reserve-background {
  background-image: url("https://picsum.photos/1920/1080?random=5");
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.reserve-content {
  position: relative;
  z-index: 2;
}

/* 手機版本樣式調整 */
@media (max-width: 600px) {
  .text-container h2 {
    font-size: 1.5em; /* 調整文字大小 */
  }

  .text-container p {
    font-size: 1em; /* 調整段落文字大小 */
  }

  .content-image {
    height: auto; /* 確保圖片在手機上不會變形 */
  }

  .content-section {
    flex-direction: column; /* 垂直排列 */
  }

  .content-text {
    padding: 10px;
  }
}
</style>
