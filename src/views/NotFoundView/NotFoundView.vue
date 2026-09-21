<script setup lang="ts">
import Heading from '@/shared/components/Heading/Heading.vue'
import Text from '@/shared/components/Text/Text.vue'
import Link from '@/shared/components/Link/Link.vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-8">
    <ExclamationTriangleIcon class="w-24 h-24 text-red-primary" />
    <Heading as="h1">Page not found</Heading>
    <Text as="p" color="ghost">The page you are looking for does not exist.</Text>
    <Link to="/" ariaLabel="Go back to homepage" variant="play">
      <Text as="span" class="text-black">Go Home</Text>
    </Link>
  </div>
</template>
