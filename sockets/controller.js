const socketController = (socket) => {
  // console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    //   console.log("cliente desconectado", socket.id);
  });

  socket.on("inputText", (body, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", body);
  });
};

module.exports = { socketController };
