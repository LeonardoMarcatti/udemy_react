import { createPortal } from 'react-dom';
import {motion} from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog variants={{
        show: {opacity: 1, y: 0},
        hide: {opacity: 0, y: 30}
      }} animate='show' initial='hide' exit='hide' transition={{duration: 0.25}} open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
