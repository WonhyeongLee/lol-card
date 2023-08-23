export const mocks = {
  Query: () => ({
    summoner: () => mockData
  })
};

export const mockData = [
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
      { name: 'Shaco', winRate: 72.5, gamesPlayed: 100, KDA: 3.5 },
      { name: 'Heimerdinger', winRate: 60.0, gamesPlayed: 150, KDA: 4.0 },
      { name: 'Ivern', winRate: 50.0, gamesPlayed: 200, KDA: 2.5 }
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
      { name: 'Kaisa', winRate: 90, gamesPlayed: 40, KDA: 3.5 },
      { name: 'Lucian', winRate: 60.0, gamesPlayed: 35, KDA: 2.7 },
      { name: 'Tristana', winRate: 50.0, gamesPlayed: 20, KDA: 2.5 }
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
      { name: 'LeeSin', winRate: 72.5, gamesPlayed: 41, KDA: 3.5 },
      { name: 'Nidalee', winRate: 46.1, gamesPlayed: 10, KDA: 2.0 },
      { name: 'JarvanIV', winRate: 24.6, gamesPlayed: 80, KDA: 1.0 }
    ]
  }
];
