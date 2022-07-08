import { urlApi } from "./urlapi";

const Callpost = (id, title, description, date) => {
  console.log(`${urlApi}/${id}`);
  fetch(`${urlApi}/${id}`, { method: "get" })
    .then((res) => res.json())
    .then((data) => {
      // return console.log(data);
        title(data.title)
        description(data.description)
        date(data.createdAt)
    })
    .catch((err) => console.log(err));
};

export default Callpost;
