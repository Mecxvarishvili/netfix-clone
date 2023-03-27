import { MutableRefObject, useEffect, useState } from "react"

/* import { useAppDispatch } from "../store/hooks";
import { AppDispatch } from "../store/store";

const dispatch = useAppDispatch()
const Func = {
    getElementWidth:  (ref: { current: Element; }, dispatch: AppDispatch) => {
        if (!ref.current) return;
        const resizeObserver = new ResizeObserver(() => {
            // dispatch(disableFocusCard())
            dispatch(dispatch)
            console.log('s')
        });
        resizeObserver.observe(ref.current);
        return () => resizeObserver.disconnect();
    }
}

export default Func */
export {}

export const useRefDimensions = (ref: MutableRefObject<any>) => {
    const [ dimensions, setDimensions ] = useState<{}>()
    useEffect(() => {
        if(ref.current) {
            const { current } = ref
            const boundingRect = current.getBoundingClientRect()
            const { width, height } = boundingRect
            setDimensions([width, height])
        }
    }, [ref])
    return dimensions
}

export function serializeFormQuery() {
    return 1
}