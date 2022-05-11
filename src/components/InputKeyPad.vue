<template>
  <div>
    <div class="cont_right" style="float: left">
      <div id="keyboardSection">
        <div id="keybtnarea">
          <table>
            <tr>
              <td>
                <img
                  src="../img/keyboard/btn_previous.jpg"
                  class="keyLng"
                  alt=""
                />
                <img src="../img/keyboard/btn_next.jpg" class="keyLng" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" @click.prevent="KeyIn(7)">
                  <img src="../img/keyboard/btn_7.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(8)">
                  <img src="../img/keyboard/btn_8.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(9)">
                  <img src="../img/keyboard/btn_9.jpg" class="key" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" @click.prevent="KeyIn(4)">
                  <img src="../img/keyboard/btn_4.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(5)">
                  <img src="../img/keyboard/btn_5.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(6)">
                  <img src="../img/keyboard/btn_6.jpg" class="key" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" @click.prevent="KeyIn(1)">
                  <img src="../img/keyboard/btn_1.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(2)">
                  <img src="../img/keyboard/btn_2.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(3)">
                  <img src="../img/keyboard/btn_3.jpg" class="key" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" @click.prevent="KeyIn(0)">
                  <img src="../img/keyboard/btn_0.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn('.')">
                  <img src="../img/keyboard/btn_dot.jpg" class="key" />
                </button>
                <button type="button" @click.prevent="KeyIn(-1)">
                  <img src="../img/keyboard/btn_arrow.jpg" class="key" />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="btn_bottom_center" style="margin-top: 20px">
        <a href="#" id="btnformclear">
          <div class="btn_mint mb7">초기화</div>
        </a>
        <router-link to="Info">
          <div class="btn_red" id="btnMoveResult">진단결과 확인</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ScoreKey: null,
      ScoreSubKey: null,
    };
  },
  methods: {
    KeyIn: function (val) {
      this.Score.KeyIn(this.ScoreKey, this.ScoreSubKey, val);
    },
  },
};
</script>

<style scoped>
a:link {
  color: white;
}
li {
  height: 50px;
  width: 800px;
  border-radius: 15px;
  display: inline-block;
  /* margin-top: 30px;
	margin-left: 30px;
	margin-bottom: 30px; */
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}
/* Common */

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

/* Top */

#type1headerPanel,
#type2headerPanel {
  width: 974px;
  height: 60px;
  padding-top: 14px;
}
.top .info {
  position: absolute;
  right: 5px;
  top: 20px;
  letter-spacing: -1px;
}
.info li img {
  vertical-align: middle;
  padding-right: 4px;
}
.info li {
  float: left;
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
}
.info li:first-child {
  padding-left: 0;
}
.info li a {
  color: #34406a;
  text-decoration: none;
}

h2 {
  font-family: '나눔고딕', 'Nanum Gothic', Gulim, AppleGothic, sansserif;
  font-size: 22px;
  color: #000;
  font-weight: normal;
  margin-bottom: 14px;
  letter-spacing: -2px;
  display: inline-block;
  text-align: left;
  width: 100%;
}
h3 {
  font-family: '나눔고딕', 'Nanum Gothic', Gulim, AppleGothic, sansserif;
  font-size: 17px;
  color: #000;
  font-weight: normal;
  letter-spacing: -1px;
  margin-bottom: 11px;
  display: inline-block;
  text-align: left;
  width: 100%;
}
.h3_title {
  font-family: '나눔고딕', 'Nanum Gothic', Gulim, AppleGothic, sansserif;
  font-size: 17px;
  color: #000;
  font-weight: normal;
  letter-spacing: -1px;
  margin-bottom: 11px;
  display: inline-block;
  text-align: left;
  width: 100%;
} /*bshell*/
h4 {
  font-family: '나눔고딕', 'Nanum Gothic', Gulim, AppleGothic, sansserif;
  font-size: 14px;
  color: #000;
  font-weight: normal;
  letter-spacing: -1px;
  margin-bottom: 11px;
  display: inline-block;
  text-align: left;
  width: 100%;
  line-height: 150%;
}
h2.mint {
  color: #9fd9d7;
}
h2.blue {
  color: #37618f;
}
h2.red {
  color: #cf1939;
}
h3.mint {
  color: #9fd9d7;
}
h3.blue {
  color: #37618f;
}
h3.red {
  color: #cf1939;
}
h4.mint {
  color: #9fd9d7;
}
h4.blue {
  color: #37618f;
}
h4.red {
  color: #cf1939;
}
.bold {
  font-weight: bold;
}
/* Wrap */
#wrap {
  width: 974px;
  margin: 0 auto;
  height: 744px;
  overflow: hidden;
}
#wrap:after {
  display: block;
  content: '';
  clear: both;
  overflow: hidden;
}
#wrap .cont_left {
  float: left;
  width: 722px;
}
#wrap .cont_right {
  float: left;
  width: 238px;
  margin-left: 14px;
}

