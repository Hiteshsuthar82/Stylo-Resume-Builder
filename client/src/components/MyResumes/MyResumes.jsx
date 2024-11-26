import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Template,
  DeleteConfirmationDialog,
} from "./../index";
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
      console.error("Error during resume deletion:", error);
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
      if (response && response?.meta?.statusCode !== 404) {
        console.log("All resumes fetched successfully.");
        setMyResumes(response.payload.data);
        setLoading(false);
      } else {
        console.log("No resumes found.");
        setMyResumes(null);
        setLoading(false);
      }
    });
  }, [deleting]);

  return !myResumes ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          alt="No resume found"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 9V6a2.25 2.25 0 012.25-2.25h.75a2.25 2.25 0 012.25 2.25v3m3 0v5.25A2.25 2.25 0 0115.75 16.5h-7.5A2.25 2.25 0 016 14.25V9m9 0V6.75a2.25 2.25 0 00-2.25-2.25h-.75a2.25 2.25 0 00-2.25 2.25V9m3 0v3.75m-3 0h-.75A2.25 2.25 0 019 11.25V9"
          ></path>
        </svg>
        <h1 className="text-2xl font-semibold text-gray-700" role="heading">
          No Resume Found
        </h1>
        <p className="text-gray-500 mt-2">
          It looks like there are no resumes available at the moment.
        </p>
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => navigate("/steps")}
          aria-label="Create a new resume"
        >
          Create a New Resume
        </button>
      </div>
    </div>
  ) : loading ? (
    <div className="h-[75vh] w-full flex items-center justify-center">
      <img
        src={loader}
        alt="Loading resumes"
        className="h-40"
        loading="lazy"
      />
    </div>
  ) : (
    <Container>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 gap-16 flex-wrap justify-center">
        {templates &&
          myResumes &&
          myResumes.map((resume, index) => {
            const template = templates.find(
              (template) => template.id === resume.templateId
            );
            if (template) {
              return (
                <Template
                  key={index}
                  templateData={template}
                  name={resume.name}
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
          className="mt-5 w-[70%] md:w-[50%] lg:w-[20%] py-3 fixed bottom-5 right-[15%] md:right-[25%] lg:right-[40%] sm:bottom-8 lg:bottom-9 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
          aria-label="Open Resume View"
        >
          Open
        </button>
      )}
    </Container>
  );
}

export default MyResumes;
