import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Apply
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Please Enter Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div className='row'>
                <table style={{fontWeight: 'bold'}}>
                    <tr>
                        <td>From</td>
                        <td>:&nbsp;<input type='date'></input></td>
                    </tr>
                    <tr>
                        <td>To</td>
                        <td>:&nbsp;<input type='date'></input></td>
                    </tr>
                    <tr>
                        <td>Reason</td>
                        <td>:&nbsp;<input type='text' placeholder=''></input></td>
                    </tr>
                </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog