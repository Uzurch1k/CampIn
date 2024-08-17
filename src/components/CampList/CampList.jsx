import { useState } from 'react';

import CampItem from '../CampItem/CampItem';
import Modal from '../Modal/Modal';

import css from './CampList.module.scss';

const CampList = ({ camps }) => {
  const [selectedCamp, setSelectedCamp] = useState(null);

  const openModal = camp => {
    setSelectedCamp(camp);
  };

  const closeModal = () => {
    setSelectedCamp(null);
  };

  return (
    <>
      <ul className={css.list}>
        {camps.map(camp => (
          <CampItem key={camp._id} campItems={camp} openModal={openModal} />
        ))}
      </ul>
      <Modal campItem={selectedCamp} onClose={closeModal} />
    </>
  );
};

export default CampList;
