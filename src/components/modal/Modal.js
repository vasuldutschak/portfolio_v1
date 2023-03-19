import React, {useEffect} from 'react';
import {createPortal} from "react-dom";
import styles from './style.module.css'
function Modal({children,onClose}) {
    const modalRoot = document.getElementById('modal-root')
    const ESCAPE='Escape'
    useEffect(()=>{
        document.addEventListener('keydown',closeModal)
        return ()=>{
            document.removeEventListener('keydown',closeModal)
        }
    })

    function closeModal({target,currentTarget,code}){
        if (target===currentTarget || code === ESCAPE) onClose()
    }

    return createPortal(
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal}>
                <span className={styles.close} onClick={closeModal}>X</span>
                {children}
            </div>
        </div>, modalRoot
    );
}

export default Modal;