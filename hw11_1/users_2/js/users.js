class UserList {
  constructor(selector) {
    this.element = document.querySelector(selector)
    this.http = new CustomHttp()
    this.handleResponse = this.handleResponse.bind(this)
  }
  setUsers(list) {
      list.forEach(user => {
        const pEl = document.createElement("p");
        pEl.classList.add('new');
        pEl.innerHTML = `<b>Name:</b> ${user.name}`;
        this.element.appendChild(pEl);
        pEl.addEventListener("click", () =>{
            const newpEl = document.createElement("p");
            newpEl.classList.add('second')
            newpEl.innerHTML = `<b>Info:</b> ${JSON.stringify(user)}`
            pEl.appendChild(newpEl)
         })
        })
    return this
  };
  handleResponse(list) {
    this.setUsers(list)
  }
  getUsers() {
    this.element.innerHTML = ''
    this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponse)
  }
