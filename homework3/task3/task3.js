const fetch = require('node-fetch');

class GetRandomUsers {
  constructor(usersNum) {
    this.reqUrl = `https://randomuser.me/api/?results=${usersNum}`;
  }

  async getUsers() {
    if (this.length !== 0) {
      const a = await fetch(this.reqUrl).then((response) => response.json());
      console.log(a.results);
    } else {
      console.log('need add number of user ');
    }
  }
}
const getFiveUsers = new GetRandomUsers(3);
getFiveUsers.getUsers();
