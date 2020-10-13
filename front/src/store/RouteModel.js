import { types, flow } from 'mobx-state-tree';
import { Place } from './PlaceModel';

const Route = types
  .model('Route', {
    routeName: types.maybeNull(types.string),
    id: types.maybeNull(types.string),
    creator: types.maybeNull(types.string),
    routeDescription: types.maybeNull(types.string),
    routeCategory: types.maybeNull(types.string),
    routeItems: types.maybeNull(types.array(Place)),
  })
  .actions((self) => ({}));

export default Route;
