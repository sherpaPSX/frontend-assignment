import {useGetTodos} from '../hooks';

export const TodosPage = () => {
  const {data, isPending} = useGetTodos();
  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }
  return <div>Todos Page</div>;
};
