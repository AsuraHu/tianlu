<template>
  <div class="main">
    <main-banner></main-banner>
    <main-latest></main-latest>
    <main-culture></main-culture>
    <main-contact></main-contact>
  </div>
</template>

<script>
import MainBanner from './main/Banner.vue'
import MainLatest from './main/Latest.vue'
import MainCulture from './main/Culture.vue'
import MainContact from './main/Contact.vue'
export default {
  name: 'Main',
  components: {
    MainBanner,
    MainLatest,
    MainCulture,
    MainContact
  }
}
</script>

<style scoped>
</style>
