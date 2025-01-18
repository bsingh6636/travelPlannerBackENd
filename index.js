import app from "./server.js";
const PORT = 1234
// app.listen(PORT,()=>{
//     console.log(`server listening on PORT :${PORT}`)
// })
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on PORT: ${PORT}`);
  });