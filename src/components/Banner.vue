<script setup lang="ts">
const { t } = useI18n()
const navigation = [
  { name: t("banner.product"), href: "#" },
  { name: t("banner.features"), href: "#" },
  { name: t("banner.marketplace"), href: "#" },
  { name: t("banner.company"), href: "#" },
]

const mobileMenuOpen = ref<boolean>(false)
</script>
<template>
  <nav class="flex p-6 items-center justify-between lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="rounded-md -m-2.5 p-2.5 text-gray-700 inline-flex items-center justify-center"
        @click="mobileMenuOpen = true"
      >
        <span class="sr-only">Open main menu</span>
        <heroicons-outline-bars-3 class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="font-semibold text-sm text-gray-900 leading-6"
        >{{ item.name }}</a
      >
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="font-semibold text-sm text-gray-900 leading-6"
        >Log in <span aria-hidden="true">&rarr;</span></a
      >
    </div>
  </nav>
  <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
    <div class="inset-0 z-50 fixed" />
    <DialogPanel
      class="bg-white w-full py-6 px-6 inset-y-0 right-0 z-50 fixed overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <button
          type="button"
          class="rounded-md -m-2.5 p-2.5 text-gray-700"
          @click="mobileMenuOpen = false"
        >
          <span class="sr-only">Close menu</span>
          <heroicons-outline-x-mark class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="divide-y divide-gray-500/10 -my-6">
          <div class="space-y-2 py-6">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="rounded-lg font-semibold -mx-3 text-base py-2 px-3 text-gray-900 leading-7 block hover:bg-gray-50"
              >{{ item.name }}</a
            >
          </div>
          <div class="py-6">
            <a
              href="#"
              class="rounded-lg font-semibold -mx-3 text-base py-2.5 px-3 text-gray-900 leading-7 block hover:bg-gray-50"
              >Log in</a
            >
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>
