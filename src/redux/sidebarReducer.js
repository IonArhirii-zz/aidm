let initialState = {
  menu: [
    {id: 1, link: '/profile', name: 'Profile'},
    {id: 2, link: '/dialogs', name: 'Messages'},
    {id: 3, link: '/news', name: 'News'},
    {id: 4, link: '/music', name: 'Music'},
    {id: 5, link: '/settings', name: 'Settings'},
  ],
  friends: [
    {id: 1, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Alex'},
    {id: 2, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Amy'},
    {id: 3, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Danny'}
  ]
};

const sidebarReducer = (state = initialState, action) => {
  
  return state;
};

export default sidebarReducer;