import ChampionCardList from './ChampionCardList';
import ChampionSelectList from '../customize/ChampionSelectList';

const CustomizeChampionList = () => {
  return (
    <>
      <div className="flex h-1/5 items-center justify-center sm:h-full sm:w-1/3">
        <ChampionSelectList />
      </div>
      <div className="mt-4 flex h-4/5 w-full items-center justify-center px-4 sm:h-full sm:w-2/3">
        <ChampionCardList />
      </div>
    </>
  );
};

export default CustomizeChampionList;
