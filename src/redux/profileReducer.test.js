import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you', likesCount: '8'},
    {id: 2, message: 'It\'s my first post man', likesCount: '22'},
    {id: 3, message: 'Second post ihuuuuu', likesCount: '32'},
    {id: 4, message: 'mesajul Nr 4', likesCount: '12'}
  ]
};

it('length of post should be increment', () => {
  // 1.test 
  let action = addPostActionCreator('aidm-Ion');
  // 2.action
  let newState = profileReducer(state, action);
  
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it('message of new posts should be correct', () => {
  // 1.test 
  let action = addPostActionCreator('aidm-Ion');
  // 2.action
  let newState = profileReducer(state, action);
  
  // 3. expectation
  expect(newState.posts[4].message).toBe('aidm-Ion');
});

it('after deleting length of messages should be decremented', () => {
  // 1.test 
  let action = deletePost(1);
  
  // 2.action
  let newState = profileReducer(state, action);
  
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('after deleting length of messages shouldn\'t be decremented if id is incorrect', () => {
  // 1.test 
  let action = deletePost(1000);
  
  // 2.action
  let newState = profileReducer(state, action);
  
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
