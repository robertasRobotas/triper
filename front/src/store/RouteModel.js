import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const User = types
  .model('User', {
    routeName: types.string,
    id: types.maybeNull(types.string),
    routeDescription: types.string,
    routeCategory: types.string,
    routeItems: types.maybeNull(types.array(types.string)),
  })
  .actions((self) => ({}));

export default User;
