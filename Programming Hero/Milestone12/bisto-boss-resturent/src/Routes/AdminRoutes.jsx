
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        <progress className='progress w-56'></progress>
    }

    if (user && isAdminLoading) {
        return <progress className='progress w-56'></progress>
    }

    return <Navigate to='/' state={{ from: location }} replace>

    </Navigate>
};

export default AdminRoutes;