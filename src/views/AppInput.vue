<template>
  <div>
    <TopHeader></TopHeader>
    <InputScore></InputScore>
  </div>
</template>
<script>
import TopHeader from '../components/TheTopHeader.vue';
import InputScore from '../components/InputScore.vue';

export default {
  components: {
    InputScore,
    TopHeader,
  },

  name: 'AppInput',
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
.num_free {
  background: #e7e7e7;
  padding: 8px;
  border: solid 1px #d3d3d3;
  font-size: 17px;
  height: 20px;
  color: #555;
}
.email_input {
  margin-right: 5px;
  overflow: hidden;
  clear: both;
  display: inline-block;
  /* float: left; */
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
.btn_red2 {
  background: #cf1939;
  border-bottom: solid 3px #bd0e0e;
  width: 238px;
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 22px;
  text-align: center;
  padding: 16px 0 15px 0;
  display: inline-block;
}
.btn_mint2 {
  background: #bededd;
  border-bottom: solid 3px #a2d0ce;
  width: 238px;
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 22px;
  text-align: center;
  padding: 16px 0 15px 0;
  display: inline-block;
}
.btn_small_red2 {
  background: #cf1939;
  border: solid 2px #bd0e0e;
  color: #fff;
  letter-spacing: -1px;
  font-size: 14px;
  text-align: center;
  padding: 2px 6px;
  display: inline-block;
}
.btn_small_mint2 {
  background: #bededd;
  border: solid 2px #a2d0ce;
  color: #000;
  letter-spacing: -1px;
  font-size: 14px;
  text-align: center;
  padding: 2px 6px;
  display: inline-block;
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
.al_center {
  text-align: center;
}
.al_right {
  text-align: right;
}
.fl_l {
  float: left;
}
.fl_r {
  float: right;
}
.cl_b {
  clear: both;
}
.red_24px {
  color: #ce1938;
  font-size: 24px;
}
.red_14px {
  color: #ce1938;
  font-size: 14px;
}
.white_14px {
  color: #fff;
  font-size: 14px;
}
.red_15px {
  color: #ce1938;
  font-size: 15px;
}
.blue_14px {
  color: #37628f;
  font-size: 14px;
}
.blue_24px {
  color: #37628f;
  font-size: 24px;
}
.hei_700 {
  height: 700px;
}

/* for list ... start */
.x-list1 {
  position: relative;
}
.x-list1-inner {
  width: 100%;
  background: #34406a;
  text-align: left;
}
.x-list1-item-relative {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  padding: 16px 20px;
  border-bottom: solid 1px #242d4d;
}
.x-list1-item-relative div.x-innerhtml {
  font-size: 14px;
}
.x-list1-item-relative.x-item-selected {
  background: #9fd9d7;
  border-bottom: solid 3px #75c9c6;
}

.x-nested-list1 {
  position: relative;
}
.x-nested-list1-inner {
  width: 100%;
  background: #34406a;
  text-align: left;
}
.x-nested-list1-item-relative {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  padding: 16px 20px;
  border-bottom: solid 1px #242d4d;
}
.x-nested-list1-item-relative span {
  font-size: 14px;
}
.x-nested-list1-item-relative.x-item-selected {
  background: #9fd9d7;
  border-bottom: solid 3px #75c9c6;
}

/* for list ... end */

#searchText div.x-field-input {
  margin-top: 4px;
}
#searchText input {
  margin-left: 25px;
}

/*bshell*/
.keyLng {
  width: 110px;
  height: 55px;
  border: 0;
  cursor: pointer;
}
.key {
  width: 72px;
  height: 72px;
  border: 0;
  cursor: pointer;
}

#txtSchoolName {
  background-color: Transparent;
}
#txtSchoolName div.x-component-outer {
  padding-top: 3px;
}
#txtSchoolName input {
  padding-left: 15px;
}
.popMenu {
  overflow: hidden;
}
.popMenu div.x-inner.x-panel-inner {
  background-color: #343f6a;
}
.popModify {
  overflow: hidden;
}
.popMenu div.x-anchor.x-anchor-top {
  display: none;
}

#scoreChartTitle,
#ratioChartTitle,
#rateChartTitle {
  width: 100%;
  text-align: left;
  margin-bottom: 14px;
  padding-left: 10px;
} /*그래프 박스 안의 타이틀*/
#MajorDescription {
  padding: 0;
  text-align: left;
}
#calcScoreArea {
  text-align: left;
}
#consultStaticsPanel div.x-inner.x-form-inner.x-translatable.x-scroll-scroller {
  padding: 0;
}
#MajorStatisticsPanel
  div.x-inner.x-form-inner.x-translatable.x-scroll-scroller {
  padding: 0;
}

