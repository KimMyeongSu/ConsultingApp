<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item" class="card">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import UnivRefData from '@/assets/UnivRefData.json';
const univrefdata = UnivRefData;
export default {
  data() {
    return { items: univrefdata.pdf };
  },
  name: 'AppReferencedata',
};
</script>

<style scoped>
.card {
  height: 400px;
  width: 350px;
  border-radius: 15px;
  display: inline-block;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}
</style>
