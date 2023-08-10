export const mocks = {
  Query: () => ({
    summoner: () => ({
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
    })
  })
};
