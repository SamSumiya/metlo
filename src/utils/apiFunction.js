import fetch from 'cross-fetch';

export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer sWiRwFpcRlQ4QYupz4jyGVDtefGAJywUXCOxSBcYSgA',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

export const getData = (url, id) => {
  return new Promise((resolve, reject) => {
    return fetch(`${url}${id}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sWiRwFpcRlQ4QYupz4jyGVDtefGAJywUXCOxSBcYSgA',
      },
    }) 
      .then((response) => response.json()) 
      .then((newData) => {
        if (newData.status === 'PENDING') { 
          // retry request after 1s
          setTimeout(() => {
            resolve(getData(url, id));
          }, 1000);
        } else {
          resolve(newData);
        }
      })
      .catch((error) => {
        reject(error.message);
      });
  }); 
};

// tested in terminal to make sure the data returns back !!
// postData(API_POST_URL, data)
//   .then((firstData) => {
//     return getData(API_GET_URL, firstData.id);
//   })
//   .then((secondData) => {
//     return secondData;
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });
