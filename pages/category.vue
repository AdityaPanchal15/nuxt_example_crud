<template>
  <div>
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <h1>{{ title }}</h1>
        <v-btn color="primary" @click="dialog = true"> Add Category </v-btn>
        <v-dialog v-model="dialog" width="320">
          <Add :action="action" :edit-id="editId" @closeForm="closeForm" />
        </v-dialog>
      </v-card-title>
      <Grid @edit="showEditForm" />
    </v-card>
  </div>
</template>
<script>
import Grid from '~/components/pages/category/grid.vue'
import Add from '~/components/pages/category/add.vue'
export default {
  components: {
    Grid,
    Add,
  },
  data() {
    return {
      grid: true,
      dialog: false,
      action: 'add',
      editId: undefined,
    }
  },
  head() {
    return {
      title: 'Category Page',
    }
  },
  computed: {
    title() {
      return this.grid ? 'Category List' : 'Add New Category'
    },
    category() {
      return this
    },
  },
  methods: {
    showEditForm(id) {
      this.action = 'edit'
      this.editId = id
      this.dialog = true
    },
    closeForm() {
      this.dialog = false
      this.action = 'add'
      this.editId = undefined
    },
  },
}
</script>
