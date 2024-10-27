
// "use client";

// import { useState, useEffect } from "react";


// const Modal = (props) => {

//     const [modal_0_open, setModal_0_open] = useState(false);

//     useEffect(() => {
//       const handleEsc = (event) => {
//         if (event.key === 'Escape') {
//           setModal_0_open(false);
//         }
//       };
//       window.addEventListener('keydown', handleEsc);

//       return () => window.removeEventListener('keydown', handleEsc);
//     }, []);

//     return(
//         <>
//             <button className="btn" onClick={()=>setModal_0_open(!modal_0_open)}>open modal</button>
//             {modal_0_open && (
//                 <div className="modal modal-open text-black" onClick={() => setModal_0_open(false)}>
//                     <div className="modal-box" onClick={(e) => e.stopPropagation()}>
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>setModal_0_open(false)}>✕</button>
//                         {
//                             props.title && (
//                                 <h3 className="font-bold text-lg">{props.title}</h3>
//                             )
//                         }
//                         {props.children}
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Modal;

"use client";

import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close the modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Render only if the modal is open
  if (!isOpen) return null;

  return (
    <div className="modal modal-open text-black" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
