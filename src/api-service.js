import config from './config';

export const fetchUserProfile = userid => {
    console.log(config.API_BASE_URL)
  fetch(`${config.API_BASE_URL}/users/${userid}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(console.log)
    .catch(console.log)
};
