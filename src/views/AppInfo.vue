<template>
  <div>
    <TopHeader></TopHeader>
    <TopPanel></TopPanel>
    <MajorListChart></MajorListChart>
    <MajorList></MajorList>
  </div>
</template>
<script>
import TopPanel from '../components/TheTopPanel.vue';
import TopHeader from '../components/TheTopHeader.vue';
import MajorList from '../components/MajorList.vue';
import MajorListChart from '../components/MajorListChart.vue';

export default {
  components: {
    TopPanel,
    TopHeader,
    MajorList,
    MajorListChart,
  },
  methods: {},
};
</script>

<style scoped></style>
