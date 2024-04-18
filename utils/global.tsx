export var userData = {
  token: "",
  user: {
    id: 0,
    username: "",
    password: "",
    circles: []
  }
}

export function setUserData(data: any) {
  userData = data;
}