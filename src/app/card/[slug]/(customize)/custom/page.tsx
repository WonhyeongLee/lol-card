import { Suspense } from 'react';

import Loading from './Loading';

import CustomPageContainer from '~/src/containers/customize/CustomPageContainer';

function Custom() {
  return (
    <Suspense fallback={<Loading />}>
      <CustomPageContainer />
    </Suspense>
  );
}

export default Custom;
