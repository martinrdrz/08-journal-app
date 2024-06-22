import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />;
    }

    return (
        <Routes>
            {status === 'authenticated' ? (
                <Route path='/*' element={<JournalRoutes />} /> //solo existe esta ruta si esta autenticado
            ) : (
                <Route path='/auth/*' element={<AuthRoutes />} /> //solo existe esta ruta sino esta autenticado, y tambien existe la ruta de abajo
            )}

            {/* tambien se suma esta ruta a alguna de las anteriores, que sireve para el caso en que no este autenticado, y no se haya escrito "/auth/*" en la url  */}
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    );
};
