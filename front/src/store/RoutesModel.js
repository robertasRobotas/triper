import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const Routes = types
  .model('Routes', {
    routeItems: types.maybeNull(types.array(Route)),
  })
  .actions((self) => ({}));

const Route = types
  .model('Route', {
    routeName: types.string,
    id: types.maybeNull(types.string),
    routeDescription: types.string,
    routeCategory: types.string,
    routeItems: types.maybeNull(types.array(types.string)),
  })
  .actions((self) => ({}));

export { Routes, Route };
