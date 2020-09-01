<template>
  <div class="bg-primary text-white">
    <q-toolbar>
    <q-btn dense flat round icon="menu" @click="$emit('leftDrawer')" />

    <q-toolbar-title>
        <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
    </q-toolbar-title>

    <q-btn dense flat round icon="menu" @click="$emit('rightDrawer')" />
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: 'c-header',
};
</script>
<style lang="scss">

</style>
