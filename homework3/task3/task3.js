const fetch = require('node-fetch');

class GetRandomUsers {
  constructor() {
    this.reqUrl = 'https://randomuser.me/api/';
  }

  async getUsers(num) {
    if (!num) {
      return 'need add number of user ';
    }
    const a = await fetch(`${this.reqUrl}?results=${num}`);
    const data = await a.json();
    const response = data.results;
    return response;
  }
}
const getFiveUsers = new GetRandomUsers();
getFiveUsers.getUsers(1).then((data) => console.log(data));
