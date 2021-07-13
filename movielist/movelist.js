let movies = [
  {
    title: "The Avengers",
    image: "https://bit.ly/2NQOG6H",
    rating: 0
  },
  {
    title: "Our Times",
    image: "https://bit.ly/2OsGmv2",
    rating: 0
  },
  {
    title: "Aquaman",
    image: "https://bit.ly/2zmcLxo",
    rating: 0
  }
];

const dataPanel = document.querySelector("#data-panel");

// 回傳 HTML String
// 重複的結構，<tr> 用迴圈產生
function displayMoiveData(movies) {
  let htmlContent = `
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
  `;

  for (let i = 0; i < movies.length; i++) {
    htmlContent += `
          <tr>
            <td>
              <img src=${movies[i].image} width="70" class="img-thumbnail">
            </td>
            <td>${movies[i].title}</td>
            <td>
              <span class="fa fa-thumbs-up"></span>
              <span class="fa fa-thumbs-down px-2"></span>
              <span>${movies[i].rating}</span>
            </td>
            <td>
              <button class="btn btn-sm btn-danger">X</button>
            </td>
          </tr>
    `;
  }

  htmlContent += `
          </tbody>
      </table>
  `;

  return htmlContent; // return HTML String
}

dataPanel.innerHTML = displayMoiveData(movies);

dataPanel.addEventListener("click", function (event) {
  //console.log (event.target)

  if (
    event.target.matches(".fa-thumbs-up") ||
    event.target.matches(".fa-thumbs-down")
  ) {
    const scoreBox = event.target.parentElement.children[2];
    let score = Number(scoreBox.innerText);
    // After 優化寫法
    event.target.matches(".fa-thumbs-up") ? score++ : score--;
    if (score < 0) score = 0;
    // before 之前寫法 -----------------------------------------
    // if (event.target.matches(".fa-thumbs-up")) {
    //   score += 1;
    // } else {
    //   score -= 1;
    //   if (score < 0) score = 0;
    // }
    // console.log(score);
    scoreBox.innerText = score;
  } else if (event.target.matches(".btn-sm")) {
    let deleteData = event.target.parentElement;
    let deleteTr = deleteData.parentElement;
    deleteTr.remove();
  }
});

/*rating.addEventListener('click', function (event) {
  //console.log (event.target)
  if (event.target.matches('.fa-thumbs-up')) {
    let ratingUp = event.target.parentElement
    //console.log (ratingUp)
   ratingUp.children[2].innerText = Number(ratingUp.children[2].innerText) + 1
  } else if (event.target.matches('.fa-thumbs-down')) {
    let ratingDown = event.target.parentElement
    //console.log (ratingDown)
   ratingDown.children[2].innerText = Number(ratingDown.children[2].innerText) - 1
  } else if (event.target.matches('.btn-sm')){
    let deleteData = event.target.parentElement.parentElement
    //console.log (deleteData)
    deleteData.remove()
  }
})*/