/*.container{height:599px; overflow-y:auto;}*/

.link {
  text-align: left;
  color: Black;
}

.white_bg_box {
  background: #fff;
  padding: 30px 45px 30px;
  text-align: left;
}
.white_bg_box1 {
  background: #fff;
  padding: 20px 14px;
}
.white_bg_box2 {
  background: #fff;
  padding: 20px 25px;
}
.white_bg_box3 {
  background: #fff;
  width: 238px;
  padding: 20px 25px;
}
.box2 {
  background: #fff;
  padding: 20px 25px;
}

.navy_bg_box {
  background: #34406a;
  height: 700px;
}
.navy_bg_box .left_tab {
  display: table;
  width: 238px;
}

.navy_bg_box .left_tab div div {
  background: #f0f0f0;
  color: #34406a;
  border: 3px solid #34406a;
  border-right: 0;
  font-size: 14px;
  float: left;
  padding: 10px 0;
  width: 78px;
  font-weight: normal;
  cursor: pointer;
}
.navy_bg_box .left_tab div div:last-child {
  width: 82px;
  border-right: 3px solid #34406a;
}
.navy_bg_box .left_tab div div.x-tab-active {
  background: #34406a;
  color: #fff;
}

.left_subtit {
  text-align: center;
  padding: 16px 0;
  border-bottom: solid 1px #242d4d;
}
.left_subtit a {
  font-size: 14px;
  color: #fff;
}
.left_list {
  text-align: left;
}
.left_list li {
  padding: 16px 20px;
  border-bottom: solid 1px #242d4d;
}
.left_list a {
  color: #fff;
  font-size: 16px;
}
.left_list a li.selectd {
  background: #9fd9d7;
  border-bottom: solid 3px #75c9c6;
}

.top_bar {
  background: #34406a;
  height: 40px;
  position: relative;
}
.top_bar ul.tit {
  float: left;
  padding: 9px 20px;
}
.top_bar li {
  float: left;
  color: #fff;
  font-size: 19px;
  border-left: solid 1px #9aa0b5;
  padding: 0 10px;
}
.top_bar li:first-child {
  padding-left: 0;
  border-left: none;
}
.top_bar .btn_ab {
  color: #fff;
  background: #2a3355;
  padding: 4px 8px;
  margin-top: -5px;
}

.majorInfo {
  border: solid 2px #a4dad8;
  color: #000;
  font-size: 16px;
  padding-top: 6px;
  padding-right: 16px;
  letter-spacing: -1px;
  height: 36px;
  position: relative;
  text-align: left;
}
.majorInfo span {
  margin-left: 20px;
}
.majorInfo .btn_ab {
  font-size: 14px;
  color: #fff;
  background: #2a3355;
  padding: 6px 8px;
  cursor: pointer;
  float: right;
  margin-top: -6px;
}

