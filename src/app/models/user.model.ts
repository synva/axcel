export class User {
  id: ''
  password: ''

  constructor (data) {
    this.login(data);
  }

  login (data) {
    this.id = data._id || '';
    this.password = data.password || '';
  }

  logout () {
    this.id = '';
    this.password = '';
  }

  get isAnonymous () {
    return !this.id
  }
}
