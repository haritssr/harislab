import { UserCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import GlobalToolsModal from './GlobalToolsModal';

export default function Profil() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <GlobalToolsModal
      title='Profil'
      isOpen={isOpen}
      closeModal={closeModal}
      openModal={openModal}
      icon={<UserCircleIcon strokeWidth={2} className='h-5 w-5 text-zinc-700' />}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda saepe non quibusdam,
      molestias nihil fugit atque facere dolor iure, incidunt expedita corporis explicabo natus quas
      ut hic magnam nobis officia et aut at doloremque ad, quam ratione. Dolorum deserunt hic
      nesciunt. Dolor architecto nemo sunt consequatur? Cupiditate at quis rerum.
    </GlobalToolsModal>
  );
}
