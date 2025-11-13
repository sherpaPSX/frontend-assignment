import {useGetTodos} from '../hooks';

export const TodosPage = () => {
  const {data} = useGetTodos();
  console.log(data);

  return <div>Todos Page</div>;
};
