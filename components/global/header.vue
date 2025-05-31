<script lang="ts" setup>
import { useCoreStore } from '~/stores/core'

const coreStore = useCoreStore()
</script>

<template>
  <div>
    <div>
      <img src="https://avatars.githubusercontent.com/u/87989392?v=4" alt="Logo" class="w-12 h-12 rounded-full">
    </div>
    <div class="font-bold bg-gray-6 text-white">
      <div class="w-full h-full">
        1
      </div>
      <button
        class="cursor-pointer"
        @click="coreStore.toggleTheme"
      >
        Toggle
      </button>
      <div>123</div>
    </div>
  </div>
</template>

<style></style>
