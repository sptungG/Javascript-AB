// Function create notification
function createNotification(title = "Welcome back!") {
  const template = `
  <div class="noti">
      <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
      <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", template);
}
const randomTitle = ["Welcome Back!", "Today is a good day", "What would you setup today?"];
let lastTitle;
// createNotification();
const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  // lấy ra random title trong mảng randomTitle
  const title = randomTitle[Math.floor(Math.random() * randomTitle.length)];
  // -> lần xuất hiện trc đó p khác với lần xuất hiện sau
  if (lastTitle !== title) createNotification(title);
  lastTitle = title;
}, 4000);
