
import routes from './index';

const allRoutes = routes.reduce((acc: Array<object>, cur: any) => {
  if (cur.route) {
    return acc.concat(cur.route);
  } else {
    return acc.concat(cur);
  }
}, [] as Array<object>);
export default allRoutes;