
//How to call an Api with Vuejs. It's used axios for that.
var coins = new Vue({
  el: '#app',
  data() {
    return {
      info: null,
      number: 12
    }
  },
  mounted() {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => (this.info = response.data))
  }
});


// This function is to sort the data. The first twelve cois in Alphabetic Order.
//To use de the lodash function I have added lodash.js in the project

var order = new Vue({
  el: '#orden',
  data() {
    return {
      info: null,
      show: false,
      number: 12
    }
  },
  mounted() {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => (this.info = response.data))
  },

  computed: {
  ord: function () {
    return _.sortBy(this.info, 'id')
  }
}
});


//Random item to show a different coin in each click.
var item = new Vue({
  el: '#random-1',
  data() {
    return {
      info: null,
      show: false,
      number: Math.floor((Math.random() * 100) + 1)
    }
  },
  mounted() {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => (this.info = response.data))
  }
});
