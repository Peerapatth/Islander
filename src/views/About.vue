<template>
  <section>
    <h1 class="text-3xl font-bold mb-4">{{ t('message.about') }}</h1>
    <p class="text-gray-600">{{ t('message.home') }}</p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
