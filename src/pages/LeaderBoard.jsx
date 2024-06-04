// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Bord from '../components/LeaderBoard/Board';
import LeaderBar from '../components/LeaderBoard/LeaderBar';
import TableData from '../components/LeaderBoard/TableData';
import CardPoint from '../components/LeaderBoard/CardPoint';

const LeaderBoard = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchTopUsers = async () => {
        try {
          const response = await fetch('http://localhost:4000/leaderboard/top-users');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching top users:', error);
        }
      };
  
      fetchTopUsers();
    }, []);
  
return (
    


<div className ="container">

<LeaderBar/>

<Bord/>

<CardPoint data={data}/>

<TableData data={data}/>



</div>



);
};

export default LeaderBoard;
