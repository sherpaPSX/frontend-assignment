import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TodosPage, LoginPage, RegistrationPage, EditTodoPage, DetailTodoPage} from './pages';
import {Layout, LoginLayout} from './components';
import {useAuthStore} from './authStore';
import {CreateTodoPage} from './pages/CreateTodoPage';
import {NotFoundPage} from './pages/NotFoundPage';

const ProtectedRoute = () => {
  const {username, hydrated} = useAuthStore();

  if (!hydrated) return null;

  if (!username) return <Navigate to="/login" replace />;

  return <Layout />;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<TodosPage />} />
          <Route path="todo/new" element={<CreateTodoPage />} />
          <Route path="todo/:id" element={<DetailTodoPage />} />
          <Route path="todo/:id/edit" element={<EditTodoPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
