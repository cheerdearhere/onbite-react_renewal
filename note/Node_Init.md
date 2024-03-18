
[실습코드](../section04)
# I. Node.js?

- javascript 기반 프레임워크, 라이브러리의 기반이 된다.
- javascript runtime: 실행환경
  - 컴퓨터 웹 브라우저에서만 작동하던 js를 다양한 곳에서 활용할 수 있게 해줌

# II. Node.js 설치하기

- [node 설치](https://nodejs.org/en): LTS 버전이 안정적임
- node package manager: npm
- 설치 확인

```cmd
node -v
npm -v
```

# III. 패키지 만들기

- 패키지에 적용된 라이브러리를 기록할 package.json파일 생성
  > node init
- 적용 예시

```json
{
  "name": "section04",
  "version": "1.0.0",
  "description": "just test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dream-ik",
  "license": "ISC"
}
```

- 생성하고 실행하기
  > node {경로}/jsFile.js
- 경로는 절대 경로와 상대경로 적용 가능
- 더 편하게 쓰려면 package.json 파일에 작동 지정
  - script 작성부에 작성
    - "scriptKEY" : "execute words"

```javascript
{
    "scripts": {
        "test": "echo \"Error: no test pecified\" && exit 1",
        "same dir start":"node index.js",
        "start":"node src/index.js"
    },
}
```

- 'npm 스크립트 키워드'로 실행
  > npm start(node src/index.js 실행)

# IV. 모듈 시스템 이해하기

## A. 모듈(module)이란?
- 기능 또는 entity 등 기능 별로 파일 시스템을 분리한 설계
- 모듈을 관리하고 사용하는 시스템: 모듈 시스템
  - Common JS(CJS) 
  - ES Module(ESM)
  - AMD
  - UMD
    ...
- 주로 CJS, ESM 사용
## B. Common JS(CJS)
- 모듈 파일에서 밖으로 내보낼 객체 지정
- 전통적인 방식
```javascript
function add(a,b){
    return a+b;
}
const sub = {
    id: 12,
    name: "aaa"
};
module.exports = {
    add,
    sub,
}
```
- 사용할 곳에서 모듈 호출(확장자(.js)없음)
```javascript
// require("경로")
const moduleData = require("./math");
// 호출된 모듈에서 해당 데이터 사용
console.log(moduleData.add(1,2));
console.log(moduleData.sub.id);
```
- 구조분해 할당
```javascript
const { add, sub } = require("./math");
```
## C. ES Module(ESM)
- 패키지 설정에서 ESM 모드 처리
  - type에 module 입력
- 동시에 두가지 모드를 사용할 수 없음
```json
{
  //...
  "type": "module",
  //...
}
```
- 모듈에서 나갈 정보 지정하기
```javascript
export {
  add,
  sub,
  httpStatus,
}
```
- 함수 별로 관리한다면 
```javascript
export function a(){}
export const a = 3;
```
- 사용할 모듈 import 하기(확장자(.js) 있음)
```javascript
import {
    add,
    sub,
} from "./math.js";
console.log(add(1,2));
console.log(sub.id);
```
- 모듈을 대표 대상을 지정할 수 있음
  - 모듈당 단 하나
```javascript
export default defaultFunction(){}
```
  - 중괄호 없이 사용
  - 호출부에서 이름을 재지정 가능
```javascript
import defaultFnc, {add, sub} from "./module.js";
```
# V. 라이브러리 이용하기
- library: 개발시 필요한 기능을 미리 만들어 모듈화 해놓은 것
- node package manager에 적용할 라이브러리를 찾을 수 있는 곳: [npmjs.com](https://www.npmjs.com/)
  - 원하는 라이브러리 검색
  - 해당 라이브러리 상세페이지에서 install 명령어 찾아서 실행
  - 설치 확인
    - package.json 파일에 dependency 확인
    - package-lock.json: 라이브러리 관련 상세 정보 
    - node_modules 폴더에서 확인
      - file directory
- 너무 무거운 라이브러리 폴더들...
  - package.json 파일만있으면 node_modules 폴더는 npm i 명령어로 간단히 생성되므로 굳이 공유할 필요 없음
