<script lang="ts" setup>
import { useCoreStore } from '~/stores/core'

const coreStore = storeToRefs(useCoreStore())
</script>

<template>
  <div :class="`content ${coreStore.selectedTheme.value}`">
    <ClientOnly>
      <NuxtLoadingIndicator color="#9BCB30" />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
