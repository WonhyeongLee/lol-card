import React from 'react';

function Custom() {
  return (
    <section className="relative flex h-full w-full flex-col items-center gap-4 bg-red-300 p-6">
      {/* 아이콘과 레벨, 이름 영역 */}
      <div className="flex w-full justify-start">
        <div className="flex items-center">
          <span>icon</span>
          <div className="ml-4 flex flex-col">
            <span>level</span>
            <span>summonerName</span>
          </div>
        </div>
      </div>

      {/* 챔피언 카드 슬라이드 영역 */}
      <div className="flex w-full flex-1 items-center justify-between">
        <div className="flex flex-col justify-between">
          <span>챔피언</span>
          <span>라인</span>
          <span>성향</span>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <span>캐릭터 카드 슬라이드</span>
        </div>
        <div>
          <span>해당 챔피언 정보</span>
        </div>
      </div>

      {/* 자신있는 챔피언을 뽑아주세요 */}
      <div>
        <p>자신있는 챔피언을 뽑아주세요</p>
      </div>
    </section>
  );
}

export default Custom;
