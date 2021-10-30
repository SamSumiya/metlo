import React, { useState, useEffect } from 'react';
import { postData, getData } from '../utils/apiFunction';
const API_POST_URL = 'https://api.metlo.com/api/query';
const API_GET_URL = 'https://api.metlo.com/api/fetch/';

const QueryButton = ({ selected, selectedGroup }) => {
  console.log(selected, selectedGroup)

  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState({
    metrics: ['num_trips'],
    groups: ['product'],
    time_dimensions: [
      {
        dimension: 'trip_time',
        granularity: 'month',
      },
    ],
  });

  console.log(apiData);

  const handleClick = () => {
    setData({
      metrics: ['num_trips'],
      groups: selectedGroup,
      time_dimensions: [
        {
          dimension: 'trip_time',
          granularity: selected,
        },
      ],
    });
  };

  console.log(data)

  useEffect(() => {
    postData(API_POST_URL, data)
      .then((firstData) => {
        console.log(firstData);
        return getData(API_GET_URL, firstData.id);
      })
      .then((secondData) => {
        setApiData(secondData);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [data]);

  return (
    <div>
      <button type="button" className="query-btn" onClick={handleClick}>
        Query
      </button>
    </div>
  );
};

export default QueryButton;
