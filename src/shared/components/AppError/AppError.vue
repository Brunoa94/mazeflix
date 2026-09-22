<script setup lang="ts">
import { computed } from 'vue'
import { ApiError } from '@/shared/types/error'
import Button from '@/shared/components/Button/Button.vue'
import Heading from '@/shared/components/Heading/Heading.vue'
import type { RefetchFn } from '@/shared/types/query'
import { FaceFrownIcon } from '@heroicons/vue/24/outline'
import { getErrorMessage } from '@/shared/helpers/getErrorMessage'

interface Props {
  error: ApiError | Error
  onRetry?: RefetchFn
}

const { error, onRetry } = defineProps<Props>()

const message = computed(() => getErrorMessage({ error }))
</script>

<template>
  <div role="alert" class="flex flex-col items-center justify-center gap-4 p-8 text-center">
    <FaceFrownIcon class="w-16 h-16 text-red-primary" />
    <Heading as="h1" variant="title">{{ message }}</Heading>
    <div class="flex flex-col items-center justify-center gap-4">
      <Button v-if="onRetry" variant="error" ariaLabel="Try again" @click="onRetry">
        Try again
      </Button>
    </div>
  </div>
</template>
