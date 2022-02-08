import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const BarChart = () => {

const [values,setValues]=useState([{}])
useEffect(() => {
	fetch("http://localhost:5000/getdata").then(
        response => response.json()
    ).then(
        data =>{ setValues(data)}
    );
}, [])


const dataset = values.map(x => x.amount);
let backgroundcolor = [];
for(let i=0; i<dataset.length; i++){
    if(dataset[i]<1000){backgroundcolor.push('rgba(255, 99, 132, 0.2)')}
    if(dataset[i]>=1000 && dataset[i]<2000){backgroundcolor.push('rgba(75, 192, 192, 0.2)')}
    if(dataset[i]>=2000){backgroundcolor.push('rgba(255, 206, 86, 0.2)')}
    

}

  return (
      <div>
      <Bar
      data={{
        labels: values.map(x => x.status),
       


        datasets: [
        {
            label: 'CO2 level',
            data: dataset,  
            backgroundColor: backgroundcolor,
        },
    ]
      }}
      height={400}
      width={600}
      />
      </div>);
};

export default BarChart;
