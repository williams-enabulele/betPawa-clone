<template>
  <div class="container">
    <div class="headline">
      <div class="wrap">
        <span><i class="fas fa-bolt"></i></span>
        pawaBoost
      </div>
      <i class="fa-solid fa-circle-info"></i>
    </div>
    <div class="line">
           <div class="date">
      <span>5:00 pm</span>
      <span>Sat 23/04</span>
    </div>
    <div class="teams">
      <span>FC Internazionale</span>
      <span>AS Roma</span>
    </div>
    <div class="category">
      <li><a>Football/ Italie Serie A </a></li>
    </div>
    <div class="market">
      <button class="mkt-btn"><span>1</span>1.65<span></span></button>
      <button class="mkt-btn"><span>x</span>4.30<span></span></button>
      <button class="mkt-btn"><span>2</span><span>5.50</span></button>
      <button class="mkt-btn-sm">55+</button>
    </div>
    </div>
      <div class="line">
           <div class="date">
      <span>12:30 pm</span>
      <span>Sat 23/04</span>
    </div>
    <div class="teams">
      <span>Buyern Munich</span>
      <span>Borussia Dortmond</span>
    </div>
    <div class="category">
      <li><a>Football/ Germany Bundesliga 1</a></li>
    </div>
    <div class="market">
      <button class="mkt-btn"><span>1</span>1.35<span></span></button>
      <button class="mkt-btn"><span>x</span>6.00<span></span></button>
      <button class="mkt-btn"><span>2</span><span>8.00</span></button>
      <button class="mkt-btn-sm">57+</button>
    </div>
    </div>
      <div class="line">
           <div class="date">
      <span>12:30 pm</span>
      <span>Sat 23/04</span>
    </div>
    <div class="teams">
      <span>Arsenal</span>
      <span>Manchester United</span>
    </div>
    <div class="category">
      <li><a>Football/ England Premier League</a></li>
    </div>
    <div class="market">
      <button class="mkt-btn"><span>1</span>2.15<span></span></button>
      <button class="mkt-btn"><span>x</span>3.70<span></span></button>
      <button class="mkt-btn"><span>2</span><span>3.50</span></button>
      <button class="mkt-btn-sm">64+</button>
    </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Game",
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
}

.mkt-btn {
  height: 34px;
  width: 100%;
  border: 1px solid #8e9398;
  background: #f4f5f0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  font-weight: 700;
  font-family: GothamNarrow;
  margin-right: 5px;
}

.mkt-btn-sm {
  background: #ffffff;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8e9398;
  font-size: 18px;
  width: 40px;
  margin-right: 5px;

}

.line {
    border-bottom: 1px solid #f4f5f0;
}
</style>