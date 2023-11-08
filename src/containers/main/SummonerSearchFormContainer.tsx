'use client';
import { useRouter } from 'next/navigation';

import { addSummonerNameToCookie } from '~/app/_util/addSummonerNameToCookie';
import Form from '~components/Form';
import { useAppDispatch } from '~redux/hooks';
import { navigateToPage } from '~redux/thunks/navigationToPage';

const MainFormWrapper: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const summonerSearchField = [
    {
      name: 'searchSummoner',
      label: 'search',
      type: 'text',
      placeholder: '소환사명을 입력해주세요'
    }
  ];

  const handleSubmit = (values: Record<string, string>) => {
    const summonerName = values['searchSummoner'];
    if (summonerName) {
      addSummonerNameToCookie(summonerName);
      dispatch(navigateToPage({ summonerName, router }));
    }
  };

  return <Form fields={summonerSearchField} onSubmit={handleSubmit} />;
};

export default MainFormWrapper;
