<script setup lang="ts">
import { ApiError } from '@/shared/types/error'
import { onMounted } from 'vue'

interface Props {
  error: ApiError | Error
}

const { error } = defineProps<Props>()

onMounted(() => {
  if (error instanceof ApiError) {
    alert('Error message: ' + error.message + ' from the endpoint: ' + error.endpoint)
  } else {
    alert('Error message: ' + error.message)
  }
})
</script>
