import { Router } from "https://deno.land/x/oak/mod.ts";
import index from "./controllers/index.ts";

const router = new Router();

router
  .get("/", index)

export default router;
