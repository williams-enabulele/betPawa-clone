<template>
  <div>
    <button 
      @click="toggleAccordion()" 
      class="spaced" 
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
  
      <slot name="title" />
      
      <svg
        class="icon"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    
    <div v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
  
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style scoped>

.spaced {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  border: 0;
  background: #e6e7e1;
}

.icon {
  width: 10px;
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.rotate-180 {
  transform: rotate(180deg);
}

</style>