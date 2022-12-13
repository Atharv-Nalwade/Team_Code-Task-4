let SingleResult;
let tbody = document.getElementById("t");

const dataAdder = () => {
  for (let i = 0; i < SingleResult.length; i++) {
    let addedContent = `<tr>
    <td>${SingleResult[i].name.title}</td>
    <td>${SingleResult[i].name.first}</td>
    <td>${SingleResult[i].name.last}</td>
    </tr>`;
    tbody.insertAdjacentHTML("beforeend", addedContent);
  }
};

const add = () => {
  fetch("https://randomuser.me/api?results=10")
    .then((res) => res.json())
    .then((d) => {
      SingleResult = d.results;
      dataAdder();
    })
    .catch((erorr) => {
      alert("Error occured Click Ok to Reload");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
};
