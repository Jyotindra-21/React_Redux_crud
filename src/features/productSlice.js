import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk("fetchProduct", async () => {
  try {
    const res = await axios.get("http://localhost:3000/products");
    if (res.status == 200) {
      return res.data;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteProducts = createAsyncThunk("deleteProduct", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);
    if (res.status == 200) {
      toast.success("Product Deleted Successfully !!");
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});
export const addProducts = createAsyncThunk("addProduct", async (formData) => {
  try {
    const res = await axios.post(`http://localhost:3000/products`, formData);
    if (res.status == 201) {
      toast.success("Product Inserted Successfully !!");
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const updateProducts = createAsyncThunk(
  "updateProducts",
  async (formData) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/products/${formData.id}`,
        formData
      );
      if (res.status == 200) {
        toast.success("Product Updated Successfully !!");
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
