<template>
  <div id="clientes">
    <app-crud
      :data="$store.state.loan.loans"
      :items="items"
      api-module="loan"
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
        { text: '#', value: 'loan_id', width: '10', component: 'v-text-field', hideForm: true },
        { text: 'Installment', value: 'installment', width: '10', component: 'v-text-field' },
        { text: 'Amount', value: 'amount', width: '200', component: 'v-text-field', rules: [this.requiredField], showInTable: false },
        { text: 'Term', value: 'term', width: '200', component: 'v-text-field', rules: [this.requiredField], showInTable: false },
        { text: 'Rate', value: 'rate', component: 'v-text-field', rules: [this.requiredField], showInTable: false },
        { text: 'Date', value: 'date', component: 'v-text-field', rules: [this.requiredField], showInTable: false }
      ]
    }
  }
}
</script>
