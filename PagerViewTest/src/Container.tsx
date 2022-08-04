import {useCallback, useRef} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import {atom, useRecoilState, useResetRecoilState} from 'recoil';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import React from 'react';
import {
  page1PropState,
  page2PropState,
  page3PropState,
} from './globalState/PageProps';

const pageIdxAtom = atom({
  key: 'pageIdx',
  default: 0,
});

const Container = () => {
  const [curPage, setCurPage] = useRecoilState(pageIdxAtom);
  const pagerViewRef = useRef(null);

  const RenderPage = useCallback(() => {
    pagerViewRef.current?.setPageWithoutAnimation(curPage);
    switch (curPage) {
      case 0: {
        return <Page1 key={0} />;
      }
      case 1: {
        return <Page2 key={0} />;
      }
      case 2: {
        return <Page3 key={0} />;
      }
      // default:
      //   return <Page1 key={0} />;
    }
  }, [curPage]);

  return (
    <>
      <PagerView
        ref={pagerViewRef}
        style={{flex: 1, backgroundColor: 'tomato'}}
        initialPage={0}>
        {/* <Page1 key={0} />
        <Page2 key={1} />
      <Page3 key={2} /> */}
        <RenderPage />
      </PagerView>

      <Footer
        onPageChange={(selected: number) => {
          console.log(selected + 1, '페이지 눌림');
          setCurPage(selected);
        }}
      />
    </>
  );
};

export default Container;

/**
 * 앱사진 내에 하단 바
 * 초기화 버튼을 누를 경우 해당하는 리코일 스테이트를 초기화할 수 있음
 * 초기화 하는 경우 다시 해당 페이지에서 API콜을 다시 할 수 있음
 *  - 에디터에서 글 작성 이후 내홈을 재 렌더링해야하는 경우에 해당.
 *  - 지금처럼 에디터에서 홈으로 돌아오면서 내홈의 해당하는 씬만 (저장이든, 오픈이든)
 *    reset처리하고 내홈으로 돌아오면 알아서 재호출을 하던, isDirBelow를 true로 해서 최신값만 가져오던 처리할 수 있을것같음.
 * @param param0
 * @returns
 */
function Footer({onPageChange}: {onPageChange: Function}) {
  const resetPage1 = useResetRecoilState(page1PropState);
  const resetPage2 = useResetRecoilState(page2PropState);
  const resetPage3 = useResetRecoilState(page3PropState);
  return (
    <View>
      <View style={styles.upperContainer}>
        <TouchableOpacity
          onPress={() => {
            resetPage1();
          }}>
          <Text>페이지 1 초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            resetPage2();
          }}>
          <Text>페이지 2 초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            resetPage3();
          }}>
          <Text>페이지 3 초기화</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            onPageChange(0);
          }}
          style={styles.bottomTouchArea}>
          <View>
            <Text style={styles.bottomText}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPageChange(1);
          }}
          style={styles.bottomTouchArea}>
          <View>
            <Text style={styles.bottomText}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPageChange(2);
          }}
          style={styles.bottomTouchArea}>
          <View>
            <Text style={styles.bottomText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    height: 30,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    height: 100,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  bottomTouchArea: {justifyContent: 'center', alignItems: 'center', flex: 1},
  bottomText: {fontSize: 25},
});
