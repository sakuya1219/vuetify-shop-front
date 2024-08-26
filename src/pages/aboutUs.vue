<template>
  <div>
    <section class="hero-section">
      <h1 class="hero-title">OUR STORY</h1>
    </section>

    <section class="brand-idea-section">
      <div class="brand-idea-content">
        <div class="images-container">
          <img class="image1" src="../assets/cat/about01.png" alt="Image 1" />
          <img class="image2" src="../assets/cat/about02.png" alt="Image 2" />
        </div>
        <div class="text-container">
          <h2 class="section-title">品牌理念</h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p class="section-description">
            品牌理念？什麼品牌理念？有酒喝有貓摸就是理念！
          </p>
        </div>
      </div>
    </section>

    <section class="parallax-banner"></section>

    <section class="about-us-section">
      <div class="about-us-content">
        <div class="text-container">
          <h2 class="section-title">關於我們</h2>
          <hr style="border-color: #f1a944;">
          <br>
          <p class="section-description">
            關於一個愛貓酒鬼的夢想之地的故事。
          </p>
        </div>
        <div class="image-container">
          <img class="about-us-image" src="../assets/cat/about03.png" alt="About Us Image" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>

</script>

<style scoped>
.hero-section {
  background-image: url('../assets/cat/aboutTitle.jpg');
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
  color: #f1a944;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
}

.brand-idea-section, .about-us-section {
  padding: 2rem;
  height: 680px;
}

.brand-idea-content, .about-us-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.images-container {
  position: relative;
  width: 50%;
  height: 100%;
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
  color: #f1a944;
  font-weight: bold;
}

.section-description {
  font-size: 1.125rem;
  line-height: 1.5;
}

.parallax-banner {
  height: 40vh;
  background-image: url('../assets/cat/aboutFooter.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-us-section .image-container {
  width: 45%;
  height: 100%;
}

.about-us-section img {
  width: 100%;
  height: auto;
}
</style>
