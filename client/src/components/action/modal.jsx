
"use client";

import { useState, useEffect } from "react";


const Modal = (props) => {

    const [modal_0_open, setModal_0_open] = useState(false);

    useEffect(() => {
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          setModal_0_open(false);
        }
      };
      window.addEventListener('keydown', handleEsc);
  
      return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return(
        <>
            <button className="btn" onClick={()=>setModal_0_open(!modal_0_open)}>open modal</button>
            {modal_0_open && (
                <div className="modal modal-open text-black" onClick={() => setModal_0_open(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>setModal_0_open(false)}>✕</button>
                        {
                            props.title && (
                                <h3 className="font-bold text-lg">{props.title}</h3>
                            )
                        }
                        {props.children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;