<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black-primary">
    <Header />
    <main class="flex-1 pt-top-with-topnav">
      <slot />
    </main>
    <Footer />
  </div>
</template>
