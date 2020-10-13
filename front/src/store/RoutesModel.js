import { types, flow } from 'mobx-state-tree';
import Route from './RouteModel';

const Routes = types
  .model('Routes', {
    routeItems: types.maybeNull(types.array(Route)),
  })
  .actions((self) => ({}));

export default Routes;
