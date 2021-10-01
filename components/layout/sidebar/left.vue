<template>
  <v-navigation-drawer fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,

      miniVariant: false,
      clipped: false,

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'Admin',
          to: '/admin',
        },
        {
          icon: 'mdi-view-list',
          title: 'Category',
          to: '/category',
        },
      ],
    }
  },
}
</script>