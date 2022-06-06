const CHECK_STATUS = 'react-app/categories/CHECK_STATUS';
const INITIAL_STATE = [];

export default function categoriesReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECK_STATUS };
}
