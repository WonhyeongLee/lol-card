'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Form from '~components/Form';
import { useAppDispatch } from '~redux/hooks';
import { navigateToPage } from '~redux/thunks/navigationToPage';

const MainFormWrapper: React.FC = () => {
  const [summonerName, setSummonerName] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const summonerSearchField = [
    {
      name: 'summonerName',
      value: '',
      type: 'text',
      placeholder: '소환사명을 입력해주세요'
    }
  ];

  const handleSubmit = (values: Record<string, string>) => {
    setSummonerName(values['summonerName']);
    if (summonerName) {
      dispatch(navigateToPage({ summonerName, router }));
    }
  };

  return <Form fields={summonerSearchField} onSubmit={handleSubmit} />;
};

export default MainFormWrapper;
