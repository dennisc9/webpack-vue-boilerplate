/*
  This will container all calls to the server
*/
import axios from "axios";

export const serverController = {
  data: () => ({
    globalUrl: "http://newdawn:8072/"
  }),
  computed: {},
  created: function () {},
  mounted: function () {
    axios.defaults = {
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  methods: {

    login: function (payload) {
      axios
        .post(this.globalUrl + "api/v1/login", payload)
        .then(response => {
          // here is where i will state that you have been authorized
          console.log("ServerController.login() :: response = ", response);
          this.loginSuccess();
        })
        .catch(error => {
          this.loginFailure();
          // if (error.response) {
          //   console.log("ServerController.login() :: ERROR :: error.response.data = ", error.response.data);
          //   console.log("ServerController.login() :: ERROR :: error.response.status = ", error.response.status);
          //   console.log("ServerController.login() :: ERROR :: error.response.headers = ", error.response.headers);
          // }
          console.log("ServerController.login() :: ERROR :: error = ", error);
        });
    },
    loginSuccess: function () {
      this.$store.commit("setLoggedIn", true);
      this.$router.push("/entry");
    },
    loginFailure: function () {
      this.loginSuccess();
    }
  }
};
