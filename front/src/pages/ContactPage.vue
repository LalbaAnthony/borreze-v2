<template>
  <h2 class="page-title">Contact</h2>

  <div class="contact-grid">
    <div class="contact-element">
      <IconTelephone class="contact-icon" />
      <h4>Par téléphone</h4>
      <p>Appelez par téléphone au 05 53 28 83 38</p>
      <a href="tel:+33553288338" class="button positive">Appeler</a>
    </div>
    <div class="contact-element">
      <IconEnvelope class="contact-icon" />
      <h4>Par E-mail</h4>
      <p>Envoyez un E-mail à l'adresse mairie.borreze@wanadoo.fr</p>
      <a href="mailto:mairie.borreze@wanadoo.fr" class="button positive">Envoyer un E-mail</a>
    </div>
    <div class="contact-element">
      <IconGeoAlt class="contact-icon" />
      <h4>Sur place</h4>
      <address>
        Mairie de Borrèze<br>
        Le Bourg<br>
        24590 Borrèze
      </address><br>

      <ul class="fancy-list">
        <li>Mardi : 09h00 à 12h00 et 14h00 à 18h00</li>
        <li>Jeudi : 09h00 à 12h00</li>
        <li>Samedi : 09h00 à 12h00</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import IconTelephone from '@/components/icons/IconTelephone.vue';
import IconGeoAlt from '@/components/icons/IconGeoAlt.vue';

</script>

<style scoped>
/* DESKTOP */
@media (min-width: 1024px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  .contact-element {
    padding: 1rem;
    border-right: 1px solid #ccc;
  }

  .contact-element:last-child {
    border-right: none;
  }
}

/* TABLET */
@media (min-width: 768px) and (max-width: 1023px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .contact-element {
    padding: 2rem;
  }
}

/* MOBILE */
@media (max-width: 767px) {
  .contact-grid {
    display: row;
    grid-template-rows: repeat(1, 1fr);
    row-gap: 1.5rem;
  }

  .contact-element {
    border-bottom: 1px solid #ccc;
    padding: 3rem 0;
  }

  .contact-element:last-child {
    border-bottom: none;
  }
}

.contact-grid {
  margin: 2rem 1.5rem;
}

.contact-element {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-element>.contact-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  color: var(--primary)
}

.contact-element>p {
  text-align: center;
}

.contact-element>h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-element>p {
  margin-bottom: 1rem;
}
</style>
