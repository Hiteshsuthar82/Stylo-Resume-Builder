import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  status: false,
  data: null,
  allTemplates: [
    {
      src: "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
      id: "t1",
    },
    {
      src: "https://cdn.create.microsoft.com/catalog-assets/en-us/ce343500-4aff-4dfa-b337-57c78459c6ee/thumbnails/616/modern-nursing-resume-orange-modern-geometric-1-1-1dc2d11a00d6.webp",
      id: "t2",
    },
    {
      src: "https://d25zcttzf44i59.cloudfront.net/official-resume-template.png",
      id: "t3",
    },
    {
      src: "https://d.novoresume.com/images/doc/general-resume-template.png",
      id: "t4",
    },
    {
      src: "https://marketplace.canva.com/EAFBL8KRmSA/1/0/1131w/canva-white-simple-student-cv-resume-NXs7xSf0K8I.jpg",
      id: "t5",
    },
  ],
};

export const uploadImage = createAsyncThunk(
  "resume/uploadImage",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/temp/upload-image`,
        credentials,
        {
          withCredentials: true ,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("image uploaded successfully.");
      return response.data;
    } catch (error) {
      console.log("error in uploading image.", error.payload);
      return rejectWithValue("uploadImage :: error ", error.payload);
    }
  }
);

export const createResume = createAsyncThunk(
  "resume/create",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/temp/edit-resume",
        credentials,
        { withCredentials: true }
      );

      console.log("resume create successfully.");
      return response.data;
    } catch (error) {
      return rejectWithValue("createResume :: error ", error.payload);
    }
  }
);

export const getAllResumes = createAsyncThunk(
  "resume/getAllResumes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/temp/Allresume`,
        { withCredentials: true }
      );

      console.log("all resume's data fetched successfully.");
      return response.data;
    } catch (error) {
      console.log("error occur in getAllResumes : ", error.response);
      return rejectWithValue("getAllResumes :: error ", error.response.data);
    }
  }
);

export const getUsersPermanentsDetail = createAsyncThunk(
  "resume/getUsersPermanentsDetail",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/temp/usersPermanentDetais`,
        { withCredentials: true }
      );

      console.log("user's Permanent resume's data fetched successfully.");
      return response.data;
    } catch (error) {
      console.log("error occur in getUsersPermanentsDetail : ", error.response);
      return rejectWithValue(
        "getUsersPermanentsDetail :: error ",
        error.response
      );
    }
  }
);

export const getResumeData = createAsyncThunk(
  "resume/getResumeData",
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/temp/resume-data/${credentials?.resumeId}`,
        { withCredentials: true }
      );

      if (response) {
        console.log("selected resume's data fetched successfully.");
        return response.data;
      } else {
        console.log("some error occured in getting resume's data");
      }
    } catch (error) {
      console.log("error occured in getResumeData", error.response);
      return rejectWithValue("getResumeData :: error ", error.response.data);
    }
  }
);

export const deleteResume = createAsyncThunk(
  "resume/deleteResume",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/temp/delete/resume/${credentials?.resumeId}`,
        { withCredentials: true }
      );
      console.log(response.data);

      return true;
    } catch (error) {
      console.log("selected resume deleted successfully.");
      return rejectWithValue("deleteResume :: error ", error.response.data);
    }
  }
);

export const editResume = createAsyncThunk(
  "resume/edit",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/temp/resume-edit/${credentials?.resumeId}`,
        credentials?.formData,
        { withCredentials: true }
      );
      console.log("resume edited successfully.");
      return response.data;
    } catch (error) {
      return rejectWithValue("editResume :: error ", error.response);
    }
  }
);

export const resumeSlice = createSlice({
  name: "resume/uploadImage",
  initialState,
  extraReducers: (builder) => {
    // create resume
    builder
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.status = false;
        state.data = null;
      })
      .addCase(uploadImage.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload;
      })
      .addCase(uploadImage.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // create resume
    builder
      .addCase(createResume.pending, (state) => {
        state.loading = true;
        state.status = false;
        state.data = null;
      })
      .addCase(createResume.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload;
      })
      .addCase(createResume.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // edit resume
    builder
      .addCase(editResume.pending, (state) => {
        state.loading = true;
      })
      .addCase(editResume.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload;
      })
      .addCase(editResume.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // getting all resumes data
    builder
      .addCase(getAllResumes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllResumes.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload.data;
      })
      .addCase(getAllResumes.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // getting permanent resumes data
    builder
      .addCase(getUsersPermanentsDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersPermanentsDetail.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload.data;
      })
      .addCase(getUsersPermanentsDetail.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // getting data of selected resume
    builder
      .addCase(getResumeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getResumeData.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
        state.data = actions.payload;
      })
      .addCase(getResumeData.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });

    // delete resume
    builder
      .addCase(deleteResume.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteResume.fulfilled, (state, actions) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(deleteResume.rejected, (state) => {
        state.loading = false;
        state.status = false;
      });
  },
});

export default resumeSlice.reducer;
