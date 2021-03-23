import config from '../config';
import TokenService from '../services/token-service';

/* FETCH */

export const fetchUploads = () => {
  return fetch(`${config.API_BASE_URL}/api/uploads`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchUsers = () => {
  return fetch(`${config.API_BASE_URL}/api/users`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchItems = () => {
  return fetch(`${config.API_BASE_URL}/api/items`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchPrograms = () => {
  return fetch(`${config.API_BASE_URL}/api/programs`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchPurchases = () => {
  return fetch(`${config.API_BASE_URL}/api/purchases`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchReviews = () => {
  return fetch(`${config.API_BASE_URL}/api/reviews`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchPromos = () => {
  return fetch(`${config.API_BASE_URL}/api/promos`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchArticles = () => {
  return fetch(`${config.API_BASE_URL}/api/articles`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchTestimonies = () => {
  return fetch(`${config.API_BASE_URL}/api/testimonies`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

// use above error handling to post requests

export const fetchIsAdminCheck = () => {
  return fetch(`${config.API_BASE_URL}/api/promos/is-admin`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

/* POST */

export const uploadPhoto = formData => {
  return fetch(`${config.API_BASE_URL}/api/uploads`, {
    method: 'POST',
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: formData,
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postReview = (content, rating, itemid) => {
  return fetch(`${config.API_BASE_URL}/api/reviews`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify({
      itemid,
      content,
      rating,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postPromo = (title, content) => {
  return fetch(`${config.API_BASE_URL}/api/promos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify({
      title,
      content,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postArticle = (title, content) => {
  return fetch(`${config.API_BASE_URL}/api/articles`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify({
      title,
      content,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postTestimony = (photo, content) => {
  return fetch(`${config.API_BASE_URL}/api/testimonies`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify({
      photo,
      content,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postItem = (photo, title, price, category, description) => {
  return fetch(`${config.API_BASE_URL}/api/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify({
      photo,
      title,
      price,
      category,
      description,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postUser = (
  name,
  email,
  address,
  state,
  zip,
  user_name,
  password
) => {
  return fetch(`${config.API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      address,
      state,
      zip,
      user_name,
      password,
    }),
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        'Something went wrong posting "users", please try again later'
      );
    }
    return res.json();
  });
};

/* DELETE */

export const deleteItem = item_id => {
  return fetch(`${config.API_BASE_URL}/api/items/${item_id}`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong deleting ${item_id}, please try again later.`
      );
    }
  });
};

export const deleteTestimony = testimony_id => {
  return fetch(`${config.API_BASE_URL}/api/testimonies/${testimony_id}`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong deleting ${testimony_id}, please try again later.`
      );
    }
  });
};

export const deletePromo = promo_id => {
  return fetch(`${config.API_BASE_URL}/api/promos/${promo_id}`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong deleting ${promo_id}, please try again later.`
      );
    }
  });
};

export const deleteArticle = article_id => {
  return fetch(`${config.API_BASE_URL}/api/articles/${article_id}`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong deleting ${article_id}, please try again later.`
      );
    }
  });
};

/* PATCH */

export const editUserDetails = (
  user_id,
  photo,
  name,
  user_name,
  email,
  address,
  state,
  zip
) => {
  return fetch(`${config.API_BASE_URL}/api/users/${user_id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
      photo,
      name,
      user_name,
      email,
      address,
      state,
      zip,
    }),
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong updating ${user_name}, please try again later.`
      );
    }
    return res.json();
  });
};
