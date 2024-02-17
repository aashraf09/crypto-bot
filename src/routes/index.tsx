import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes } from './routes';
import Layout from '../components/layout';
import PathConstants from './pathConstants';

const Index = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={PathConstants.CREATORS} />} />
            {publicRoutes.map((route, idx) => (
                <Route
                    path={route.path}
                    element={
                        <Layout>
                            <route.component />
                        </Layout>
                    }
                    key={idx}
                />
            ))}
        </Routes>
    );
};

export default Index;
