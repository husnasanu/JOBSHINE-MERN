import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { editStatusAPI } from '../Services/allAPI';
import { editResponseContext } from '../contexts/ContextShare';

const Edit = ({ jobId, currentStatus }) => {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [show, setShow] = useState(false); 
  const [status, setStatus] = useState(currentStatus || 'Pending'); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleEdit = (event) => {
    setStatus(event.target.value);
  };

  // Open the edit modal for a particular job
  const handleEditStatus = () => {
    handleShow();
  };

  // Save the status change
  const handleSaveChanges = async () => {
    console.log(`Saving changes for Job ID: ${jobId}, New Status: ${status}`);

    try {
      const response = await editStatusAPI(jobId, { status });
      console.log("Response from server:", response.data);
      setEditResponse(response.data.status)
      alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please try again.');
    }

    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleEditStatus}>
        <i className="fa-solid fa-pen-to-square"></i> 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Status</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <label htmlFor="status-select">Select Status:</label>
          <select 
            id="status-select" 
            value={status} 
            onChange={handleEdit}
            className="status-select form-control"
          >
            <option value="Pending">Pending <i class="fa-solid fa-caret-down ps-5"></i></option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
