// import React, { useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom';
// import ScrollBar from 'smooth-scrollbar-react';


// export default function SmoothScrollBar({ children }) {
//     const ref = useRef(null);
//     const { pathname } = useLocation()
//     useEffect(() => {
//         const { scrollbar } = ref.current;
//         scrollbar.setPosition(0, 0);
//     }, [pathname]);
//     return (
//         <ScrollBar ref={ref} damping={0.1}>
//             {children}
//         </ScrollBar>
//     )
// }
