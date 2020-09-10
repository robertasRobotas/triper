import React from 'react';

const CompanyPage = ({ history, location, rootModel }) => {
  if (!rootModel.auth.user.city) {
    rootModel.auth.addLinkToRedirect({
      linkToRedirectLater: history.location.pathname,
    });
    history.push('/addInfo');
  }
  return <>CompanyPage</>;
};

export default CompanyPage;
