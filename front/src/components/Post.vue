<template>
  <router-link :to="post.path">
    <div class="post">
      <img :src="post.image" :alt="`Image de ${post.title}`" class="hover-effect" />
      <div class="post-content">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-text">{{ threeDotString(post.text) }}</p>
      </div>
      <IconArrowRight class="following-arrow" />
    </div>
  </router-link>
</template>

<script setup>
import IconArrowRight from './icons/IconArrowRight.vue'
import { threeDotString } from '../helpers/helpers.js'

defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.post {
  color: var(--dark);
  background-color: var(--light);
  border-radius: 10px;
  border: var(--light) 1px solid;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
}


.post>img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
}

.post:hover>img {
  transform: scale(1.05);
}

.post-content {
  padding: 1rem;
}

h3.post-title {
  font-size: 1rem;
  line-height: 0.9;
  font-weight: 600;
  margin: 0;
}

p.post-text {
  padding: 1rem 0;
}

.following-arrow {
  margin: 1rem;
  right: 50px;
  color: var(--primary);
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;
}

.post:hover>.following-arrow {
  transform: translateX(1rem);
}
</style>
