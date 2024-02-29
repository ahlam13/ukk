import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoBanOutline } from "react-icons/io5";

const BlockUserModal = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button onClick={() => setOpenModal(true)}>
                <IoBanOutline className="text-2xl text-red-600 hover:bg-red-600 hover:text-white rounded-md" />
            </button>
            <Modal
                show={openModal}
                size="md"
                onClose={() => setOpenModal(false)}
                popup
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Blokir pengguna?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={() => setOpenModal(false)}
                                className="w-16"
                            >
                                {"Iya"}
                            </Button>
                            <Button
                                color="gray"
                                onClick={() => setOpenModal(false)}
                            >
                                Batal
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BlockUserModal;
