import reducer, { DEFAULT_STATE } from "../bees";
import {
  FETCH_BEES_REQUEST,
  BEES_RECEIVED,
  BEES_REQUEST_FAILED,
  CREATE_BEE_REQUEST,
  CREATE_BEE_FAILED,
  CREATE_BEE_SUCCESSFUL,
  REMOVE_BEE_REQUEST,
  REMOVE_BEE_FAILED,
  REMOVE_BEE_SUCCESSFUL,
  REMOVE_ALL_BEES_REQUEST,
  REMOVE_ALL_BEES_FAILED,
  REMOVE_ALL_BEES_SUCCESSFUL
} from "../../actionTypes/bees";

describe("bees reducer", () => {
  it("should return the initial state", () => {
    const result = reducer(DEFAULT_STATE, {});
    expect(result).toEqual(DEFAULT_STATE);
  });

  it("should not the initial state when the state is null", () => {
    const result = reducer(null, {});
    const expected = null;
    expect(result).toEqual(expected);
  });

  it("should not the initial state when the state is not defined", () => {
    const result = reducer(undefined, {});
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  // it("should handle SET_OPERATION_HOTKEY", () => {
  //   const mockAction = {
  //     type: SET_OPERATION_HOTKEY,
  //     payload: {
  //       operation: "testOperation",
  //       value: "p"
  //     }
  //   };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = {
  //     ...DEFAULT_STATE,
  //     hotkeys: {
  //       ...DEFAULT_STATE.hotkeys,
  //       testOperation: {
  //         value: "p"
  //       }
  //     }
  //   };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle RESUME_CONTROLS", () => {
  //   const mockAction = { type: RESUME_CONTROLS };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = {
  //     ...DEFAULT_STATE,
  //     controlsEnabled: true
  //   };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle PAUSE_CONTROLS", () => {
  //   const mockAction = { type: PAUSE_CONTROLS };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = {
  //     ...DEFAULT_STATE,
  //     controlsEnabled: false
  //   };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_A_OFF", () => {
  //   const mockAction = { type: AUGMENT_A_OFF };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentA: false };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_A_ON", () => {
  //   const mockAction = { type: AUGMENT_A_ON };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentA: true };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_B_OFF", () => {
  //   const mockAction = { type: AUGMENT_B_OFF };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentB: false };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_B_ON", () => {
  //   const mockAction = { type: AUGMENT_B_ON };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentB: true };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_C_OFF", () => {
  //   const mockAction = { type: AUGMENT_C_OFF };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentC: false };
  //   expect(result).toEqual(expected);
  // });
  //
  // it("should handle AUGMENT_C_ON", () => {
  //   const mockAction = { type: AUGMENT_C_ON };
  //   const result = reducer(DEFAULT_STATE, mockAction);
  //   const expected = { ...DEFAULT_STATE, augmentC: true };
  //   expect(result).toEqual(expected);
  // });
});
