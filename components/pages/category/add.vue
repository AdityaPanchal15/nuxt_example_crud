<template>
  <v-card>
    <v-card-title class="text-h5"> {{ title }} </v-card-title>
    <div class="pa-4">
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="categoryName"
          label="Category name"
        ></v-text-field>

        <v-text-field
          v-model="calories"
          type="number"
          label="Calories"
        ></v-text-field>

        <v-text-field v-model="fat" type="number" label="Fat"></v-text-field>

        <v-btn type="submit" color="primary">Save</v-btn>
        <v-btn @click="closeForm">cancel</v-btn>
      </v-form>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    action: {
      type: String,
      default: 'add',
    },
    editId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      categoryName: '',
      calories: null,
      fat: null,
    }
  },
  computed: {
    title() {
      return this.action === 'edit' ? 'Edit Category' : 'Add New Category'
    },
    validForm() {
      return this.categoryName && this.calories && this.fat
    },
  },
  watch: {
    editId: {
      async handler(id) {
        if (id) {
          const category = await this.$store.dispatch(
            'category/getCategoryById',
            id
          )
          if (category) {
            this.categoryName = category.categoryName
            this.calories = category.calories
            this.fat = category.fat
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    closeForm() {
      this.categoryName = ''
      this.calories = null
      this.fat = null
      this.$emit('closeForm')
    },
    submit() {
      if (!this.validForm) {
        return false
      }
      const data = {
        categoryName: this.categoryName,
        calories: this.calories,
        fat: this.fat,
      }
      
      if (this.action === 'edit') {
        this.$store
          .dispatch('category/updateCategory', {
            id: this.editId,
            ...data,
          })
          .then(async () => {
            await this.$store.dispatch('category/fetchCategories')
            this.closeForm()
          })
      } else {
        this.$store.dispatch('category/addCategory', data).then(async () => {
          await this.$store.dispatch('category/fetchCategories')
          this.closeForm()
        })
      }
    },
  },
}
</script>