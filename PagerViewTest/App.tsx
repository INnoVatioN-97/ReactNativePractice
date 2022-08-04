import React, {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import Container from './src/Container';

const App = () => {
  useEffect(() => console.log('앱 처음 실행됨...'), []);

  return (
    <RecoilRoot>
      <Container />
    </RecoilRoot>
  );
};

export default App;
