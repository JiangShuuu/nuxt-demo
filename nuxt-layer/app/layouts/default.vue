<script setup lang="ts">
import Sidebar from "@/components/Sidbar.vue";
</script>

<template>
  <div class="flex w-full">
    <Sidebar class="w-1/5" />
    <div class="w-4/5">
      <slot />
    </div>
  </div>
</template>
