import { types } from 'mobx-state-tree';

import AuthModel from './AuthModel';
import AppDataModel from './AppDataModel';

const Root = types.model('Root', {
  auth: AuthModel,
  appData: types.maybeNull(AppDataModel),
});

export default Root;
