import axios from "axios";

export default axios.create({
  baseURL: "http://222f523a70d5.ngrok.io", //update the link by runnig ngrok http port_no
});
