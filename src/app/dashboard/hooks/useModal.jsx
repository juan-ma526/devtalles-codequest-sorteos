const useModal = (idModal) => {
    const handleShowModal = () => {
        document.getElementById(idModal).showModal();
    }

    const handleCloseModal = () => {
        document.getElementById(idModal).close();
    }

    return [handleShowModal, handleCloseModal];
}

export default useModal