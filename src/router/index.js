import Vue from 'vue';
import VueRouter from 'vue-router';
// import AppInput from '../views/AppInput.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AppMain',
    component: () => import('@/views/AppMain.vue'),
  },
  {
    path: '/9998',
    name: '9998',
    component: () => import('@/views/Univ/Univ9998.vue'),
  },
  {
    path: '/1003',
    name: '1003',
    component: () => import('@/views/Univ/Univ1003.vue'),
  },
  {
    path: '/1006',
    name: '1006',
    component: () => import('@/views/Univ/Univ1006.vue'),
  },
  {
    path: '/1009',
    name: '1009',
    component: () => import('@/views/Univ/Univ1009.vue'),
  },
  {
    path: '/1010',
    name: '1010',
    component: () => import('@/views/Univ/Univ1010.vue'),
  },
  {
    path: '/1017',
    name: '1017',
    component: () => import('@/views/Univ/Univ1017.vue'),
  },
  {
    path: '/1028',
    name: '1028',
    component: () => import('@/views/Univ/Univ1028.vue'),
  },
  {
    path: '/1035',
    name: '1035',
    component: () => import('@/views/Univ/Univ1035.vue'),
  },
  {
    path: '/1044',
    name: '1044',
    component: () => import('@/views/Univ/Univ1044.vue'),
  },
  {
    path: '/1046',
    name: '1046',
    component: () => import('@/views/Univ/Univ1046.vue'),
  },
  {
    path: '/1050',
    name: '1050',
    component: () => import('@/views/Univ/Univ1050.vue'),
  },
  {
    path: '/1055',
    name: '1055',
    component: () => import('@/views/Univ/Univ1055.vue'),
  },
  {
    path: '/1059',
    name: '1059',
    component: () => import('@/views/Univ/Univ1059.vue'),
  },
  {
    path: '/1067',
    name: '1067',
    component: () => import('@/views/Univ/Univ1067.vue'),
  },
  {
    path: '/1072',
    name: '1072',
    component: () => import('@/views/Univ/Univ1072.vue'),
  },
  {
    path: '/1074',
    name: '1074',
    component: () => import('@/views/Univ/Univ1074.vue'),
  },
  {
    path: '/1075',
    name: '1075',
    component: () => import('@/views/Univ/Univ1075.vue'),
  },
  {
    path: '/1088',
    name: '1088',
    component: () => import('@/views/Univ/Univ1088.vue'),
  },
  {
    path: '/1095',
    name: '1095',
    component: () => import('@/views/Univ/Univ1095.vue'),
  },
  {
    path: '/1098',
    name: '1098',
    component: () => import('@/views/Univ/Univ1098.vue'),
  },
  {
    path: '/1123',
    name: '1123',
    component: () => import('@/views/Univ/Univ1123.vue'),
  },
  {
    path: '/1126',
    name: '1126',
    component: () => import('@/views/Univ/Univ1126.vue'),
  },
  {
    path: '/1131',
    name: '1131',
    component: () => import('@/views/Univ/Univ1131.vue'),
  },
  {
    path: '/1140',
    name: '1140',
    component: () => import('@/views/Univ/Univ1140.vue'),
  },
  {
    path: '/1160',
    name: '1160',
    component: () => import('@/views/Univ/Univ1160.vue'),
  },
  {
    path: '/1163',
    name: '1163',
    component: () => import('@/views/Univ/Univ1163.vue'),
  },
  {
    path: '/1171',
    name: '1171',
    component: () => import('@/views/Univ/Univ1171.vue'),
  },
  {
    path: '/1187',
    name: '1187',
    component: () => import('@/views/Univ/Univ1187.vue'),
  },
  {
    path: '/3004',
    name: '3004',
    component: () => import('@/views/Univ/Univ3004.vue'),
  },
  {
    path: '/3015',
    name: '3015',
    component: () => import('@/views/Univ/Univ3015.vue'),
  },
  {
    path: '/3016',
    name: '3016',
    component: () => import('@/views/Univ/Univ3016.vue'),
  },
  {
    path: '/:UnivID/input',
    name: 'AppInput',
    component: () => import('@/views/AppInput.vue'),
  },
  {
    path: '/:UnivID/Info',
    name: 'AppInfo',
    component: () => import('@/views/AppInfo.vue'),
  },
  {
    path: '/Detail:page',
    name: 'Detail',
    component: () => import('@/components/MajorDetail.vue'),
  },
  {
    path: '/addionInfoType1',
    name: 'addionInfoType',
    component: () => import('@/resource/9998/html/addioninfo1.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
