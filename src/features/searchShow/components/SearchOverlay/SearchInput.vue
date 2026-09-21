<script setup lang="ts">
import { shallowRef } from 'vue'
import Input from '@/shared/components/Input/Input.vue'
import { useFocus } from '@vueuse/core'
import Button from '@/shared/components/Button/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const query = defineModel<string>({ required: true })
const emit = defineEmits<{ close: [] }>()

const inputRef = shallowRef()
useFocus(inputRef, { initialValue: true })
</script>

<template>
  <div class="flex items-center w-full">
    <Input
      v-model="query"
      ariaLabel="Write your search"
      placeholder="Search shows by name..."
      ref="inputRef"
    />
    <Button variant="ghost" ariaLabel="Close search" @click="emit('close')">
      <XMarkIcon class="size-10 text-white -mt-8" />
    </Button>
  </div>
</template>
