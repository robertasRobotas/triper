import React from 'react';
import Wrapper from '../../_hoc/Wrapper';
import { observer } from 'mobx-react';
import { MainSearch } from '../../organisms';
import { Button } from '../../atoms';
import '../pages.css';
import './Main.css';

const Main = ({ history, location, rootModel }) => {
  if (!rootModel.auth.user.city) {
    history.push('/addInfo');
  }

  return (
    <Wrapper
      history={history}
      rootModel={rootModel}
      location={location}></Wrapper>
  );
};

export default observer(Main);
