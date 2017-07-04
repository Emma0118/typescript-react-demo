// reducer.js
interface Action {
  type: string;
}

export const getUser = (state = {name: ''}, action: Action) => {
  switch (action.type) {
    case 'GET_USER1':
      return {name: 'liujians', age: 24};
    case 'GET_USER2':
      return {name: 'John', age: 18};
    case 'GET_USER3':
      return {name: 'Mike', age: 31};
    case 'GET_USER4':
      return {name: 'Tom', age: 42};
    default:
      return state;
  }
};