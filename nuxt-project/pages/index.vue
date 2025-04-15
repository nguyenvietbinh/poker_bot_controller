<template>
<div class="bg-gray-600 h-auto min-h-screen w-full absolute">
  <HomePageComponentsHeader/>
  <div class="w-full min-h-screen">
    <HomePageComponentsSearchingBar/>
  </div>
  <HomePageComponentsFooter/>
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