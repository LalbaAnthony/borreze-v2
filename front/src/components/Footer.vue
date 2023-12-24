<template>
  <footer>
    <div>
      <h5>Réseaux</h5>
      <a href="https://www.instagram.com/borreze/?hl=fr" target="_blank">
        <IconInstagram class="social-icon" />
      </a>
      <a href="https://www.facebook.com/MairiedeBorreze/" target="_blank">
        <IconFacebook class="social-icon" />
      </a>
    </div>
    <div>
      <h5>Pages</h5>
      <router-link to="/plan-du-site">
        <span class="link">Plan du site</span>
      </router-link>
      <br>
      <router-link to="/mentions-legales">
        <span class="link">Mentions légales</span>
      </router-link>
    </div>
    <div>
      <h5>Mairie de Borrèze</h5>
      <span>© {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script setup>
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

</script>

<style scoped>
footer {
  color: var(--dark);
  background-color: var(--light);
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
  padding: 2rem;
  display: flex;
}

/* DESKTOP */
@media (min-width: 1024px) {
  footer {
    flex-direction: row-reverse;
  }
}

/* TABLET */
@media (min-width: 768px) and (max-width: 1023px) {
  footer {
    flex-direction: row-reverse;
  }
}

/* MOBILE */
@media (max-width: 767px) {
  footer {
    flex-direction: column;
  }
}

footer div {
  margin: 1rem auto;
}

footer h5 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.social-icon {
  color: var(--primary);
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  transition: all 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
}
</style>
