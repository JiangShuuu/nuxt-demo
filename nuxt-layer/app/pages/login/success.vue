<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession();
</script>

<template>
  <div class="space-y-2">
    <h1>Login Success Page</h1>
    <div v-if="loggedIn && user">
      <h1>Welcome {{ user }}!</h1>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <button @click="clear">Logout</button>
    </div>
    <div v-else>
      <h1>Not logged in</h1>
      <a href="/api/auth/github">Login with GitHub</a>
    </div>
  </div>
</template>
