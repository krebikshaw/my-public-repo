import { useSelector, useDispatch } from 'react-redux';

import { getRepos, selectReps, selectIsLoading } from './redux/slice';

export default function useRep() {
  const dispatch = useDispatch();
  const reps = useSelector(selectReps);
  const isLoading = useSelector(selectIsLoading);

  const handleGetRepos = () => dispatch(getRepos());

  window.addEventListener('scroll', () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >
        document.body.clientHeight - 200 &&
      !isLoading
    ) {
      dispatch(getRepos());
    }
  });

  return {
    reps,
    handleGetRepos,
  };
}
