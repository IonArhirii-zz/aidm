const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
  users: [ ],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
        users: [...action.users]
      }
    }
    case SET_CURRENT_PAGE:  {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT:  {
      return {
        ...state,
        totalUsersCount: action.count
      }
    }
    case TOOGLE_IS_FETCHING:  {
      return {
        ...state,
        isFetching: action.isFetching
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
export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
};
export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  }
};
export const toogleIsFetchingAC = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching});

export default usersReduser;
