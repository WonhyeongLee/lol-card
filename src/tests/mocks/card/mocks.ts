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
    lanes: ['JUG', 'SUP'],
    champions: [
      { name: 'Shaco', winRate: 72.5, gamesPlayed: 100, KDA: 3.5 },
      { name: 'Heimerdinger', winRate: 60.0, gamesPlayed: 150, KDA: 4.0 },
      { name: 'Ivern', winRate: 50.0, gamesPlayed: 200, KDA: 2.5 },
      { name: 'Ahri', winRate: 55.2, gamesPlayed: 120, KDA: 3.0 },
      { name: 'Teemo', winRate: 48.3, gamesPlayed: 90, KDA: 2.1 },
      { name: 'Annie', winRate: 62.4, gamesPlayed: 80, KDA: 3.2 },
      { name: 'Zed', winRate: 50.8, gamesPlayed: 220, KDA: 2.9 },
      { name: 'Yasuo', winRate: 47.5, gamesPlayed: 180, KDA: 1.8 },
      { name: 'Garen', winRate: 52.1, gamesPlayed: 100, KDA: 2.7 },
      { name: 'Darius', winRate: 60.2, gamesPlayed: 95, KDA: 2.6 },
      { name: 'Ashe', winRate: 54.3, gamesPlayed: 130, KDA: 3.1 },
      { name: 'Vayne', winRate: 51.7, gamesPlayed: 210, KDA: 2.8 },
      { name: 'Ezreal', winRate: 45.6, gamesPlayed: 160, KDA: 1.9 },
      { name: 'Jhin', winRate: 59.4, gamesPlayed: 85, KDA: 3.4 },
      { name: 'Kaisa', winRate: 56.2, gamesPlayed: 110, KDA: 2.5 }
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
    lanes: ['BOT', 'SUP'],
    champions: [
      { name: 'Kaisa', winRate: 90, gamesPlayed: 40, KDA: 3.5 },
      { name: 'Lucian', winRate: 60.0, gamesPlayed: 35, KDA: 2.7 },
      { name: 'Tristana', winRate: 50.0, gamesPlayed: 20, KDA: 2.5 },
      { name: 'Amumu', winRate: 50.1, gamesPlayed: 100, KDA: 3.3 },
      { name: 'Blitzcrank', winRate: 54.0, gamesPlayed: 90, KDA: 2.5 },
      { name: 'Caitlyn', winRate: 52.0, gamesPlayed: 120, KDA: 3.1 },
      { name: 'Draven', winRate: 48.3, gamesPlayed: 140, KDA: 2.4 },
      { name: 'Elise', winRate: 47.5, gamesPlayed: 110, KDA: 2.6 },
      { name: 'Fiora', winRate: 55.1, gamesPlayed: 130, KDA: 3.2 },
      { name: 'Galio', winRate: 49.8, gamesPlayed: 100, KDA: 2.9 },
      { name: 'Hecarim', winRate: 50.4, gamesPlayed: 90, KDA: 2.7 }
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
    lanes: ['JUG'],
    champions: [
      { name: 'LeeSin', winRate: 72.5, gamesPlayed: 41, KDA: 3.5 },
      { name: 'Nidalee', winRate: 46.1, gamesPlayed: 10, KDA: 2.0 },
      { name: 'JarvanIV', winRate: 24.6, gamesPlayed: 80, KDA: 1.0 },
      { name: 'Kennen', winRate: 51.5, gamesPlayed: 120, KDA: 2.8 },
      { name: 'Lulu', winRate: 55.0, gamesPlayed: 100, KDA: 3.4 },
      { name: 'Morgana', winRate: 49.3, gamesPlayed: 130, KDA: 2.6 },
      { name: 'Nautilus', winRate: 53.1, gamesPlayed: 140, KDA: 2.3 }
    ]
  }
];
