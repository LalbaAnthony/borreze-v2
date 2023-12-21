<template>
  <h2 class="page-title">Actualités</h2>
  <div class="posts-grid">
    <Post v-for="i in 5" :post="{
      image: '/public/photos/borreze-mairie.webp',
      category: 'Evenement',
      title: 'Lorem ipsum dolor sit amet consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      slug: 'post1',
    }" />
  </div>
  <!-- <div v-else class="main-center">
    <span class="message-no-posts"><span class="primary">Aucune</span> actualité disponible.</span>
  </div> -->
</template>

<script setup>
import Post from '@/components/Post.vue'
</script>

<style scoped>
/* DESKTOP */
@media (min-width: 1024px) {
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
}

/* TABLET */
@media (min-width: 768px) and (max-width: 1023px) {
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
}

/* MOBILE */
@media (max-width: 767px) {
  .posts-grid {
    display: row;
    grid-template-rows: repeat(1, 1fr);
    row-gap: 1.5rem;
  }
}

.posts-grid {
  margin: 3rem 0;
}

.main-center {
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-no-posts {
  color: var(--dark);
  background-color: var(--light);
  justify-content: center;
  align-items: center;
}
</style>
