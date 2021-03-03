import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };
  
  return (<div>
    <form onSubmit={onSubmitHandler}>
      <input value={term} onChange={onChangeHandler}/>
      <button>Search</button>
    </form>
  </div>);
};

export default RepositoriesList;