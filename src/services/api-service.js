import config from '../config';
import TokenService from '../services/token-service';

/* FETCH */

export const fetchUsers = () => {
  return fetch(`${config.API_BASE_URL}/users`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
};

export const fetchItems = () => {
    return fetch(`${config.API_BASE_URL}/items`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchPrograms = () => {
    return fetch(`${config.API_BASE_URL}/programs`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchPurchases = () => {
    return fetch(`${config.API_BASE_URL}/purchases`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchReviews = () => {
    return fetch(`${config.API_BASE_URL}/reviews`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchPromos = () => {
    return fetch(`${config.API_BASE_URL}/promos`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchArticles = () => {
    return fetch(`${config.API_BASE_URL}/articles`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const fetchTestimonies = () => {
    return fetch(`${config.API_BASE_URL}/testimonies`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
  };

  export const postReview = (reviewid, content, rating) => {
    return fetch(`${config.API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        review_id: reviewid,
        content,
        rating
      }),
    })
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
      })
  }


