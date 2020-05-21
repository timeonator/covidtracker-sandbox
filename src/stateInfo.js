const infoUrl = "https://covidtracking.com/api/v1/states/info.json";
var stateInfoData = [];

class myState {
  constructor(o) {
      Object.assign(this, o);
  }
}

class StateInfo {
  constructor () {
    this.stateInfoData = [];
  }
  static myhandler(){
    if (this.readyState === 4 && this.status === 200) {
        let r=JSON.parse(this.response);
//      for(var i = 0; i < r.length; i++ ){
//        stateInfoData.push({'state':r[i].state});
        stateInfoData = r;


      
      for (let i = 0; i < r.length; i++ ) {
//       console.log("handler execution" + JSON.stringify(stateInfoData[i].state));
        console.log(stateInfoData[i].state + ':' + stateInfoData[i].name)
     }
    }
  }

}
var si = new StateInfo();
const Http = new XMLHttpRequest();
Http.addEventListener("load", StateInfo.myhandler);
Http.open("GET", infoUrl, true);
Http.send();

console.log("State Data: ", stateInfoData);
