import { useContext, useRef, useState } from 'react';
import {motion, useAnimate, stagger} from 'framer-motion'
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();
  const [scope, animate] = useAnimate()

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate('input, textarea', {x: [-20, 0, 20, 0]}, {type: 'spring', duration: 0.5, delay: stagger(0.5)})
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul id="new-challenge-images" variants={{
          show: {transition: {staggerChildren: 0.2}}
          
          }}>
          {images.map((image) => (
            <motion.li
              variants={{
                hide: {opacity: 0, scale: 0.5}, //As chaves devem ser as mesmas do compenente pai
                show: {opacity: 1, scale: 1}
              }}
              transition={{type: 'spring', stiffness: 200}}
              key={image.alt}
              exit={{opacity: 1, scale: 1}}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
