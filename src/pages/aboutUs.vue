<template>
  <div>
    <!-- 頁面標題 -->
    <section class="hero-section">
      <h1 class="hero-title">OUR STORY</h1>
    </section>

    <!-- 品牌理念 -->
    <section class="brand-idea-section">
      <div class="brand-idea-content">
        <div class="images-container">
          <img class="image1" src="https://picsum.photos/600/800" alt="Image 1" />
          <img class="image2" src="https://picsum.photos/801/600" alt="Image 2" />
        </div>
        <div class="text-container">
          <h2 class="section-title">品牌理念</h2>
          <p class="section-description">
            以下是品牌理念的介紹內容...
          </p>
        </div>
      </div>
    </section>

    <!-- 中間橫幅 -->
    <section class="parallax-banner"></section>

    <!-- 關於我們 -->
    <section class="about-us-section">
      <div class="about-us-content">
        <div class="text-container">
          <h2 class="section-title">關於我們</h2>
          <p class="section-description">
            以下是關於我們的介紹內容...
          </p>
        </div>
        <div class="image-container">
          <img class="about-us-image" src="https://picsum.photos/803/600" alt="About Us Image" />
        </div>
      </div>
    </section>

    <!-- 頁腳 -->
    <Footer />
  </div>
</template>

<script setup>
// 沒有額外的邏輯需要處理
</script>

<style scoped>
.hero-section {
  background-image: url('https://picsum.photos/1200/800');
  height: 60vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

.brand-idea-section, .about-us-section {
  padding: 2rem;
  height: 680px; /* 固定高度 */
}

.brand-idea-content, .about-us-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* 确保内容占满容器高度 */
}

.images-container {
  position: relative;
  width: 50%;
  height: 100%; /* 确保图片容器占满高度 */
}

.image1 {
  position: absolute;
  width: 400px;
  height: 500px;
  top: 60px;
  left: 100px;
  z-index: 1;
  object-fit: cover;
}

.image2 {
  position: absolute;
  width: 500px;
  height: 300px;
  top: 130px;
  left: 400px;
  z-index: 2;
  object-fit: cover;
}

.about-us-image {
  position: relative;
  left: -50px;
}

.text-container {
  width: 45%;
  color: white;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  line-height: 1.5;
}

.parallax-banner {
  height: 40vh;
  background-image: url('https://picsum.photos/1201/800');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-us-section .image-container {
  width: 45%;
  height: 100%; /* 确保图片容器占满高度 */
}

.about-us-section img {
  width: 100%;
  height: auto;
}
</style>
