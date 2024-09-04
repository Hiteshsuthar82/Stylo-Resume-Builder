import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Template, DeleteConfirmationDialog } from "./../index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllResumes, deleteResume } from "../../features/resumeSlice";
import loader from "../../assets/page-loader.gif";

function MyResumes() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [selectedResumeId, setSelectedResumeId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [isdeleteConfirmationDialog, setDeleteConfirmationDialog] =
    useState(false);
  const templates = useSelector((state) => state.resume.allTemplates);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);
  const [myResumes, setMyResumes] = useState([]);

  const handleEditClick = async () => {
    navigate(`/editResume/${selectedResumeId}`);
  };

  const handleDeleteClick = () => {
    setDeleteConfirmationDialog(true);
  };

  const handleCancelDeleteClick = () => {
    setDeleteConfirmationDialog(false);
  };

  const handleConfirmDeleteClick = async () => {
    setDeleting(true);
    try {
      const session = await dispatch(
        deleteResume({ resumeId: selectedResumeId })
      );
      if (session) {
        setDeleting(false);
        setDeleteConfirmationDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onTemplateSelect = (templateId, resumeId) => {
    setSelectedTemplateId(templateId);
    setSelectedResumeId(resumeId);
  };

  const openResumeView = () => {
    navigate(`/resumeView/${selectedTemplateId}/${selectedResumeId}`);
  };

  useEffect(() => {
    dispatch(getAllResumes()).then((response) => {
      if (response) {
        console.log("all resumes fetched successfully..");
        setMyResumes(response.payload.data);
        setLoading(false);
      } else {
        // write code if there are note any resume for current user
        console.log("no resumes found");
        setLoading(false);
      }
    });
  }, [deleting]);

  return loading ? (
    <div className="h-[75vh] w-full flex items-center justify-center">
      <img src={loader} alt="Loading.." className="h-40" />
    </div>
  ) : (
    <Container>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 gap-16 flex-wrap justify-center">
        {templates &&
          myResumes &&
          myResumes.map((resume, index) => {
            const template = templates.find(
              (template) => template.id == resume.templateId
            );
            if (template) {
              return (
                <Template
                  key={index}
                  templateData={template}
                  onClick={onTemplateSelect}
                  isSelected={selectedResumeId === resume._id}
                  resumeId={resume._id}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              );
            }
          })}
      </div>

      {/* delete confirmation dialog */}
      {isdeleteConfirmationDialog && (
        <DeleteConfirmationDialog
          deleting={deleting}
          onCancelClick={handleCancelDeleteClick}
          onDeleteClick={handleConfirmDeleteClick}
        />
      )}

      {selectedResumeId && (
        <button
          onClick={openResumeView}
          className="mt-5 px-10 py-3 fixed bottom-5 right-[50%] sm:bottom-8 lg:bottom-9 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
        >
          Open
        </button>
      )}
    </Container>
  );
}

export default MyResumes;
