<template>
  <div :class="cn('pb-12 w-64 border-r h-screen', className)" v-bind="$attrs">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">主選單</h2>
        <div class="space-y-1">
          <Button
            :variant="$route.path === '/' ? 'default' : 'ghost'"
            class="w-full justify-start"
            @click="navigateTo('/')"
          >
            <HomeIcon class="mr-2 h-4 w-4" />
            首頁
          </Button>
          <Button
            :variant="$route.path === '/login' ? 'default' : 'ghost'"
            class="w-full justify-start"
            @click="navigateTo('/login')"
          >
            <LayoutDashboardIcon class="mr-2 h-4 w-4" />
            登入相關
          </Button>
        </div>
      </div>
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">設定</h2>
        <div class="space-y-1">
          <Button
            variant="ghost"
            class="w-full justify-start"
            @click="navigateTo('/settings')"
          >
            <SettingsIcon class="mr-2 h-4 w-4" />
            系統設定
          </Button>
          <Button
            variant="ghost"
            class="w-full justify-start"
            @click="navigateTo('/profile')"
          >
            <UserIcon class="mr-2 h-4 w-4" />
            個人資料
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils.js";

defineProps<{
  className?: string;
}>();
</script>
