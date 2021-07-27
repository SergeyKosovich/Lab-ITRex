const fetch = require('node-fetch');

class GetRandomUsers {
  constructor(usersNum) {
    this.usersNum = usersNum;
    this.reqUrl = 'https://randomuser.me/api/';
  }

  async getJson() {
    const a = await fetch(this.reqUrl);
    const b = await a.json();
    return b.results[0];
  }

  async addUsers() {
    if (this.length !== 0) {
      const response = await this.getJson();
      this.accum.push(response);
      this.length -= 1;
      return this.addUsers();
    }
    return false;
  }

  async getUsers() {
    this.accum = [];
    this.length = this.usersNum;
    await this.addUsers();
    this.accum.forEach((item) => console.log('-------------/--------------', item));
  }
}
const getFiveUsers = new GetRandomUsers(5);
getFiveUsers.getUsers();
