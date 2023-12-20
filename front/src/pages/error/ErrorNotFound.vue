<template>
  <div class="center">
    <h1>Erreur 404</h1>
    <p><span class="primary">Aucune</span> page trouvé</p>
    <button class="button positive" @click="$router.go(-1)">Retour</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.center h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.center p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.center button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

</style>