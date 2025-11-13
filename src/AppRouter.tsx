import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {TodosPage} from './pages';
import {Layout} from './components';
import {useAuthStore} from './authStore';

const ProtectedRoute = () => {
  const {user} = useAuthStore();
  if (!user) {
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
          <Route path="login" element={<div>Login page</div>} />
          <Route path="register" element={<div>Register</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
