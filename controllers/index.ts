import entity from "../model/entity.ts";

export default ({ request, response }) => {
  console.log("got request")
  response.body = entity()
}
