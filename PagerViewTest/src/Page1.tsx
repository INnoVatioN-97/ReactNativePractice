import React, {memo, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {page1PropState} from './globalState/PageProps';

/**
 * 리코일을 사용한다고 가정했을 때의 소스코드
 * @returns
 */
const Page1 = () => {
  // API Response를 저장해둘 리코일 스테이트 변수
  const [page1Prop, setPage1Prop] = useRecoilState<string>(page1PropState);

  useEffect(() => {
    /* 
      이 번수내에 들어온 값이 없는 경우 API를 호출후, 18번 라인에서 해당 응답을 set해준다.
      어디선가 이 변수를 reset해주지 않는이상 이후로 API콜 하지 않음. 변수 또한 리코일에 의해 전역적으로 관리되므로
      언제든 이 페이지를 호출하면 저장된 값을 사용.  
      페이지 2, 3도 동일 로직.
    */
    if (page1Prop === '') {
      console.log();
      const num = new Array(9).fill(1);
      num.map(n => console.log(`${n}페이지 렌더링되는중`));
      // num.map(n => console.log(`${n} X ${num2++} = ${n * num2}`));
      setPage1Prop('대충 API 응답 받았다!');
      Alert.alert('페이지1 API 재호출중...');
      console.log();
    } else {
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>현재 페이지: 1</Text>
    </View>
  );
};

export default memo(Page1);
