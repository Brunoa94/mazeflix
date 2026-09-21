<script setup lang="ts">
import Button from '@/shared/components/Button/Button.vue'
import Text from '@/shared/components/Text/Text.vue'
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
import SearchOverlay from '../SearchOverlay/SearchOverlay.vue'
import '@/styles/overlay.css'

const isSearchOpen = ref(false)
</script>

<template>
  <Button ariaLabel="Open search" variant="search" class="ml-auto" @click="isSearchOpen = true">
    <div class="flex items-center gap-2">
      <MagnifyingGlassIcon class="w-5 h-5" />
      <Text as="span" variant="banner">Search</Text>
    </div>
  </Button>
  <SearchOverlay :open="isSearchOpen" @close="isSearchOpen = false" />
</template>
