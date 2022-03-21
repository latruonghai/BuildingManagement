import { useState } from "react";

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => { console.log("Begin toggle ", isShowing); setIsShowing(!isShowing); console.log("End toggle ", isShowing); };
    return { isShowing, toggle };
};