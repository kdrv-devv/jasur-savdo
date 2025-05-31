import type { DispatchType , RootStore } from "../../redux/store";
import { useSelector  , useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";


export const useReduxSelector :TypedUseSelectorHook<RootStore> = useSelector
export const useReduxDispatch = () => useDispatch<DispatchType>

