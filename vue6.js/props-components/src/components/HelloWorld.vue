<template>
  <div class="tags center">
    <button v-for="button in buttons" :key="button.id" @click="currentTab = button">
      {{ button }}
    </button>
  </div>
  <component :is="changeTabs"></component>
</template>

<script>
import Bathroom from './TagBathroom.vue';
import Badroom from './TagBadroom.vue';

export default {
  name: 'HelloWorld',
  components: { Bathroom, Badroom },
  data() {
    return {
      buttons: ['Bathroom', 'Badroom'],
      currentTab: 'Bathroom'
    };
  },
  computed: {
    changeTabs() {
      return `${this.currentTab}`;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 200px;
}
</style>
