<template>
  <div class="border-solid border-black border-[0px] h-[50%] w-[50%] flex justify-center flex-nowrap">
    <div class="h-[90%] w-[90%] border-l-[3px] border-b-[3px] border-solid border-black">
      <div class="flex flex-nowrap h-full w-full">
        <div v-for="i in 9" :key="i" class="h-full w-[11.2%]">
          <div v-for="j in row" :key="j" :style="{ height: 100/row + '%'}" class="w-full bg-gray-200">
            <div class="collum h-full w-[30%] mx-auto bg-black text-white" v-if="rank[i-1] && row - j < rank[i-1]">
              <p class="text-center text-[1vw]" v-if="row - j == rank[i - 1] - 1 && row - j + 1 <= 99">{{ row - j + 1 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[5%] flex flex-nowrap">
        <div class="h-full w-[11.2%] text-center">1st</div>
        <div class="h-full w-[11.2%] text-center">2nd</div>
        <div class="h-full w-[11.2%] text-center">3rd</div>
        <div class="h-full w-[11.2%] text-center">4th</div>
        <div class="h-full w-[11.2%] text-center">5th</div>
        <div class="h-full w-[11.2%] text-center">6th</div>
        <div class="h-full w-[11.2%] text-center">7th</div>
        <div class="h-full w-[11.2%] text-center">8th</div>
        <div class="h-full w-[11.2%] text-center">9th</div>
      </div>
    </div>


  </div>
</template>



<script>
import { state } from '~/store/data_store';

export default {
  setup() {
    return {
      state
    }
  },
  data() {
    return {
      rank: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      number_of_block: 0,
      row: 0,
      hei: 0,
      collum_element: null
    }
  },
  mounted() {
    for (let key in state.data) {
      this.rank[parseInt(state.data[key]['rank']) - 1] += 1
    }
    this.row = Math.max(...this.rank)
    this.number_of_block = 10 * this.row;
    console.log(this.rank)
  }
}
</script>