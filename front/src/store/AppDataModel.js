import { types, flow } from 'mobx-state-tree';
import { Routes } from './RoutesModel';
import { Place } from './PlaceModel';

const AppData = types
  .model('AppData', {
    suggestedRoutes: types.maybeNull(Routes),
    routeCategories: types.maybeNull(types.array(types.string)),
    currentPlace: types.maybeNull(Place),
  })
  .actions((self) => ({}));

export default AppData;
