import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import { Routes } from './RoutesModel';

const AppData = types
  .model('AppData', {
    suggestedRoutes: types.maybeNull(Routes),
    routeCategories: types.maybeNull(types.array(types.string)),
  })
  .actions((self) => ({}));

export { AppData };
