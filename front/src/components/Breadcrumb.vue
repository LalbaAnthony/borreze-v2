<template>
  <!-- <pre>{{ route }}</pre> -->
  <ol class="breadcrumb">
    <li>
      <router-link to="/">
        <IconHouse class="icon-offset" />
      </router-link>
    </li>
    <li v-for="el in route.matched">
      <router-link :to="el.path">{{ el.name }}</router-link>
    </li>
  </ol>
</template>

<script setup>
import IconHouse from '@/components/icons/IconHouse.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<style scoped>
ol.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem 0;
  font-size: 1rem;
}

ol.breadcrumb>li {
  display: flex;
  align-items: center;
}

ol.breadcrumb>li a {
  color: var(--dark);
  text-decoration: none;
}

ol.breadcrumb>li a:hover {
  color: var(--primary);
}

ol.breadcrumb li+li:before {
  content: '>';
  color: var(--primary);
  font-weight: bold;
  margin: 0 0.5rem;
}
</style>
