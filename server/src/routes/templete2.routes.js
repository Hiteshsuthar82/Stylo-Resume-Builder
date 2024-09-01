import { 
    insertDummyData, 
    editResume, 
    updateResumeByResumeId,
    updateUserAvatar ,
    getResumesByUserId,
    getResumeById,
    deleteResumeById,
    deleteAllResumesByUserId

 } from "../controllers/templete2.controller.js";
 import { verifyJWT } from "../middlewares/auth.middleware.js";
 import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";

const router = Router();

router.route("/resume-data").get(insertDummyData);
router.route("/edit-resume").post(verifyJWT,editResume);
router.route("/resume-edit/:resumeId").patch(verifyJWT,updateResumeByResumeId);

router
.route("/image/:resumeId")
.patch(verifyJWT, upload.single("image"), updateUserAvatar);

// /resume/:resumeId/avatar

router.route("/Allresume").get(verifyJWT,getResumesByUserId);
router.route("/delete-Allresume").delete(verifyJWT,deleteAllResumesByUserId);


router.route("/resume-data/:resumeId").get(verifyJWT,getResumeById);
router.route("/delete/resume/:resumeId").delete(verifyJWT,deleteResumeById);



export default router;