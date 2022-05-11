<template>
  <div>
    <div class="panal">
      <h1>Top Panal Area</h1>
      <router-link to="input">
        <div class="btn_mint">&lt; 이전</div>
      </router-link>
      <router-link to="input">
        <div class="btn_red">성적입력</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a .btn_red {
  background: #cf1939;
  border-bottom: solid 3px #bd0e0e;
  width: 238px;
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 22px;
  text-align: center;
  padding: 16px 0 15px 0;
}
a .btn_mint {
  background: #bededd;
  border-bottom: solid 3px #a2d0ce;
  width: 238px;
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 22px;
  text-align: center;
  padding: 16px 0 15px 0;
}
.panal {
  width: 70%;
  border: 3px solid rgb(17, 3, 141);
}
</style>
