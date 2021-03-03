import {useState} from 'react';
import {useActions} from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (<div>
    <form onSubmit={onSubmitHandler}>
      <input value={term} onChange={onChangeHandler}/>
      <button>Search</button>
    </form>
  </div>);
};

export default RepositoriesList;