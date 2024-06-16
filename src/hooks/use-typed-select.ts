import { useSelector, TypedUseSelectorHook } from "react-redux"
import { rootState } from "../state"
import { useState } from "react"

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector