<script lang="ts" setup>
const { status, loading, data, lastRefreshedAt } = useAuthState();
const { signOut } = useAuth();
</script>

<template>
  <div class="space-y-2">
    <h1>Login Success Page</h1>
    <div class="space-y-2 border divide-y-2 divide divide-gray-200">
      <p>Status: {{ status }}</p>
      <p>Loading: {{ loading }}</p>
      <p>Data: {{ data }}</p>
      <p>Last Refreshed At: {{ lastRefreshedAt }}</p>
    </div>
    <Button
      @click="
        signOut({
          callbackUrl: '/login',
        })
      "
      >Sign Out</Button
    >
  </div>
</template>
