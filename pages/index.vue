<script lang="ts" setup>
import { useCoreStore } from '~/stores/core'

const coreStore = useCoreStore()
</script>

<template>
  <div class="font-bold bg-gray-6 text-white">
    <div class="w-full h-full">
      1
    </div>
    <button class="cursor-pointer" @click="coreStore.toggleTheme">
      Toggle
    </button>
  </div>
</template>

<style></style>
