<template>
  <div>
    <div class="top">
      <div class="info">
        <li><img src="../img/ico_menu.png" /> Menu</li>
        <li><img src="../img/ico_competition.png" /> 경쟁률</li>
        <li><img src="../img/ico_archives.png" /> 자료실</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scope>
.top .info {
  position: absolute;
  right: 5px;
  top: 10px;
  letter-spacing: -2px;
  margin: 0;
  float: right;
}
li {
  list-style: none;
  float: left;
  aspect-ratio: auto 20 / 25;
}
.info li {
  font-size: 14;
  font-weight: bold;
}
</style>
