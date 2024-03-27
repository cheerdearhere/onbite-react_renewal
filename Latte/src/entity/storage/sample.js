/*====================================================================
recoil 이탈률이 증가함에 따라 많이 사용되고 있는 zustand 사용법을 익혀보자
어차피 상태관리는 유사하니까..
=====================================================================*/
import create from 'zustand';
import {devtools} from "zustand/middleware";

//sample storage
                        //디버깅 툴로 감싸기
const useStore = create(devtools((set)=>({
    count:0,//관리할 값
    increase(){// 조작 함수
        set((state)=>({count : state.count +1}))
    },
    async requestAjax(){// 외부 링크로 부터 요청, 사용
        const response = await fetch("url");
        console.log(await response.json());
    }
})));
