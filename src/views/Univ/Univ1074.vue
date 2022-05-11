<template>
  <div>
    <div id="main_wrap">
      <nav style="float: center">
        <router-link :to="{ path: UnivIDLink + '/ReferencedData' }"
          ><img src="../../img/index/empty.png" id="mainbtn01" class="btn"
        /></router-link>
        <router-link :to="{ path: UnivIDLink + '/input' }"
          ><img src="../../img/index/empty.png" id="mainbtn02" class="nbsp"
        /></router-link>
        <router-link :to="{ path: UnivIDLink + '/Admin' }"
          ><img src="../../img/index/empty.png" id="mainbtn03" class="nbsp"
        /></router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    UnivIDLink() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
body {
  text-align: center;
}
#main_wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  background: url(../../resource/1074/image/main_bg.jpg) no-repeat center center;
  width: 1024px;
  height: 768px;
  margin: -384px 0 0 -512px;
}
#main_wrap nav {
  text-align: center;
  margin: 537px auto 0 auto;
  z-index: 0;
}
#main_wrap .nbsp {
  margin-left: 146px;
}
#mainbtn01 {
  background-image: url(../../img/indexA/btn01_visit.png);
  width: 140px;
  height: 183px;
  padding: 0;
}
#mainbtn02 {
  background-image: url(../../img/indexA/btn02_mocktest.png);
  width: 140px;
  height: 183px;
  padding: 0;
}
#mainbtn03 {
  background-image: url(../../img/indexA/btn03_admin.png);
  width: 140px;
  height: 183px;
  padding: 0;
}
/* body { text-align:center;}
#main_wrap { position:absolute;left:50%;top:50%;background: url(../../resource/1006/image/main_bg.jpg) no-repeat center center; no-repeat center center;width:1024px;height:768px;margin:-384px 0 0 -512px }
#main_wrap nav { text-align:center;margin:537px auto 0 auto; z-index:0}
#main_wrap nav .nbsp { margin-left:146px;}
*/
</style>
