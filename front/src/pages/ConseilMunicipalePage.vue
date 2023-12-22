<template>
  <h2 class="page-title">Membres du conseil municipal</h2>
  <div class="conseiller-grid">
    <Conseiller v-for="i in 5" :conseiller="{
      image: '',
      nom: 'Dujardin',
      prenom: 'Jean',
      age: 56,
      role: 'Maire',
    }" />
    
  </div>
  <!-- <div v-else class="main-center">
    <span class="message-no-conseiller"><span class="primary">Aucune</span> actualité disponible.</span>
  </div> -->
</template>

<script setup>
import Conseiller from '@/components/Conseiller.vue'
</script>

<style scoped>
/* DESKTOP */
@media (min-width: 1024px) {
  .conseiller-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
}

/* TABLET */
@media (min-width: 768px) and (max-width: 1023px) {
  .conseiller-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
}

/* MOBILE */
@media (max-width: 767px) {
  .conseiller-grid {
    display: row;
    grid-template-rows: repeat(1, 1fr);
    row-gap: 1.5rem;
  }
}

.conseiller-grid {
  margin: 3rem 0;
}

.main-center {
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message-no-conseiller {
  color: var(--dark);
  background-color: var(--light);
  justify-content: center;
  align-items: center;
}
</style>
