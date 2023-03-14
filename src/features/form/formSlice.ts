import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Robot, RobotResponse } from "../../model/robot.model";
import { postRobot } from "./formAPI";

export interface FormState {
  robots: Robot[];
  status: "idle" | "loading" | "failed";
}

const initialState: FormState = {
  robots: [],
  status: "idle",
};

export const postNewRobot = createAsyncThunk(
  "form/postNewRobot",
  async (newRobot: RobotResponse) => {
    const response = await postRobot(newRobot);
    return response;
  }
);

export const formSlice = createSlice({
  name: "cardList",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postNewRobot.pending, (state: { status: string }) => {
        state.status = "loading";
      })
      .addCase(
        postNewRobot.fulfilled,
        (state, action: PayloadAction<Robot[]>) => {
          state.status = "idle";
          state.robots = action.payload;
        }
      )
      .addCase(postNewRobot.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectRobots = (state: RootState) => state.cardList.robots;
export const selectStatus = (state: RootState) => state.cardList.status;

export default formSlice.reducer;