.sub_btn_menu {
  float: right;
}
.sub_btn_menu ul {
  height: 100%;
}
.sub_btn_menu a li {
  float: left;
}
.sub_btn_menu a li.mint_bg,
.sub_btn_menu a li.red_bg {
  color: #fff;
  font-weight: bold;
  padding: 8px 0;
  width: 119px;
  text-align: center;
  height: 100%;
}
.sub_btn_menu a li.mint_bg img {
  margin-top: -3px;
}
.sub_btn_menu a li.mint_bg {
  background: #9fd9d7;
  border-bottom: solid 3px #75c9c6;
}
.sub_btn_menu a li.red_bg {
  background: #cf1939;
  border-bottom: solid 3px #ba0000;
}
.notice {
  border: solid 2px #a4dad8;
  color: #63b4b2;
  font-size: 12px;
  padding: 8px 18px;
  letter-spacing: -1px;
  text-align: left;
}
.red_box,
.mint_box,
.blue_box {
  padding: 3px 5px;
  font-size: 11px;
  color: #fff;
  vertical-align: middle;
}
.red_box {
  background: #cf1939;
}
.mint_box {
  background: #9fd9d7;
}
.blue_box {
  background: #37618f;
}
.ab_choice li {
  float: left;
  border: solid 1px #d3d3d3;
  font-size: 17px;
  padding: 8px 12px 8px 12px;
  margin-left: -1px;
}
.ab_choice li a {
  color: #777;
}
.ab_choice li.selected {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
}
.ab_choice li.selected a {
  color: #cf1939;
}
.abc_choice {
  margin-right: 5px;
  overflow: hidden;
  clear: both;
  display: inline-block;
  /* float: left; */
}
.abc_choice li {
  float: left;
  border: solid 1px #d3d3d3;
  font-size: 17px;
  padding: 8px 12px 8px 12px;
  margin-left: -1px;
}
.abc_choice li a {
  color: #777;
}
.abc_choice li.selected {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
}
.abc_choice li.selected a {
  color: #cf1939;
}
/* 20150511 Tab 추가 */
.cont_tab {
  margin-bottom: 14px;
  background: url(../img/cont_tab_bg.gif) repeat-x right top;
  height: 40px;
}
.cont_tab > li {
  float: left;
  height: 40px;
}
.cont_tab > li > a {
  display: block;
  padding: 10px 35px 0 22px;
  height: 30px;
  font-size: 15px;
  color: #555;
  background: url(../img/cont_tab_blt.png) no-repeat right top;
}
.cont_tab > li.selected {
  background: url(../img/cont_tabon_bg.gif) repeat-x right top;
}
.cont_tab > li.selected > a {
  color: #fff;
  background: url(../img/cont_tabon_blt.png) no-repeat right top;
}
.cont_tab:after {
  content: '';
  display: block;
  clear: both;
}
/* //20150511 Tab 추가 */

/* bshell add */
#segBtnKoreanType div.x-button.x-first,
#segBtnKoreanType div.x-button.x-last,
#segBtnMathTypeTD div.x-button.x-first,
#segBtnMathTypeTD div.x-button.x-last {
  background-image: none;
  background-color: #fff;
  border: solid 1px #d3d3d3;
  font-size: 15px;
  padding: 8px 12px 8px 12px;
  color: #777;
}
#segBtnKoreanType div.x-button.x-first.x-button-pressed,
#segBtnKoreanType div.x-button.x-last.x-button-pressed,
#segBtnMathTypeTD div.x-button.x-first.x-button-pressed,
#segBtnMathTypeTD div.x-button.x-last.x-button-pressed {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
  color: #cf1939;
}
#segBtnKoreanType div.x-button.x-first span.x-button-label,
#segBtnKoreanType div.x-button.x-last span.x-button-label,
#segBtnMathTypeTD div.x-button.x-first span.x-button-label,
#segBtnMathTypeTD div.x-button.x-last span.x-button-label {
  font-weight: normal;
}

#segBtnMathType div.x-button.x-first,
#segBtnMathType div.x-button,
#segBtnMathType div.x-button.x-last {
  background-image: none;
  background-color: #fff;
  border: solid 1px #d3d3d3;
  font-size: 15px;
  padding: 8px 12px 8px 12px;
  color: #777;
}
#segBtnMathType div.x-button.x-first.x-button-pressed,
#segBtnMathType div.x-button.x-button-pressed,
#segBtnMathType div.x-button.x-last.x-button-pressed {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
  color: #cf1939;
}
#segBtnMathType div.x-button.x-first span.x-button-label,
#segBtnMathType div.x-button span.x-button-label,
#segBtnMathType div.x-button.x-last span.x-button-label {
  font-weight: normal;
}

