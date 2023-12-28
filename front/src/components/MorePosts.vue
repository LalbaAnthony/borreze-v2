<template>
  <section>
    <h3 class="section-title">{{ sectionTitle }}</h3>
    <div class="posts-grid">
      <Post v-for="i in 3" :post="{
        image: '/public/photos/borreze-mairie.webp',
        category: 'Evenement',
        title: 'Lorem ipsum dolor sit amet consectetur',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        slug: 'post1',
      }" />
    </div>
  </section>
</template>

<script setup>
import Post from '@/components/Post.vue'

defineProps({
  sectionTitle: {
    type: String,
    required: false,
    default: 'D\'autres actualités',
  },
})
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
  margin: 1rem 0;
}
</style>
