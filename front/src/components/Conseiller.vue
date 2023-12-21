<template>
  <div class="conseiller">
    <img :src="conseiller.image" :alt="`Photo de ${conseiller.nom} ${conseiller.prenom}`" />
    <div class="name">
      {{ conseiller.nom }} {{ conseiller.prenom }}
    </div>
    <div class="age">
      {{ conseiller.age }} ans
    </div>
    <div class="role">
      {{ conseiller.role }}
    </div>
  </div>
</template>

<script setup>

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
  padding: 2rem;
  text-align: center
}


.conseiller>img {
  width: 200px;
  height: 200px;
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
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;
}
</style>
