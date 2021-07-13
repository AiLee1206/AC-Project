// 資料，你可以換成你的檔案，但請不要更動架構
const profile = {
  name: "AI Rong",
  avatar:
    "https://assets-lighthouse.alphacamp.co/uploads/user/photo/4515/medium_123073922_10158295120654681_4973057709431620152_o.jpg",
  info: "Hi, this is AI Rong!",
  experiences: [
    "Project manager @pubGame",
    "Web Application @Alpha Camp",
    "Software Enginner @GGV",
    "Software Engineer @Crypto.com",
    "RWD @hotmail.com"
  ]
};

// 選出 .my-card 節點做容器
const myCard = document.querySelector(".my-card");

// 由於 experiences 是陣列，最好先用迴圈把 <li></li> 的 template 整理好
let experiencesText = "";
profile.experiences.forEach((exp) => {
  experiencesText += `<li>${exp}</li>`;
});

// 用 myCard.innerHTML 抽換內容
myCard.innerHTML = `
    <img src="${profile.avatar}" alt="Avatar" class="rounded float-right pr-3" width="200">
    <h3 class="my-name text-uppercase">${profile.name}</h3>
    <p class="info">${profile.info}</p>
    <div class="experience text-mute">
      <h6>Experience</h6>
      <ul class="list-unstyled small">
        ${experiencesText}
      </ul>
    </div>
`;
