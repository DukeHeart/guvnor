var Collection = require('ampersand-rest-collection'),
  RSS = require('./rss');

module.exports = Collection.extend({
  url: function() {
    return '/hosts/' + this.parent.collection.parent.name + '/processes/' + this.parent.id + '/rss'
  },
  model: RSS,
  comparator: 'date'
})