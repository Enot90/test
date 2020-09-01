<template>
  <div class="absolute fit bg-yellow column q-pa-sm">
    <div class="main-content">
      <q-input rounded outlined v-model="text" label="Rounded outlined"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-main-page',
  data() {
    return {
      text: "",
    }
  },

};
</script>
<style lang="scss">
.main-content{
  max-width: 500px;

}
</style>
