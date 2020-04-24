const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {id: 4, photoUrl: 'https://img.icons8.com/plasticine/2x/user.png',
    //   followed: true, fullName:'Andrey', status: 'I\'m a boss 4', 
    //   location: {city: 'Iasi', country: 'Romania'}}
  ]
};

const usersReduser = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: {
      return {
        ...state, 
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    }
    case UNFOLLOW:  {
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    }
    case SET_USERS:  {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export default usersReduser;
