<script setup lang="ts">
import useShowCatalogue from '../composables/useShowCatalogue'
import ShowSection from './ShowSection.vue'

const { isLoading, item, error } = useShowCatalogue()
</script>
<template>
  <span v-if="isLoading">Is Loading...</span>
  <span v-else-if="error">Has error...</span>
  <ShowSection v-else :items="shows" :title="genre" v-for="[genre, shows] in item" :key="genre" />
</template>
