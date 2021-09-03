const socket = io();

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const inputTxt = document.querySelector("#inputTxt");
const enviarBtn = document.querySelector("#enviarBtn");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");

socket.on("connect", () => {
  lblOnline.style.display = "";
  lblOffline.style.display = "none";
});

socket.on("disconnect", () => {
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

enviarBtn.addEventListener("click", () => {
  const content = inputTxt.value;
  const body = {
    content,
    id: "jasdiqu823",
    date: new Date(),
  };
  socket.emit("inputText", body, (id) => {
    console.log("id desde el servidor", id);
  });
});

socket.on("enviar-mensaje", (body) => {
  output1.value = body.content;
  output2.value = body.date;
});
