<template>
  <v-container fluid class="content-container pa-0">
    <section class="hero-section">
      <v-img src="../assets/spiritsBack.png" alt="Hero Image" class="hero-image"></v-img>
      <div class="hero-overlay">
        <h1>Spirits Cat Bar</h1>
        <p>喜歡摸貓貓的你，叫小姐不如叫小貓。</p>
      </div>
    </section>

    <!-- 中間介紹段落 -->
    <section class="intro-section">
      <div class="intro-text">
        <br>
        <br>
        <h2><strong><em>Spirits Cats Club</em></strong></h2>
        <p><strong><em>僅此一加絕無分號</em></strong></p>
        <p><strong><em>貓貓愛好者同溫層俱樂部</em></strong></p>
        <p><strong><em>到處都是咪咪貓貓 & 毛線團</em></strong></p>
        <p><strong><em>Cats is f*cking good</em></strong></p>
        <br>
        <br>
      </div>
    </section>

    <!-- 第一組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="../assets/spiritsNBack.png" alt="ONCE Cafe&Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="styled-text">
          <h2><strong><em>Spirits</em></strong></h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p>位於台中市天津路商圈內的Cats Club，提供各式精釀調酒之餘，我們也提供各式高品質精選陪酒小貓。強烈推薦給喜歡品酒的你、更推薦給同時也喜歡貓咪的你。</p>
          <p>營業時間：週二至週日：13:00 ~ 23:00</p>
          <ul>
            <li>客製化精釀調酒</li>
            <li>各式精選陪酒小貓應有盡有</li>
            <li>不定時推出特製下酒菜及點心</li>
            <li>捷運中心文清站步行五分鐘</li>
          </ul>
          <v-btn color="orange" to="/aboutUs">ABOUT US</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 插入橫幅圖片 -->
    <section class="banner-section reserve-section">
      <div class="second-banner-background"></div>
    </section>

    <!-- 第二組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="../assets/cat/banner02.png" alt="Chance Cafe & Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="styled-text">
          <h2><strong><em>陪酒小貓</em></strong></h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p>與其找陪酒小姐，不如找位陪酒小貓。可愛、好哄，只需要一些肉泥、點心與玩具就能搏得他們的芳心。什麼昂貴的開酒費？什麼名貴的奢侈品？不、都不需要，只需要你的耐心陪伴以及一點點的小＊賄絡，就足以得到牠們的愛。</p>
          <p>貓咪好棒、我好愛。</p>
          <ul>
            <li>我們有貓</li>
            <li>我們還有酒</li>
            <li>我們還有更多的貓</li>
            <li>心動了就趕緊來看看我們的王牌小貓</li>
          </ul>
          <v-btn color="orange" to="/product">ABOUT CATS</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 第三組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" order-md="2" class="pa-0">
        <v-img src="../assets/cat/banner03.png" alt="Nonsense Cafe & Bar" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" order-md="1" class="content-text pa-0">
        <div class="styled-text">
          <h2><strong><em>酒水小點</em></strong></h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p>我們有客製化的精釀調酒，想加入各種奇奇怪怪的東西也完全沒問題，就算說要加罐罐，只要你說的出來我們都敢加。我們都知道大家來這間酒吧肯定醉翁之意不再酒，所以關於餐點嘛...看看就好。</p>
          <p>酒水的部分我們肯定保持極高的要求，至於其他的...愛吃不吃。</p>
          <ul>
            <li>客製化調酒</li>
            <li>超過150種啤酒</li>
            <li>超過50種威士忌、50種紅白酒</li>
            <li>至於食物...不如吃貓罐罐如何</li>
          </ul>
          <v-btn color="orange" to="/menu">ABOUT WINE</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 第四組 -->
    <v-row dense no-gutters class="content-section">
      <v-col cols="12" md="6" class="pa-0">
        <v-img src="../assets/cat/banner04.png" alt="Echo Chamber Club" class="content-image"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="content-text pa-0">
        <div class="styled-text">
          <h2><strong><em>立即預約</em></strong></h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p>為了維護貓貓們與客人互動的最高品質，以及老闆的疲累程度，本店採用預約制。每日開放五個時段、每個時段接待四組客人，請各位愛貓的酒鬼提前預約。</p>
          <ul>
            <li>現在</li>
            <li>立刻</li>
            <li>馬上</li>
            <li>給老子預約</li>
          </ul>
          <v-btn color="orange" to="/reservation">RESERVATION</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 訂位資訊 -->
    <section class="reserve-section">
      <div class="reserve-background"></div>
      <div class="reserve-content">
        <h2>店家資訊</h2>
        <p>現場電話&粉絲專頁</p>
        <ul>
          <li>SCC : 02-2680-9427 / Spirits Cat Club</li>
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

.styled-text {
  padding: 40px;
  background-color: #181818; /* 深色背景 */
  color: #fff; /* 白色文字 */
}

.styled-text h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f1a944; /* 橙色標題 */
}

.styled-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.styled-text ul {
  list-style-type: none;
  padding-left: 0;
}

.styled-text ul li {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #f1a944; /* 橙色列表符號 */
  position: relative;
  padding-left: 25px; /* 增加左邊距 */
}

.styled-text ul li:before {
  content: "🐾";
  color: #f1a944;
  position: absolute;
  left: 0;
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
  height: 600px; /* 确保图片和文字部分的高度一致 */
  object-fit: cover; /* 图片覆盖 */
  object-position: center; /* 图片居中显示 */
  margin: 0; /* 去除图片的外边距 */
  padding: 0; /* 去除图片的内边距 */
}

.content-text {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  height: 600px; /* 确保图片和文字部分的高度一致 */
}

.text-container {
  padding: 20px;
  width: 100%;
}

.intro-section {
  padding: 100px 50px;
  text-align: center;
  background-color: #181818;
}

.intro-text {
  color: #ffffff;
}

.banner-section {
  position: relative;
  height: 40vh; /* 确保与其他横幅一致 */
  margin: 0;
  padding: 0;
}

.second-banner-background {
  background-image: url("../assets/cat/bannerTitle.jpg"); /* 更新第二个横幅的背景图片 */
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.reserve-section {
  position: relative;
  padding: 50px;
  color: white;
}

.reserve-background {
  background-image: url("../assets/cat/banner05.jpg");
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
    font-size: 1.5em;
  }

  .text-container p {
    font-size: 1em;
  }

  .content-image {
    height: auto;
  }

  .content-section {
    flex-direction: column;
  }

  .content-text {
    padding: 10px;
    height: auto; /* 确保在手机上文字部分高度自动调整 */
  }
}
</style>
