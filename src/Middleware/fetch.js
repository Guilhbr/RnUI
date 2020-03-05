import _ from 'lodash';

export function getPosts(userId) {
  try {
    const url = parseInt(userId, 10) ? `?userId=${userId}` : '';
    return fetch(`https://jsonplaceholder.typicode.com/posts${url}`)
      .then(response => response.json())
      .then(json => {
        return _.uniqBy(json, 'id');
      });
  } catch (e) {
    console.log(e);
    return [];
  }
}
