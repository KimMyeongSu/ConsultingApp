<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #f0f0f0;
}

.top h1 {
  text-align: center;
}

body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
th,
td,
form,
fieldset,
legend,
input,
textarea,
button,
select {
  margin: 0;
  padding: 0;
}
body {
  background: #f0f0f0;
}
body,
input,
textarea,
select,
button,
table,
div {
  font-family: '나눔고딕', 'Nanum Gothic', Gulim, AppleGothic, sansserif;
  font-size: 12px;
}
img,
fieldset {
  border: 0;
}
ul,
ol {
  list-style: none;
}
em,
address {
  font-style: normal;
}
a {
  text-decoration: none;
}
a:hover,
a:active,
a:focus {
  text-decoration: none;
}
legend,
caption {
  display: none;
}
img,
select {
  vertical-align: middle;
}
body {
  width: 1024px;
  margin: 0 auto;
  height: 100%;
}
</style>
