<script lang="ts" setup>
const handleLogin = () => {
  navigateTo("/api/auth/github", { external: true });
};
</script>

<template>
  <div>
    <Button @click="handleLogin">GitHub Login</Button>
  </div>
</template>
