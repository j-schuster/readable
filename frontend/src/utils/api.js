let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

export const API = `http://localhost:3001`;
export const owner = 'Johann';

export const headers = {
  Accept: 'application/json',
  Authorization: owner
};

//CATEGORIES
export const fetchAllCategories = () => {
	return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)
}
// POSTS
export const fetchAllPosts = () => {
	return fetch(`${API}/posts`, { headers })
    .then(res => res.json())
    .then(data => data) 
}

export const fetchCategoryPosts = (category) => {
	return fetch(`${API}${category}/posts`, { headers })  
    .then(res => res.json())
    .then(data => data)
}

export const fetchPostDetails = (id) => {
	return fetch(`${API}${id}`, { headers }) 
    .then(res => res.json())
    .then(data => data)
}

//============ POST REQUESTS ===========//
// POST a comment 
export const addComment = (comment) => {
  return fetch(`${API}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type' : 'application/json' 
    },
     body: JSON.stringify(comment)
  })
  .then(data => data.json())
}
// POST/posts
export const addNewPost = (post) => {
  return fetch(`${API}/posts`, {      // second arg = object that states method
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type' : 'application/json'  
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

// POST /posts/:id

// POST /comments

// POST /comments/:id


// ==================== DELETE ====================//

// delete post 
export const deletePost = (id) => {
return fetch( `${API}/posts/${id}`, {
  method: 'DELETE',
  headers
  })
}

// COMMENTS
export const fetchComments = (id) => {
  return fetch(`${API}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}

// delete comment 
export const deleteComment = (id) => {
  return fetch(`${API}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
}

/*==================== PUT REQUESTS =======================*/
export const editPost = (id, post) => {
  return fetch(`${API}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}
















