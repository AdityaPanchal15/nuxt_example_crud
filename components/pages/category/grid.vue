<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="categories"
      :items-per-page="15"
      class="elevation-1"
    >
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template #item.actions="{ item }">
        <v-icon small class="mr-2" @click="editCategory(item.id)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteCategory(item.id)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Category Name',
          align: 'start',
          sortable: false,
          value: 'categoryName',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    categories() {
      return this.$store.getters['category/getCategories']
    },
  },
  async mounted() {
    await this.$store.dispatch('category/fetchCategories')
  },
  methods: {
    editCategory(id) {
      this.$emit('edit', id)
    },
    async deleteCategory(id) {
      await this.$store.dispatch('category/deleteCategory', id).then(() => {
        this.$store.dispatch('category/fetchCategories')
      })
    },
  },
}
</script>