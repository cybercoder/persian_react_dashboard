const search = (state = {value:''}, action) => {
    switch (action.type) {
      case 'SEARCH':
        return {...state, value: action.payload};
      default:
        return state;
    }
  };
export default search;