<script setup lang="ts">
import SearchTrigger from '@/features/searchShow/components/SearchTrigger/SearchTrigger.vue'
import NavLogo from '@/shared/components/NavLogo/NavLogo.vue'
</script>

<template>
  <header
    class="p-horizontal-container-full min-h-14 py-4 fixed top-0 w-full z-20 bg-black-primary rounded-b-lg flex items-center"
  >
    <nav aria-label="Main navigation" class="flex items-center w-full">
      <NavLogo />
      <SearchTrigger />
    </nav>
  </header>
</template>
