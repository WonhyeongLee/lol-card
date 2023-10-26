'use client';
// 데이터를 /api/graphql 으로부터 가져와야함 (mock)
const ChampionSelectList = () => {
  return (
    <div className="mx-auto box-content flex justify-items-center gap-3 overflow-x-auto sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:items-center sm:justify-items-center sm:overflow-visible">
      <div className="h-20 w-20 overflow-hidden border-solid border-black ">
        <img className="h-full w-full object-cover object-center" />
      </div>
      <div className="h-20 w-20 border-solid border-black">
        <img className="h-full w-full object-cover object-center" />
      </div>
      <div className="h-20 w-20 border-solid border-black">
        <img className="h-full w-full object-cover object-center" />
      </div>
      <div className="h-20 w-20 border-solid border-black">
        <img className="h-full w-full object-cover object-center" />
      </div>
      <div className="h-20 w-20 border-solid border-black">
        <img className="h-full w-full object-cover object-center" />
      </div>
    </div>
  );
};

export default ChampionSelectList;
