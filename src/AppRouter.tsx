import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TodosPage, LoginPage, RegistrationPage} from './pages';
import {Layout, LoginLayout} from './components';
import {useAuthStore} from './authStore';

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
          <Route path="add" element={<div>Add Todo</div>} />
          <Route path="edit/:id" element={<div>Edit Todo</div>} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
