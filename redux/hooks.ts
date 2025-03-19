"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch } from "./store.ts";
// import { RootState } from "./types.js";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;
