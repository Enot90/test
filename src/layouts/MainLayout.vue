<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated>
      <c-header @leftDrawer="left = !left" @rightDrawer="right = !right"/>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <c-left-drawer />
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <c-right-drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <c-footer />
    </q-footer>

  </q-layout>
</template>
<script lang="ts">

export default {
  name: 'MainLayout',
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>
