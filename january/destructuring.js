/*

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

const [player1, player2] = game.players;

const [gk, ...othersPlayer] = player1;
// console.log(gk, othersPlayer);

const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

const playersFinal = [...player1, 'coutinho', 'Thiago', 'periscic'];
// console.log(playersFinal)

const {odds: {team1, x:draw, team2}} = game;
// console.log(team1, draw, team2);

const printGoal = function(...player) {
     console.log(`${player.length} goals`);
}

printGoal('kimmich', 'Davies', 'Gnarby');
printGoal(...game.scored);

*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

for (const item of menu) 

for (const [i, el] of menu.entries()){
      console.log(`${i} : ${el}`)
} 