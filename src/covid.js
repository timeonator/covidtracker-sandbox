{
  const url = "https://covidtracking.com/api/us";
  var response;
  function cleanResponse() {
    if ("positive" in response) delete response.positive;
    if ("hospitalized" in response) delete response.hospitalized;
    if ("hash" in response) delete response.hash;
    if ("total" in response) delete response.total;
    if ("notes" in response) delete response.notes;
    if ("posNeg" in response) delete response.posNeg;
  }
  function insertElement() {
    var list = document.querySelector("#usdata");
    var fragment = new DocumentFragment();

    for (let item in response) {
      var li = document.createElement("li");
      li.innerHTML = item + ":" + response[item];
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  }

  function reqListener() {
    if (this.readyState === 4 && this.status === 200) {
      response = JSON.parse(this.responseText)[0];
      cleanResponse();
      insertElement();
      console.log(JSON.stringify(response));
    }
    let listElement = document.createElement("ul");
    let listItem = document.createDocumentFragment();
    let tag = document.getElementById("coviddata");
  }

  const Http = new XMLHttpRequest();
  Http.addEventListener("load", reqListener);

  Http.open("GET", url, true);
  Http.send();
}