#ResearchTypeTD div.x-button.x-first,
#ResearchTypeTD div.x-button,
#ResearchTypeTD div.x-button.x-last {
  background-image: none;
  background-color: #fff;
  border: solid 1px #d3d3d3;
  font-size: 15px;
  padding: 8px 12px 8px 12px;
  color: #777;
}
#ResearchTypeTD div.x-button.x-first.x-button-pressed,
#ResearchTypeTD div.x-button.x-button-pressed,
#ResearchTypeTD div.x-button.x-last.x-button-pressed {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
  color: #cf1939;
}
#ResearchTypeTD div.x-button.x-first span.x-button-label,
#ResearchTypeTD div.x-button span.x-button-label,
#ResearchTypeTD div.x-button.x-last span.x-button-label {
  font-weight: normal;
}
#ResearchTypeTD2 div.x-button.x-first,
#ResearchTypeTD2 div.x-button,
#ResearchTypeTD2 div.x-button.x-last {
  background-image: none;
  background-color: #fff;
  border: solid 1px #d3d3d3;
  font-size: 15px;
  padding: 8px 12px 8px 12px;
  color: #777;
}
#ResearchTypeTD2 div.x-button.x-first.x-button-pressed,
#ResearchTypeTD2 div.x-button.x-button-pressed,
#ResearchTypeTD2 div.x-button.x-last.x-button-pressed {
  border: solid 2px #cf1939;
  padding: 7px 11px 7px 11px;
  color: #cf1939;
}
#ResearchTypeTD2 div.x-button.x-first span.x-button-label,
#ResearchTypeTD2 div.x-button span.x-button-label,
#ResearchTypeTD2 div.x-button.x-last span.x-button-label {
  font-weight: normal;
}

.none {
  display: none;
}

/* Layer popup */
.layer_pop {
  position: fixed;
  _position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.layer_pop .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
#layer {
  position: absolute;
  left: 50%;
  background: #34406a;
}
#layer div.top {
  padding: 11px 16px;
  border-bottom: solid 1px #262f51;
}
input.about_dep {
  background: #fff url(../img/ico_search.png) no-repeat 152px center;
  cursor: pointer;
  background-size: 18px 18px;
  height: 22px;
  padding: 4px 5px;
  border: none;
}
#layer div.cont {
  background: #34406a;
  padding: 10px 10px 5px 10px;
  line-height: 20px;
}
.width {
  width: 203px;
  margin: -80px 75px;
  border: solid 2px #000;
}
.pop_list a li {
  padding: 16px 20px;
  border-bottom: solid 1px #242d4d;
  color: #fff;
  font-size: 14px;
}
.pop_list a li.selected {
  background: #9fd9d7;
  border-bottom: solid 3px #75c9c6;
}

#resultTableArea,
#graphWrapper div {
  background-color: #fff;
}

/* Table */
.gray_tbl {
  border-top: solid 2px #dedede;
  border-bottom: solid 2px #dedede;
  border-collapse: collapse;
  width: 100%;
}
.gray_tbl th,
.gray_tbl td {
  border-top: solid 2px #dedede;
  height: 53px;
  letter-spacing: -1px;
  color: #555;
  font-size: 17px;
}
.gray_tbl th {
  text-align: left;
  font-weight: normal;
}

