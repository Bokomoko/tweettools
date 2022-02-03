import axios from 'axios'
export async function fetchUserID(reqUserName) {
    const queryUserID = `http://localhost:3000/api/getuserid/${reqUserName}`;
    const response = await axios.get(queryUserID, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.json();
    console.log(`UserID is ${data}`);
    return { userID: data };
  }
  
  export async function fetchFollowers(userID) {
    const response = await axios.get(
      `localhost:3000/api/getfollowers/${userID}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }
    );
    const { followers:listOfFollowers } = response.data;
    return { listOfFollowers };
  }
  