/* 관리자 - 설정 */
#optionSettingPanel div.x-inner.x-form-inner.x-translatable.x-scroll-scroller {
  padding: 0;
}
#optionSettingPanel div.x-scroll-container.x-translatable-container {
  background-color: #fff;
}
#optionSettingPanel div.x-container {
  margin-bottom: 20px;
}
.setting_dt {
  background-color: #fff;
}
.setting_dt span {
  color: #555;
  letter-spacing: -1px;
  font-size: 17px;
  font-weight: normal;
}

.setting_dl div:nth-child(2) .x-toggle {
  float: right;
}
.setting_input {
  background-color: #fff;
  text-align: right;
  font-family: malgun gothic, '맑은 고딕';
  font-size: 17px;
  font-weight: normal;
  letter-spacing: -1px;
}

#optionSettingPanel div.x-thumb {
  position: absolute;
  height: 1.7em;
  width: 1.7em;
}
#optionSettingPanel div.x-thumb:before {
  content: '';
  position: absolute;
  width: 1.85em;
  height: 1.75em;
  top: 0.175em;
  left: 0.175em;
  border: none;
  -webkit-border-radius: 0.925em;
  border-radius: 0.925em;
  background-image: none;
  background-color: #fff;
  -webkit-background-clip: padding;
  background-clip: padding-box;
}
#optionSettingPanel div.x-toggle {
  margin-top: 6px;
  margin-right: 12px;
  padding-right: 6px;
  width: 3.9em;
  height: 2.3em;
  -webkit-border-radius: 1.1em;
  border-radius: 1.1em;
  overflow: hidden;
  border: 1px solid #9fd9d7;
  background-image: none;
  background-color: #9fd9d7;
  -webkit-box-flex: 0;
}
#optionSettingPanel div.x-toggle-on {
  background-image: none;
  background-color: #34406a;
  border: 1px solid #34406a;
}

.layer_popup_03 {
  text-align: left;
}
.layer_popup_03 h2 {
  margin-top: 10px;
}
.layer_popup_03 div.x-anchor {
  display: none;
}
.layer_popup_03 input {
  font-size: 17px;
}

.x-selectmark-base,
.x-field-select .x-component-outer:after {
  display: none;
}
.x-selectmark-base,
.x-field-select .x-component-outer:before {
  display: none;
}

tspan {
  letter-spacing: -1px;
  font-size: 14px;
} /* 그래프의 글자 영역들 */

.toolbar1 {
  background: #34406a;
  text-align: center;
  border-bottom: solid 1px #242d4d;
  color: #fff;
  height: 50px;
}
.toolbar1 div {
  font-weight: normal;
  font-size: 17px;
  letter-spacing: -1px;
}

/* Info Type */

.infoType.red_box {
  background: #cf1939;
}
.infoType.mint_box {
  background: #9fd9d7;
}
.infoType.blue_box {
  background: #37618f;
}

/* 찾아오는 길 */
#address {
  font-size: 12pt;
  color: #37618f;
  cursor: pointer;
  padding-left: 15px;
  margin-bottom: 20px;
  text-align: left;
}

/*detail에서 부가정보 영역*/
#DetailAddInfoZone.w974 {
  width: 974px !important;
}

/*box*/
.box_round_cyan {
  color: #fff;
  font-weight: normal;
  border: solid 1px #1f5a6a;
  background: #31859c;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#3694ae),
    to(#3990a8)
  );
  background: -moz-linear-gradient(top, #3694ae, #3990a8);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3694AE', endColorstr='#3990A8');
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  padding: 7px 15px 8px 15px;
  overflow: hidden;
  text-shadow: -1px -1px #226d82, 1px 1px #226d82;
}
.box_round_cyan strong {
  color: #ffff00;
}

/*전남대 셀 색 입히기*/
.jnu_bg_red {
  background-color: rgba(255, 0, 0, 0.08) !important;
}
.jnu_bg_green {
  background-color: rgba(0, 255, 0, 0.08) !important;
}

#hsbCustomKeyBoard div {
  background-color: Transparent !important;
}
#hsbCustomKeyBoard
  div.x-inner.x-panel-inner.x-vertical.x-align-stretch.x-pack-start.x-layout-box {
  padding-left: 8px;
  padding-top: 8px;
}
</style>
