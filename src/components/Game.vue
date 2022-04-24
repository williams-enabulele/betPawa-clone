<template>
  <div class="container">
    <div class="headline">
      <div class="wrap">
        <span><i :class="icon1"></i></span>
        {{ headline }}
      </div>
      <i :class="icon2"></i>
    </div>
    <div class="border-bottom" v-for="sport in sports" :key="sport.id">
      <div class="date">
        <span>{{sport.time}}</span>
        <span>{{sport.date}}</span>
      </div>
      <div class="teams">
        <span>{{sport.teams[0]}}</span>
        <span>{{sport.teams[1]}}</span>
      </div>
      <div class="category">
        <li><a>{{sport.category}}</a></li>
      </div>
      <div class="market">
        <button class="mkt-btn"><span>1</span><span>{{sport.markets[0]}}</span><span></span></button>
        <button class="mkt-btn"><span>x</span><span>{{sport.markets[1]}}</span><span></span></button>
        <button class="mkt-btn"><span>2</span><span>{{sport.markets[2]}}</span><span></span></button>
        <button class="mkt-btn-sm">55+</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Game",

  data: () => {
    return {
      headline: "pawaBoost",
      icon1: "fas fa-bolt",
      icon2: "fa-solid fa-circle-info",
      sports : [
        {
          id: 1,
          date: "Mon 25/04",
          time: "6:30 pm",
          teams: ["Real Betis", "Valencia (n)"],
          category: "Football / Spain Cup",
          markets: 
            ["1.65","4.30","5.50"]
          
        },
         {
          id: 2,
          date: "Mon 25/04",
          time: "6:30 pm",
          teams: ["Real Betis", "Valencia (n)"],
          category: "Football / Spain Cup",
          markets: 
            ["1.65","4.30","5.50"]
          
        },
         {
          id: 3,
          date: "Mon 25/04",
          time: "6:30 pm",
          teams: ["Real Betis", "Valencia (n)"],
          category: "Football / Spain Cup",
          markets: 
            ["1.65","4.30","5.50"]
          
        },
         {
          id: 4,
          date: "Mon 25/04",
          time: "6:30 pm",
          teams: ["Real Betis", "Valencia (n)"],
          category: "Football / Spain Cup",
          markets: 
            ["1.65","4.30","5.50"]
          
        }
      ]
    };
  },

  props: {
    game: Object,
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.wrap > span {
  margin-right: 10px;
}

.headline {
  height: 46px;
  background: #f4f5f0;
  display: flex;
  border-top: 1px solid #000;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 22px;
}

.date {
  font-size: 14px;
  display: flex;
  margin: 10px 15px;
}

.date > span:nth-child(1) {
  font-family: GothamNarrow;
  margin-right: 5px;
}

.teams {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
}
.category {
  font-size: 12px;
}

.category > li {
  list-style: none;
  display: flex;
  margin: 10px 15px;
  color: #8e9398;
}

.market {
  display: flex;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: 15px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
}

.mkt-btn {
  height: 34px;
  width: 100%;
  border: 1px solid #8e9398;
  background: #f4f5f0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  font-weight: 700;
  font-family: GothamNarrow;
  margin-right: 5px;
}

.mkt-btn-sm {
  background: #fdfefb;
  padding: 7px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8e9398;
  font-size: 16px;
  width: 40px;
  margin-right: 15px;
  font-weight: 700;
}

.border-bottom {
  border-bottom: 1px solid #f4f5f0;
}
</style>