<script setup lang="ts">

const { locale } = useI18n({ useScope: "global" })

onMounted(() => {
  locale.value = 'th'
})
</script>

<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <Banner />
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <router-view />
    </div>
  </div>
</template>
