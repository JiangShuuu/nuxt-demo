<script setup lang="ts">
// Remember to disable the middleware protection from your page!
definePageMeta({
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: "/" },
});

const { signIn, signOut } = useAuth();

/*
 * NOTE: Here we hard-coded username and password
 * On your own page this should probably be connected to two inputs
 */
const demoCredentials = { username: "test", password: "hunter2" };
</script>

<template>
  <div class="space-y-2">
    <p>Sign-In Options:</p>
    <div class="flex space-x-2">
      <Button @click="signIn('github')">Github</Button>
      <Button @click="signIn('google')">Google</Button>
      <Button @click="signIn('credentials', demoCredentials)">
        Username and Password
      </Button>
    </div>
    <Button @click="signOut()">Sign Out</Button>
  </div>
</template>
