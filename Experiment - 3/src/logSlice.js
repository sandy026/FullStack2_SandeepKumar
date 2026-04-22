import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogs = createAsyncThunk("logs/fetchLogs", async () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, activity: "Commute", carbon: 2.5 },
          { id: 2, activity: "Lunch", carbon: 0.5 },
        ]),
      1000
    )
  );
});

const logSlice = createSlice({
  name: "logs",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default logSlice.reducer;
