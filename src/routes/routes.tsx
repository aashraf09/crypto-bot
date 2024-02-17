import Creators from '../pages/creators';
import Copiers from '../pages/copiers';

import PathConstants from './pathConstants';

const publicRoutes = [
    { path: PathConstants.CREATORS, component: Creators },
    { path: PathConstants.COPIERS, component: Copiers },
];

export { publicRoutes };
