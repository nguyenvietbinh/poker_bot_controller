<template>
    <div class="w-full max-w-md mx-auto mt-20">
    <input
      type="text"
      autofocus
      required
      @keyup.enter="search_account"
      placeholder="Search your account..."
      class="searching_bar w-full px-4 py-2 border border-gray-400 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
    <p v-if="account_not_found" class="mt-2 text-md text-white dark:text-white">Account not found !</p>
  </div>
</template>


<script>
import { useMyFunc } from '~/store/function_store'
import { state } from '~/store/data_store'
export default {
  setup() {
    const { check_player_name } = useMyFunc()
    return {
      check_player_name,
      state,
    }
  },
  data() {
    return {
      player_name: '',
      searching_bar: null,
      account_not_found: false,
    }
  },
  mounted() {
    this.searching_bar = document.querySelector('.searching_bar')
    state.player_name = this.$route.query.player
    if (state.player_name) {
      this.searching_bar.value = state.player_name
      this.check_player_name(state.player_name).then(res => {
        if (res) {
          state.data = res
          this.searching_bar.blur()
        } else {
          this.account_not_found = true
        }
      })
    }
  },
  methods: {
    search_account() {
      this.player_name = this.searching_bar.value
      this.$router.push({
        path: '/player',
        query: { player: this.player_name }
      })
      setTimeout(() => {
        location.reload()
      }, 100);
    }
  }
}

</script>