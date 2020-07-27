let cookies = 0;

function updateCookies() {
  cookies++;
  document.getElementById('cookie').innerHTML = `Number of Cookies: ${cookies}`;
}

class Item {
  constructor(idItem, idBuy, idUnafford, name, cost, make) {
    this.idItem = idItem;
    this.idBuy = idBuy;
    this.idUnafford = idUnafford;
    this.name = name;
    this.amount = 0;
    this.cost = cost;
    this.make = make;
  }

  buy() {
    if (cookies >= this.cost) {
      cookies -= this.cost;
      document.getElementById('cookie').innerHTML = `Number of Cookies: ${cookies}`;
      this.amount++;
      this.cost = Math.floor(this.cost * 1.2);
      document.getElementById(this.idItem).innerHTML = `${this.name}: ${this.amount}`;
      document.getElementById(this.idBuy).innerHTML = `Price: ${this.cost} cookies`;
      document.getElementById(this.idUnafford).innerHTML = '';
    } else {
      document.getElementById(this.idUnafford).innerHTML = `Cannot Afford`;
    }
  }

  makeCookie() {
      cookies += (this.make * this.amount);
      document.getElementById('cookie').innerHTML = `Number of Cookies: ${cookies}`;
  }
}

const cursors = new Item('cursor', 'buyCursor', 'unaffordCursor', 'Cursors', 10, 1);

const grandmas = new Item('grandma', 'buyGrandma', 'unaffordGrandma', 'Grandmas', 25, 3);

const factories = new Item('factory', 'buyFactory', 'unaffordFactory', 'Factories', 40, 5);

const items = [cursors, grandmas, factories];

function addCookies() {
    items.forEach(item => {
      item.makeCookie();
    });
}

setInterval(function() {addCookies();} , 1000);
