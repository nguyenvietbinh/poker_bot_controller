<template>
    <div class="w-full max-w-md mx-auto mt-10">
    <input
      type="text"
      autofocus
      required
      v-model="account_name"
      @keyup.enter="search_account"
      placeholder="Search your account..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
    <p v-if="!state.data" class="mt-2 text-sm text-white dark:text-white">account not found !</p>
  </div>
</template>


<script>
import { useMyFunc } from '~/store/function_store'
import { state } from '~/store/data_store'
export default {
  setup() {
    const { check_account_name } = useMyFunc()
    return {
      check_account_name,
      state
    }
  },
  data() {
    return {
      account_name: '',
    }
  },
  mounted() {
  },
  methods: {
    search_account() {
      this.check_account_name(this.account_name).then(response => {
        state.data = response
        if (state.data) {
          state.user_name = this.account_name          
        } else {
          state.user_name = ''
        }
      })
    }
  }
}

</script>