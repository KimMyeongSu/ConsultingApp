<template>
  <div>
    <div class="top">
      <TopMenu></TopMenu>
      <h1>
        <img
          @click="goHome"
          :src="require(`@/assets/${UnivIDLink}/image/logo.png`)"
          width="178"
          height="33"
          style="cursor: pointer"
        />
      </h1>
    </div>
  </div>
</template>

<script>
import TopMenu from './TheTopMenu.vue';
export default {
  data() {
    return {
      post: null,
      error: null,
    };
  },
  created() {},
  computed: {
    UnivIDLink() {
      return this.$route.params.UnivID;
    },
  },
  methods: {
    goHome() {
      this.$router.push('/' + this.$route.params.UnivID);
    },
  },
  components: {
    TopMenu,
  },
};
</script>

<style>
.top .info {
  position: absolute;
  right: 5px;
  top: 20px;
  letter-spacing: -1px;
}
</style>
