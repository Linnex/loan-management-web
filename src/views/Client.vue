<template>
  <div id="clientes">
    <app-crud
      :data="$store.state.client.clients"
      :items="items"
      api-module="client"
      api-get="load"
      api-save="save"
      api-remove="remove"
    />
  </div>
</template>

<script>
export default {
  computed: {
    requiredField () {
      return v => !!v || 'Required Field'
    },
    items () {
      return [
        { text: '#', value: 'id', width: '10', component: 'v-text-field', showInTable: false },
        { text: 'Name', value: 'name', width: '200', component: 'v-text-field', rules: [this.requiredField] },
        { text: 'Surname', value: 'surname', width: '200', component: 'v-text-field', rules: [this.requiredField] },
        { text: 'Email', value: 'email', component: 'v-text-field', showInTable: false, rules: [this.requiredField] },
        { text: 'Phone', value: 'telephone', component: 'v-text-field', rules: [this.requiredField] },
        { text: 'Natural Key', value: 'cpf', width: '200', component: 'v-text-field', rules: [this.requiredField] },
        { text: 'Options', value: '', width: '10', sortable: false }
      ]
    }
  }
}
</script>
