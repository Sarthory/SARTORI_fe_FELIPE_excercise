import React from 'react';
import {UserData} from 'types';
import {Modal, ModalOverlay} from './userDeatailModalStyles';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserData;
}

export default function UserDeatailModal({isOpen, setIsOpen, userData}: Props) {
    const handleOverlayClose = e => {
        if (e.target.id === 'userModal') {
            setIsOpen(false);
        }
    };

    return (
        <>
            {isOpen && (
                <ModalOverlay
                    id="userModal"
                    data-testid="userModal"
                    onClick={e => {
                        handleOverlayClose(e);
                    }}
                >
                    <Modal id={userData?.id}>
                        <div className="modalHeader">
                            <svg viewBox="0 0 24 24">
                                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                            </svg>
                            <h2>{`${userData?.firstName} ${userData?.lastName}`}</h2>
                        </div>

                        <div className="modalBody">
                            <div className="bodyField">
                                <div>Name:</div>
                                <span>{`${userData?.firstName} ${userData?.lastName}`}</span>
                            </div>

                            <div className="bodyField">
                                <div>Display name:</div>
                                <span>{userData?.displayName}</span>
                            </div>

                            <div className="bodyField">
                                <div>Location:</div>
                                <span>{userData?.location}</span>
                            </div>
                        </div>

                        <div className="modalFooter">
                            <div onClick={() => setIsOpen(false)} className="closeBtn">
                                Close
                            </div>
                        </div>
                    </Modal>
                </ModalOverlay>
            )}
        </>
    );
}
