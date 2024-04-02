
[감정 일기장 프로젝트](../emotion_diary)

# 폰트 파일 적용하기
```css
/* 폰트파일 정보 등록 */
@font-face {
  /* 사용할 이름 */
  font-family: "NanumPenScript";
  /* 파일 위치 */
  src: url("../public/NanumPenScript-Regular.ttf");
}

/* 적용 */
body * {
  font-family: "NanumPenScript";
}
```

# 이미지 적용하기
- vite의 이미지 최적화 기능을 사용하기 위해서는 public 폴더보다 assets를 사용하는 것이 좋다 
  - assets에서 가져오면 배포 모드에서 캐싱되어 base24로 메모리에 저장됨 : 최적화시킴
  - 이미지 수가 너무 많은 경우 캐싱은 오히려 브라우저에 과부하를 줄 수 있음
- 컴포넌트 파일에 연결
```jsx
import emotion1 from "./assets/img/emotion1.png";
import emotion2 from "./assets/img/emotion2.png";
import emotion3 from "./assets/img/emotion3.png";
import emotion4 from "./assets/img/emotion4.png";
import emotion5 from "./assets/img/emotion5.png";
```
- 이미지 사용
```jsx
<img src={emotion1} alt="very happy"/>
<img src={emotion2} alt="happy"/>
<img src={emotion3} alt="soso"/>
<img src={emotion4} alt="unhappy"/>
// <img src={emotion5} alt="bad"/>
// 직접 src 이후 path 사용도 가능
<img src={"/src/assets/img/emotion5.png"} alt="bad"/>
```
- dev tool 확인
    - network 에서 Preserve log 체크, img 체크해서 size, time 탭 확인
- 자주 사용하는 이미지 링크는 util package에 보관해 사용 편리
```javascript
import emotion1 from "../assets/img/emotion1.png";
import emotion2 from "../assets/img/emotion2.png";
import emotion3 from "../assets/img/emotion3.png";
import emotion4 from "../assets/img/emotion4.png";
import emotion5 from "../assets/img/emotion5.png";

export function getEmotionImage (emotionId){
    const emotionImages=[emotion1,emotion2,emotion3,emotion4,emotion5];
    if(emotionId<1||emotionId>emotionImages.length) return null;
    const i = emotionId-1;
    return emotionImages[i];
}
```
- 사용하기
```jsx
<img src={getEmotionImage(1)} alt="very happy"/>
<img src={getEmotionImage(2)} alt="happy"/>
<img src={getEmotionImage(3)} alt="soso"/>
<img src={getEmotionImage(4)} alt="unhappy"/>
<img src={getEmotionImage(5)} alt="bad"/>
```