.darkgray_tbl {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
}
.darkgray_tbl th,
.darkgray_tbl td {
  font-size: 14px;
}
.darkgray_tbl td.font12 {
  font-size: 12px;
}
.darkgray_tbl th {
  background: #666;
  border-left: solid 1px #747474;
  color: #fff;
  padding: 10px 0;
  font-weight: normal;
  text-align: center;
}
.darkgray_tbl td {
  color: #666;
  text-align: center;
  padding: 8px 10px;
  border-bottom: solid 1px #e6e6e6;
  border-left: solid 1px #e6e6e6;
}
.darkgray_tbl td:first-child {
  border-left: none;
}
.darkgray_tbl td.txt_blue {
  color: #37628f;
  font-weight: bold;
}
.darkgray_tbl td.txt_mint {
  color: #42c6c1;
  font-weight: bold;
}
.darkgray_tbl td.txt_red {
  color: #cf1939;
  font-weight: bold;
}
.darkgray_tbl td.red {
  color: #cf1939;
}
.darkgray_tbl td.al_left {
  text-align: left;
} /*bshell*/
.darkgray_tbl td.al_right {
  text-align: right;
} /*bshell*/
.darkgray_tbl td.line {
  border-left: solid 1px #e6e6e6;
} /*hyeun0826*/
.darkgray_tbl thead tr th {
  position: sticky;
  top: 0;
}

.sticky-scroll::-webkit-scrollbar {
  background-color: rgb(52, 64, 106);
  width: 6px;
}
.sticky-scroll::-webkit-scrollbar-track {
  background-color: white;
}
.sticky-scroll::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 16px;
}
.sticky-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a5;
  border: 4px solid #f4f4f4;
}
.sticky-scroll::-webkit-scrollbar-button {
  display: none;
}

/*result에서 최고/평균/최소/내점수 스타일 정의*/
.MaxScore {
  color: #37628f;
  font-weight: bold;
} /*bshell*/
.AvgScore {
  color: #37628f;
  font-weight: bold;
} /*bshell #9EC94F*/
.MinScore {
  color: #42c6c1;
  font-weight: bold;
} /*bshell*/
.MyScore {
  color: #cf1939;
  font-weight: bold;
} /*bshell*/
.darkgray_tbl td.MaxScore {
  color: #37628f;
  font-weight: bold;
} /*bshell*/
.darkgray_tbl td.AvgScore {
  color: #37628f;
  font-weight: bold;
} /*bshell*/
.darkgray_tbl td.MinScore {
  color: #42c6c1;
  font-weight: bold;
} /*bshell*/
.darkgray_tbl td.MyScore {
  color: #cf1939;
  font-weight: bold;
} /*bshell*/

.darkgray_tbl2 {
  border-collapse: collapse;
  width: 100%;
}
.darkgray_tbl2.borderTop {
  border-top: solid 2px #666;
}
.darkgray_tbl2 th,
.darkgray_tbl td {
  font-size: 14px;
}
.darkgray_tbl2 th {
  background: #666;
  border-left: solid 1px #747474;
  color: #fff;
  padding: 8px 0;
  font-weight: normal;
  text-align: center;
}
.darkgray_tbl2 td {
  color: #666;
  text-align: center;
  padding: 8px 10px;
  border-bottom: solid 1px #e6e6e6;
  border-left: solid 1px #e6e6e6;
  font-size: 14px;
  line-height: 150%;
}
.darkgray_tbl2 td:first-child {
  border-left: none;
}
.darkgray_tbl2 td.al_left {
  text-align: left;
} /*bshell*/
.darkgray_tbl2 input {
  font-size: 14px;
  padding: 2px 4px;
  width: 57px;
}
.darkgray_tbl2.bline th {
  border-bottom: solid 1px #747474;
}

/*bshell*/
.table_navygray {
  border-collapse: collapse;
  width: 100%;
}
.table_navygray th,
.darkgray_tbl td {
  font-size: 14px;
  text-align: center;
}
.table_navygray th {
  background: #666;
  border-left: solid 1px #747474;
  color: #fff;
  padding: 8px 0;
  font-weight: normal;
}
.table_navygray td {
  color: #666;
  text-align: center;
  padding: 8px 10px;
  border: solid 1px #e6e6e6;
  background-color: #fff;
  font-size: 14px;
}
.table_navygray td:first-child {
  border-left: none;
}
.table_navygray td.al_left {
  text-align: left;
}
.table_navygray td.al_right {
  text-align: right;
}
.table_navygray td.borderNone {
  border: 0;
}

