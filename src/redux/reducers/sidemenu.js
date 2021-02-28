const sidemenu = (state = {compact:false}, action) => {
    switch (action.type) {
      case 'TOGGLE_COMPACT':
        return { ...state, compact: !state.compact}
      default:
        return state;
    }
};

export default sidemenu;