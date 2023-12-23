<template>
  <div class="conseiller">
    <img :src="conseiller.profilePicturePath ? conseiller.profilePicturePath : 'public/helpers/no-pp-available.webp'"
      :alt="`Photo de ${conseiller.lastname} ${conseiller.firstname}`" />
    <div class="name">
      {{ conseiller.firstname }}<br>{{ conseiller.lastname }}
    </div>
    <div class="age">
      {{ ageFromDate(conseiller.birthDate) }} ans
    </div>
    <div class="role">
      {{ conseiller.roleLibelle }}
    </div>
  </div>
</template>

<script setup>
import { ageFromDate } from '@/helpers/helpers.js'

defineProps({
  conseiller: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.conseiller {
  color: var(--dark);
  background-color: var(--light);
  padding: 1.5rem;
  text-align: center
}

.conseiller>img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
}

.name {
  font-size: 1.5rem;
  font-weight: 500;
}

.age {
  font-size: 1rem;
  font-weight: 400;
}

.role {
  color: var(--primary);
  /* font-style: italic; */
  font-size: 1rem;
  font-weight: 400;
}
</style>
