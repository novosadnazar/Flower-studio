(() => {
    const refs = {
      openModalBtn: document.querySelector("[dota-modal-open]"),
      closeModalBtn: document.querySelector("[dota-modal-close]"),
      modal: document.querySelector("[dota-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();