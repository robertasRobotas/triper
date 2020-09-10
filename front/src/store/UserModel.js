import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const User = types
  .model('User', {
    displayName: types.string,
    id: types.string,
    email: types.string,
    picture: types.string,
    city: types.maybeNull(types.string),
    preferredSports: types.maybeNull(types.array(types.string)),
  })
  .actions((self) => ({
    saveCityToModel({ city }) {
      self.city = city;
    },
    savePreferredSportsToModel({ preferredSports }) {
      self.preferredSports = preferredSports;
    },
    sendAdditionalData: flow(function* sendAdditionalData({
      history,
      linkToRedirectLater,
    }) {
      let additionalData = {
        city: self.city,
        preferredSports: self.preferredSports,
      };

      yield axios
        .post(
          `${process.env.REACT_APP_SERVER_HOST}/api/user/addAdditionalData`,
          additionalData,
          {
            withCredentials: true,
          }
        )
        .then(() => {
          linkToRedirectLater
            ? history.push('/')
            : history.push(`${linkToRedirectLater}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
  }));

export default User;
