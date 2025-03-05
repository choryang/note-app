# 기술 스택
- 프론트엔드 라이브러리: React
- UI 라이브러리: MUI
- 상태 관리 라이브러리: Zustand


# 데모 링크
https://note-app-ebon-xi.vercel.app/


# 설치 및 실행 방법
```
    git clone https://github.com/choryang/note-app.git
    cd note-app
    npm install
    npm run dev
```

# 기능 설명
1. 메모 목록 조회
- 목록 표시: 저장된 메모들의 제목, 생성일 (수정된 경우 수정일)을 표시합니다. 각 항목에는 수정 버튼과 삭제 버튼이 있습니다.
- 상세 보기: 각 메모 항목을 클릭하면 메모의 전체 내용(메모 제목, 메모 내용, 생성일 또는 수정일)을 확인할 수 있도록 상세
페이지로 전환합니다.

2. 메모 생성
- 입력 폼: 제목(필수)과 내용(선택) 입력란을 포함한 메모 작성 폼을 구현하였습니다.
- 유효성 검사: 제목 입력란은 빈 값일 수 없고, 최대 50자 제한이 있으며, 공백만 입력하는 것도 허용하지 않습니다. 입력 오류 시 helpertext로 오류 메시지를 표시합니다.
- 상태 업데이트: 메모 생성 시 상태 관리 시스템에 새로운 메모를 추가하고, 리스트에
즉시 반영됩니다.
- 피드백: 메모가 성공적으로 추가되었음을 사용자에게 알리는 메시지(Alert)를 상단 센터에 보여줍니다.

3. 메모 수정
- 수정 기능: 각 메모 항목 옆에 수정 버튼을 배치하여, 클릭 시 해당 메모의 제목 및
내용을 수정할 수 있는 모달이 제공됩니다. 입력 폼의 형태는 메모 생성 시 사용되는 폼과 동일합니다.
- 상태 업데이트: 수정된 내용은 상태 관리 시스템에 반영되어, 메모 목록과 상세
정보가 즉시 업데이트됩니다. 수정이 성공적으로 수행되었음을 알리는 메시지(Alert)를 제공합니다.
- 에러 처리: 수정 시 잘못된 입력에 대해 helpertext로 오류 메시지를
표시합니다.

4. 메모 삭제
- 삭제 기능: 각 메모 항목에 삭제 버튼을 배치하고, 삭제 전 사용자에게 확인
다이얼로그를 표시합니다.
- 상태 업데이트: 확인 후 해당 메모를 상태 관리 시스템에서 제거하며, 리스트에서
즉시 삭제됩니다.
- 피드백: 삭제가 성공적으로 수행되었음을 알리는 메시지(Alert)를
제공합니다.

5. 데이터 지속성
- Local Storage 활용: 애플리케이션 상태(메모 목록)를 Local Storage에 저장합니다.

# 코드 설명
1. 메모 목록 변경
- useItemStore에서 관리
- useItemStore는 state인 items와 action인 setItems, getItem, deleteItem으로 구성
- setItems(생성): 궁극적으로 state인 items를 변경하며 모든 과정 수행 후 결과를 localStorage에 저장하는 작업 수행
- getItem(조회): 상세페이지에서 메모의 전체 내용을 불러오는 데 사용
- deleteItem(삭제): items에서 삭제하려는 메모를 제외한 배열 반환 / deleteItem의 반환값으로 받은 배열을 setItems를 수행하여 상태 반영
- 수정의 경우 deleteItem으로 수정하려는 메모를 삭제 후 해당 배열의 가장 앞에 수정된 메모를 삽입, 해당 배열을 setItems를 수행하여 상태 반영

2. 전역 모달 관리
- 커스텀 훅인 useModal 생성 / useModal은 modal_type, showModal, hideModal을 반환
- 해당 훅으로 다이얼로그(Dialog), 알림 메시지(Alert), 메모 생성/수정 모달(Drawer) 제어
- modal_type: Zustand로 중앙에서 관리하는 state
    - 앱 가장 상위에 선언된 GlobalModal 컴포넌트에서 해당 값에 맞는 모달 렌더링 / 모달을 숨기려면 state를 null로 설정
- showModal: modal_type 설정
- hideModal: state를 null로 설정
