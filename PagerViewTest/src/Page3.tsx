/* eslint-disable react-native/no-inline-styles */
import React, {memo, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {page3PropState} from './globalState/PageProps';

const Page3 = () => {
  const [page3Prop, setPage3Prop] = useRecoilState<string>(page3PropState);

  useEffect(() => {
    if (page3Prop === '') {
      console.log();
      const num = new Array(9).fill(3);
      num.map(n => console.log(`${n}페이지 렌더링되는중`));
      // num.map(n => console.log(`${n} X ${num2++} = ${n * num2}`));
      setPage3Prop('대충 API 응답 받았다!');
      Alert.alert('페이지3 API 재호출중...');
      console.log();
    } else {
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>현재 페이지: 3</Text>
    </View>
  );
};

export default memo(Page3);
