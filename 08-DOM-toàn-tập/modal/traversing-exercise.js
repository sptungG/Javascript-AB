// Active Modal
// C1: html
// const modal = document.querySelector(".modal");
// console.log(modal);
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }
// C2: Js
// const template = `
// <div class="modal">
//       <div class="modal-content">
//         <i class="fa fa-times modal-close"></i>
//         <div class="modal-desc">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, libero, reprehenderit cumque consectetur quaerat aspernatur iusto dolorem minus nemo illo asperiores assumenda nulla ut, quas quasi quae? Necessitatibus, distinctio assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi eum asperiores, amet officia blanditiis, natus libero enim saepe possimus nam iste unde perspiciatis animi, quis reiciendis consequatur tempora! Deleniti?
//         </div>
//         <div class="modal-action">
//           <button class="modal-confirm">Confirm</button>
//           <button class="modal-cancel">Cancel</button>
//         </div>
//       </div>
//     </div>
// `;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
// const modal = document.querySelector(".modal");
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }
// C3:
const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const modalClose = document.createElement("i");
modalClose.classList.add("fa", "fa-times", "modal-close");

const modalDesc = document.createElement("div");
modalDesc.className = "modal-desc";
modalDesc.innerHTML =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, libero, reprehenderit cumque consectetur quaerat aspernatur iusto dolorem minus nemo illo asperiores assumenda nulla ut, quas quasi quae? Necessitatibus, distinctio assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi eum asperiores, amet officia blanditiis, natus libero enim saepe possimus nam iste unde perspiciatis animi, quis reiciendis consequatur tempora! Deleniti?";

const modalAction = document.createElement("div");
const modalConfirm = document.createElement("button");
const modalCancel = document.createElement("button");
modalAction.className = "modal-action";
modalConfirm.className = "modal-confirm";
modalConfirm.innerHTML = "Confirm";
modalCancel.className = "modal-cancel";
modalCancel.innerHTML = "Cancel";
modalAction.appendChild(modalConfirm);
modalAction.appendChild(modalCancel);

document.body.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalAction);

const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
