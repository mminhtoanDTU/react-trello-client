import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from 'utilities/constants'

function ModalConfirm({ isShow, onAction, title, body }) {
    return (
        <Modal
            show={isShow}
            onHide={() => onAction(MODAL_ACTION_CLOSE)}
            backdrop="static"
            keyboard={false}
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="h5">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalConfirm
