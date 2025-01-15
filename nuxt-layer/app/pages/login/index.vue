<script lang="ts" setup>
const handleLogin = (path: string) => {
  navigateTo(`/api/auth/${path}`, { external: true });
};
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold mb-10">Login Page</h2>
    <div class="space-x-3">
      <Button @click="handleLogin('github')">GitHub Login</Button>
      <Button @click="handleLogin('google')">Google Login</Button>
    </div>
  </div>
</template>
