<template>
  <div class="container">
    <div class="search-wrapper">
      <select>
        <option>Football</option>
        <option>BasketBall</option>
        <option>Tennis</option>
      </select>
      <span class="icon">
        <i class="fa-solid fa-xmark"></i>
      </span>
    </div>

    <ul>
      <li>
        <a href=""><span></span>HOME</a>
      </li>
      <li>
        <a href=""><span></span>LIVE NOW</a>
      </li>
      <li>
        <a href=""><span></span>UPCOMING</a>
      </li>
      <li>
        <a href=""><span></span>VIRTUAL SPORTS</a>
      </li>
      <li>
        <a href=""><span></span>PAWA 6 <span>FREE</span></a>
      </li>
      <li>
        <a href=""><span></span>JACKPOT</a>
      </li>
      <li>
        <a href=""><span></span>GAMES</a>
      </li>
      <li>
        <a href=""><span></span>POPULAR</a>
      </li>
    </ul>
    <Accordion isOpen="true">
      <template v-slot:title>
        <span class="title">Tournaments</span>
      </template>
      <template v-slot:content>
        <ul class="content">
          <li>
            <a href=""
              ><span><img src="../assets/images/england.png" /></span>ENGLAND
              AND PREMIER LEAGUE</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA EUROPEAN LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA CHAMPIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA NATIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/italy.png" /></span>ITALY SERIE
              A</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/germany.png" /></span></a
            >Germany Bundesliga 1
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/spain.png" /></span></a
            >Spain LaLiga
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/france.png" /></span></a
            >France Ligue 1
          </li>
        </ul>
      </template>
    </Accordion>
    <Accordion isOpen="true">
      <template v-slot:title>
        <span class="title">Popular Countries</span>
      </template>
      <template v-slot:content>
        <ul class="content">
          <li>
            <a href=""
              ><span><img src="../assets/images/england.png" /></span>ENGLAND
              AND PREMIER LEAGUE</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA EUROPEAN LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA CHAMPIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA NATIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/italy.png" /></span>ITALY SERIE
              A</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/germany.png" /></span></a
            >Germany Bundesliga 1
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/spain.png" /></span></a
            >Spain LaLiga
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/france.png" /></span></a
            >France Ligue 1
          </li>
        </ul>
      </template>
    </Accordion>
    <Accordion isOpen="true">
      <template v-slot:title>
        <span class="title">other Countries</span>
      </template>
      <template v-slot:content>
        <ul class="content">
          <li>
            <a href=""
              ><span><img src="../assets/images/england.png" /></span>ENGLAND
              AND PREMIER LEAGUE</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA EUROPEAN LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA CHAMPIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/europe.png" /></span></a
            >UEFA NATIONS LEAGUE
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/italy.png" /></span>ITALY SERIE
              A</a
            >
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/germany.png" /></span></a
            >Germany Bundesliga 1
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/spain.png" /></span></a
            >Spain LaLiga
          </li>
          <li>
            <a href=""
              ><span><img src="../assets/images/france.png" /></span></a
            >France Ligue 1
          </li>
        </ul>
      </template>
    </Accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Accordion from "./Accordion.vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    Accordion,
  },

 
  props: {
      isMenu: Boolean
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  background: #fefefe;
  border-right: 1px solid #000;
  height: 100%;
  display: block;
}

select {
  width: 90%;
  height: 35px;
  margin: 20px 10px;
  padding: 0 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  text-align: left;
  width: 100%;
  font-family: GothamNarrow;
  font-size: 14px;
  font-weight: 400;
  border-top: 1px solid #000;
}

ul > li {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  align-items: center;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
}

ul > li a > span {
  margin-right: 5px;
}

ul > li:hover {
  border-left: 5px solid rgb(156, 232, 0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.title {
  display: inline-block;
  font-size: 18px;
  margin: 0;
  text-transform: none;
  width: auto;
  font-weight: 700;
  user-select: none;
  text-transform: uppercase;
  font-family: Gotham;
}

.content {
  background: #f5f5f0;
}

.active {
  border-left: 5px solid rgb(156, 232, 0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-wrapper>span{
    margin-right: 5px;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.icon {
  display: block;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.icon {
  display: none;
}
}
</style>
