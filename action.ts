import { bindActionCreators } from 'redux';
import { todoSlice } from './todos/slice';
import { useDispatch } from './redux.hook';
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({
    ...todoSlice.actions,
  }, dispatch);
};