.table_navygray3 {
  border-collapse: collapse;
  width: 100%;
}
.table_navygray3 th,
.darkgray_tbl td {
  font-size: 14px;
  text-align: center;
}
.table_navygray3 th {
  background: #666;
  border-left: solid 1px #747474;
  color: #fff;
  padding: 8px 0;
  font-weight: normal;
}
.table_navygray3 td {
  color: #666;
  text-align: center;
  padding: 8px 10px;
  border-bottom: solid 1px #e6e6e6;
  border-left: solid 1px #e6e6e6;
  background-color: #fff;
  font-size: 14px;
}
.table_navygray3 td.al_left {
  text-align: left;
  line-height: 150%;
}
.table_navygray3 td.al_right {
  text-align: right;
}
.table_navygray3 td:first-child {
  border-left: none;
}

/*bshell*/
.rainbow_tbl {
  border-bottom: solid 1px #e6e6e6;
  width: 100%;
  font-size: 14px;
}
.rainbow_tbl.borderTop {
  border-top: solid 2px #666;
}
.rainbow_tbl th {
  padding: 8px 0;
  background: #666;
  font-weight: normal;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-left: solid 1px #747474;
  border-bottom: solid 1px #666;
}
/*.rainbow_tbl th.mint, .rainbow_tbl th.red, .rainbow_tbl th.blue{ color:#fff;}*/
.rainbow_tbl th.mint {
  background: #9fd9d7;
  border-bottom: solid 1px #a9dddb;
  border-left: solid 1px #a9dddb;
}
.rainbow_tbl th.red {
  background: #ce1938;
  border-bottom: solid 1px #d3304c;
  border-left: solid 1px #d3304c;
}
.rainbow_tbl th.blue {
  background: #343f6a;
  border-bottom: solid 1px #495379;
  border-left: solid 1px #495379;
}
.rainbow_tbl td {
  padding: 9px;
  border-left: solid 1px #e6e6e6;
  border-top: solid 1px #e6e6e6;
  font-size: 14px;
  line-height: 150%;
}
.rainbow_tbl td.bold {
  font-weight: bold;
}
.rainbow_tbl td:first-child {
  border-left: none;
}
.rainbow_tbl td.mint {
  color: #9fd9d7;
}
.rainbow_tbl td.red {
  color: #ce1938;
}
.rainbow_tbl td.blue {
  color: #343f6a;
}
.rainbow_tbl th.line {
  border: solid 1px #747474;
}
/*hyeun0826 왼쪽선 css추가*/
.rainbow_tbl td.line {
  border-left: solid 1px #e6e6e6;
}

.white_box_group {
  margin-bottom: 14px;
  padding: 10px;
}
.white_box_group:after {
  display: block;
  content: '';
  clear: both;
  overflow: hidden;
}
.white_box_group li {
  float: left;
  background: #fff;
  font-size: 17px;
  width: 32%;
  margin-left: 14px;
  height: 150px;
} /*padding:20px 24px; */
.white_box_group li:first-child {
  margin-left: 0;
}

.line_box {
  border: solid 2px #343f6a;
  padding: 16px 24px;
  padding-bottom: 0px;
  min-height: 207px;
}
.line_box:after {
  display: block;
  content: '';
  clear: both;
  overflow: hidden;
}
.line_box h3.blue {
  font-size: 17px;
  color: #343f6a;
}
.line_box .tit {
  font-size: 14px;
  margin-top: 15px;
}
.line_box .tit p {
  padding-bottom: 1px;
}
.line_box .tit:after {
  display: block;
  content: '';
  clear: both;
  overflow: hidden;
}
.line_box .tit ul {
  margin-top: 5px;
}
.line_box .tit li {
  float: left;
  padding-right: 10px;
  margin-bottom: 5px;
}
.line_box .tit li.w50 {
  width: 50px;
}
.line_box .tit li.w60 {
  width: 60px;
}
.line_box .tit li.w70 {
  width: 70px;
}
.line_box .tit li.w80 {
  width: 80px;
}
.line_box .tit li.w90 {
  width: 90px;
}
.line_box .tit li.w100 {
  width: 100px;
}

