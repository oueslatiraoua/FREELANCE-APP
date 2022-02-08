import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//************get post list
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/post/getposts");
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********add new post
export const addPost = createAsyncThunk(
  "posts/addPost",
  async (postInfo, { rejectWithValue, dispatch }) => {
    console.log("postInfo", postInfo);
    const formData = new FormData();
    formData.append("picture", postInfo.file);
    formData.append("info", JSON.stringify(postInfo.data));
    try {
      await axios.post("/api/post/newpost", formData, {
        headers: { token: localStorage.getItem("token") },
      });
      console.log("formData", formData);
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********like /dislike post
export const likePost = createAsyncThunk(
  "posts/likePost",
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`/api/post/like/${postId}`, null, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********add comment to the post
export const addComment = createAsyncThunk(
  "posts/addComment",
  async (commentInfo, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(
        `/api/comment/newcomment/${commentInfo.postId}`,
        { description: commentInfo.description },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return dispatch(getPosts(), console.log("commentInfo", commentInfo));
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********delete comment
export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        `/api/comment/deletecomment/${info.postId}/${info.commentId}`,

        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);

//**********delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/post/${postId}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********update post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postInfo, { rejectWithValue, dispatch }) => {
    const formDataUpdate = new FormData();
    formDataUpdate.append("picture", postInfo.file);
    formDataUpdate.append("info", JSON.stringify(postInfo.info));
    try {
      const { data } = await axios.put(
        `/api/post/${postInfo.info.id}`,
        formDataUpdate,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      console.log("postInfo", postInfo);
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********add package
export const addPackage = createAsyncThunk(
  "posts/addPackage",
  async (postInfo, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(
        `/api/pricing/addPrices/${postInfo._id}`,
        { ...postInfo },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********delete price
export const deletePackage = createAsyncThunk(
  "posts/deletePrice",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        `/api/pricing/deletePrices/${info.id}/${info.priceId}`,

        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return dispatch(loadPost(info.id));
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//***********load post info
export const loadPost = createAsyncThunk(
  "posts/loadPost",

  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/post/loadPostInfo/${postId}`);
      console.log("data=", data);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [],
    errors: null,
    postInfo: {},
    loading: false,
  },
  extraReducers: {
    //***********get posts handler
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.postList = action.payload;
      state.errors = null;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //***********get posts details handler
    [loadPost.pending]: (state) => {
      state.loading = true;
    },
    [loadPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.postInfo = action.payload;
      state.errors = null;
    },
    [loadPost.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});
export default postSlice.reducer;
