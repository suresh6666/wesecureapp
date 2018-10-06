import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 4}); 

export default function fetchData(successData,errorData){   
  const URL=`https://5bab454aecc1a70014306a5a.mockapi.io/assets`;
  const config={
   method:"get",
   url:URL,
  };
  axios(config).then((response)=>{
   successData(response);
  }).catch(function(error){
    errorData(error);
  });

}