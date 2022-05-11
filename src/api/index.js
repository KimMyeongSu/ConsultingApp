// import axios from 'axios';
import UnivData from '@/store/Univdata.json';

const api = {
  /* 
1. Service Setting Data  Main(A,B,C) 
2. MajorList Data 
 */
  UnivSetData: UnivData,
};

function fetchUnivData() {
  return api.UnivSetData;
}
/*
function SampleFnc() {
    
  }
*/
export { fetchUnivData };
