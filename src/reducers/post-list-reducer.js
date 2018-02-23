import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { author, content, tags, id, likes, timeStamp } = action;

  switch (action.type) {
  case c.ADD_POST: {
    newState = Object.assign({}, state, {
      [id]: {
        author: author,
        content: content,
        tags: tags,
        id: id,
        likes: likes,
        timeStamp: timeStamp
      }
    });
    return newState;
  }

  case c.UPDATE_LIKES: {
    // const newPost = Object.assign({}, state[id], {likes});
    let newLikes = likes;
    newLikes++;
    newState = Object.assign({}, state, {
      [id]: {
        author: author,
        content: content,
        tags: tags,
        id: id,
        likes: newLikes,
        timeStamp: timeStamp
      }
    });
    return newState;
  }
  default:
    return state;
  }
};
