import React, {memo, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {page2PropState} from './globalState/PageProps';

const Page2 = () => {
  const [page2Prop, setPage2Prop] = useRecoilState<string>(page2PropState);

  useEffect(() => {
    if (page2Prop === '') {
      console.log();
      const num = new Array(9).fill(2);
      num.map(n => console.log(`${n}페이지 렌더링되는중`));
      // num.map(n => console.log(`${n} X ${num2++} = ${n * num2}`));
      setPage2Prop('대충 API 응답 받았다!');
      Alert.alert('페이지2 API 재호출중...');
      console.log();
    } else {
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>현재 페이지: 2</Text>
    </View>
  );
};

export default memo(Page2);
