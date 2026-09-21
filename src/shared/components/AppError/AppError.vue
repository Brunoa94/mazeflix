<script setup lang="ts">
import { ApiError } from '@/shared/types/error'
import Button from '@/shared/components/Button/Button.vue'
import Text from '@/shared/components/Text/Text.vue'
import type { RefetchFn } from '@/shared/types/query'

interface Props {
  error: ApiError | Error
  onRetry?: RefetchFn
}

const { error, onRetry } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-8">
    <Text as="p" class="text-red-500">{{ error.message }}</Text>
    <Button v-if="onRetry" variant="error" ariaLabel="Try again" @click="onRetry">
      Try Again
    </Button>
  </div>
</template>
