import { Router } from "express";
import * as UserControll from "../controll/user.js";


const router = Router();

router.put("/create", UserControll.createUser);
router.get("/:id", UserControll.showUser);
router.patch("/:id/edit", UserControll.editUser);
router.delete("/:id/delete", UserControll.deleteUser);

export default router;
