<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageLayout from './layouts/PageLayout/PageLayout.vue'
import ShowCatalogue from './features/showCatalogue/components/ShowCatalogue.vue'
</script>

<template>
  <PageLayout>
    <RouterView />
    <ShowCatalogue />
  </PageLayout>
</template>
