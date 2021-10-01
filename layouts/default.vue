<template>
  <v-app light>
    <Left />
    <v-app-bar app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Left from '~/components/layout/sidebar/left.vue'
export default {
  components: { Left },
  data() {
    return {
      title: 'Nuxt Demo',
    }
  },
}
</script>
