import { types, flow } from 'mobx-state-tree';
import Routes from './RoutesModel';
import Route from './RouteModel';
import { Place } from './PlaceModel';

const AppData = types
  .model('AppData', {
    suggestedRoutes: types.maybeNull(Routes),
    routeCategories: types.maybeNull(types.array(types.string)),
    currentPlace: types.maybeNull(Place),
    route: types.maybeNull(Route),
  })
  .actions((self) => ({}));

export default AppData;
