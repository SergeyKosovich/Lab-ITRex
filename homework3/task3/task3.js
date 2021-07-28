const fetch = require('node-fetch');

class GetRandomUsers {
  constructor() {
    this.reqUrl = 'https://randomuser.me/api/?results=';
  }

  async getUsers(num) {
    if (num) {
      const a = await fetch(this.reqUrl + num);
      const data = await a.json();
      console.log(data.results);
    } else {
      console.log('need add number of user ');
    }
  }
}
const getFiveUsers = new GetRandomUsers();
getFiveUsers.getUsers(10);
