<template>
<div class="bg-gray-600 h-auto min-h-screen w-full absolute">
  <HomePageComponentsHeader/>
  <Home_page_componentsSearching_bar/>
</div>
</template>

<script>
import { state } from '~/store/data_store';
export default {
  setup() {
    return {
      state
    }
  }
}
</script>