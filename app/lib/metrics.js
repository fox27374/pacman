// metrics.js  — create this helper once, import everywhere
const { metrics } = require('@opentelemetry/api');

const meter = metrics.getMeter('pacman', '1.5.1');

// Counter: total games started
const gamesStartedCounter = meter.createCounter('pacman.games.started', {
  description: 'Number of Pac-Man games started',
});

// Histogram: score distribution
const scoreHistogram = meter.createHistogram('pacman.score', {
  description: 'Distribution of scores achieved per game',
  unit: 'points',
});

// Counter: lives lost
const livesLostCounter = meter.createCounter('pacman.lives.lost', {
  description: 'Number of lives lost across all games',
});

module.exports = { gamesStartedCounter, scoreHistogram, livesLostCounter };