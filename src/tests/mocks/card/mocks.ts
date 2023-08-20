type SummonerArgs = {
  name: string;
};

export const mocks = {
  Query: () => ({
    summoner: (args: SummonerArgs) => {
      let searchedData = null;
      if (args?.name === '말비나33') {
        searchedData = {
          id: 4,
          information: {
            summonerName: '말비나33',
            summonerLevel: 33,
            summonerIcon: '4122'
          },
          season: ['2020', '2021', '2022'],
          tendency: ['갱킹선호', '초중반지향', '캐리형'],
          lanes: ['Mid', 'Top'],
          champions: [
            { name: '야스오', winRate: 55.5, gamesPlayed: 120, KDA: 3.2 },
            { name: '제드', winRate: 60.0, gamesPlayed: 100, KDA: 4.1 },
            { name: '아트록스', winRate: 50.0, gamesPlayed: 90, KDA: 2.8 }
          ]
        };
        return searchedData;
      }

      if (searchedData) {
        return [searchedData, ...mockData];
      }

      return mockData;
    }
  })
};

const mockData = [
  {
    id: 1,
    information: {
      summonerName: 'test33',
      summonerLevel: 333,
      summonerIcon: '4123'
    },
    season: ['2012', '2013', '2014', '2015', '2016', '2023'],
    tendency: ['갱킹선호', '초중반지향', '캐리형'],
    lanes: ['Jug', 'Sup'],
    champions: [
      { name: '샤코', winRate: 72.5, gamesPlayed: 100, KDA: 3.5 },
      { name: '하이머딩거', winRate: 60.0, gamesPlayed: 150, KDA: 4.0 },
      { name: '아이번', winRate: 50.0, gamesPlayed: 200, KDA: 2.5 }
    ]
  },
  // 두 번째 summoner 데이터
  {
    id: 2,
    information: {
      summonerName: 'test44',
      summonerLevel: 444,
      summonerIcon: '5123'
    },
    season: ['2018', '2019'],
    tendency: ['유틸서폿선호', '후반캐리형'],
    lanes: ['Adc', 'Sup'],
    champions: [
      { name: '카이사', winRate: 90, gamesPlayed: 40, KDA: 3.5 },
      { name: '루시안', winRate: 60.0, gamesPlayed: 35, KDA: 2.7 },
      { name: '트리스타나', winRate: 50.0, gamesPlayed: 20, KDA: 2.5 }
    ]
  },
  // 세 번째 summoner 데이터
  {
    id: 3,
    information: {
      summonerName: 'test55',
      summonerLevel: 555,
      summonerIcon: '1233'
    },
    season: ['2023'],
    tendency: ['카정선호', '후반지향', '팀원보조형'],
    lanes: ['Jug'],
    champions: [
      { name: '리신', winRate: 72.5, gamesPlayed: 41, KDA: 3.5 },
      { name: '니달리', winRate: 46.1, gamesPlayed: 10, KDA: 2.0 },
      { name: '자르반', winRate: 24.6, gamesPlayed: 80, KDA: 1.0 }
    ]
  }
];