.mett:after {
  clear: both;
  overflow: hidden;
  content: '';
  display: block;
}
.mett_box {
  border: solid 3px #676b74;
  padding: 12px;
  font-size: 16px;
  color: #000;
  width: 124px;
  height: 147px;
  position: relative;
  float: left;
  margin-right: 8px;
}
.mett_box img {
  position: absolute;
  bottom: 6px;
  right: 6px;
}
.etc_list li {
  margin-bottom: 5px;
  line-height: 16px;
}
.data_info {
  font-size: 14px;
  display: inline-block;
  /* float: right; */
  letter-spacing: 0;
}

/* Input */
.sel_box {
  background: url(../img/ico_arrow.gif) no-repeat 93% center;
  width: 340px;
  overflow: hidden;
  border: solid 2px #9c9c9c;
  height: 35px;
}
.sel_box select {
  background: transparent;
  padding: 6px;
  font-size: 17px;
  color: #555;
  width: 360px;
  border: 0;
  letter-spacing: -1px;
}
.sel_box_sml {
  background: url(../img/ico_arrow.gif) no-repeat 91% center;
  width: 130px;
  overflow: hidden;
  border: solid 2px #9c9c9c;
  height: 35px;
  float: left;
  margin-right: 5px;
}
.sel_box_sml select {
  background: transparent;
  padding: 6px;
  font-size: 17px;
  color: #555;
  width: 155px;
  border: 0;
  vertical-align: middle;
  letter-spacing: -1px;
}
.sel_box_mid {
  background: url(../img/ico_arrow.gif) no-repeat 91% center;
  width: 150px;
  overflow: hidden;
  border: solid 2px #9c9c9c;
  height: 35px;
  float: left;
  margin-right: 5px;
}
.sel_box_mid select {
  background: transparent;
  padding: 6px;
  font-size: 17px;
  color: #555;
  width: 175px;
  border: 0;
  vertical-align: middle;
  letter-spacing: -1px;
}
.sel_box_mini {
  background: url(../img/ico_arrow.gif) no-repeat 91% center;
  width: 80px;
  overflow: hidden;
  border: solid 1px #9c9c9c;
  height: 24px;
  float: left;
}
.sel_box_mini select {
  background: transparent;
  padding: 3px;
  font-size: 14px;
  color: #555;
  width: 105px;
  border: 0;
  vertical-align: middle;
  letter-spacing: -1px;
}
.num_basic {
  background: #e7e7e7;
  padding-left: 8px;
  border: solid 1px #d3d3d3;
  font-size: 17px;
  color: #555;
  height: 38px;
}
.num_basic.select {
  border: solid 2px #cf1939;
} /* bshell add */
.num_basic_find {
  background: #e7e7e7 url(../img/ico_find.png) no-repeat 4px center;
  background-size: 22px 22px;
  padding: 8px 8px 8px 30px;
  border: solid 1px #d3d3d3;
  font-size: 17px;
  height: 20px;
  color: #555;
  cursor: pointer;
}

/* Button*/
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

/* ETC */
.pt3 {
  padding-top: 3px;
}
.pt5 {
  padding-top: 5px;
}
.pl5 {
  padding-left: 5px;
}
.pl14 {
  padding-left: 14px;
}
.pb5 {
  padding-bottom: 5px;
}
.mb5 {
  margin-bottom: 5px;
}
.mb7 {
  margin-bottom: 7px;
}
.mb14 {
  margin-bottom: 14px;
}
.mb15 {
  margin-bottom: 15px;
}
.mb22 {
  margin-bottom: 22px;
}
.mt10 {
  margin-top: 10px;
}
.mT10 {
  margin-top: 10px;
}
.mt5 {
  margin-top: 5px;
}
.mt15 {
  margin-top: 15px;
}
.mT15 {
  margin-top: 15px;
}
.mb24 {
  margin-bottom: 24px;
}
.mt24 {
  margin-top: 24px;
}
.al_left {
  text-align: left;
}

/*bshell*/
.keyLng {
  width: 110px;
  height: 55px;
  border: 0;
  cursor: pointer;
  margin: 2px;
}
.key {
  width: 72px;
  height: 72px;
  border: 0;
  cursor: pointer;
}

#keybtnarea {
  background: #2a3355;
}
</style>
