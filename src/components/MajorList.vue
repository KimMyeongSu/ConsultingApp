<template>
  <div>
    <div>
      <table id="listInfo" class="table">
        <thead>
          <tr>
            <th>모집시기</th>
            <th>모집단위</th>
            <th>최고</th>
            <th>평균</th>
            <th>최저</th>
            <th>차이</th>
            <th>내점수</th>
            <th>진단</th>
          </tr>
        </thead>
        <tbody id="contacts">
          <tr v-for="item in items" v-bind:key="item">
            <td>{{ item[1] }}</td>
            <td>
              <!-- 동적 라우팅 처리 item[23] 값 -->
              <router-link to="addionInfoType1" class="container">
                {{ item[5] }}</router-link
              >
            </td>
            <td>{{ item[7] }}</td>
            <td>{{ item[8] }}</td>
            <td>{{ item[9] }}</td>
            <td>내점수-평균</td>
            <td>Inputdata</td>
            <td>img</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UnivData from '../store/Univdata.json';
const univdata = UnivData;
export default {
  data() {
    return { items: univdata.Rows };
  },
};
</script>

<style>
.container {
  color: #030303;
  text-decoration: none;
}
.table {
  width: 80%;
  border-collapse: collapse;
  border-top: 3px solid rgb(100, 103, 104);
}
.table th {
  color: #f0f6f9;
  background: rgb(100, 103, 104);
  text-align: center;
}
.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}
.table th:first-child,
.table td:first-child {
  border-left: 0;
}
.table th:last-child,
.table td:last-child {
  border-right: 0;
}
.table tr td:first-child {
  text-align: center;
}
.table caption {
  caption-side: bottom;
  display: none;
}
</style>
