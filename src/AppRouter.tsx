import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {TodosPage, LoginPage, RegistrationPage} from './pages';
import {Layout, LoginLayout} from './components';
import {useAuthStore} from './authStore';

const ProtectedRoute = () => {
  const {username} = useAuthStore();
  if (!username) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<TodosPage />} />
            <Route path="add" element={<div>Add Todo</div>} />
            <Route path="edit/:id" element={<div>Edit Todo</div>} />
          </Route>
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
