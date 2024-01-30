import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <MdDelete
              className="mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                deleteNote(note._id);
                toast.success("Your note has been deleted successfully");
              }}
            />
            <MdEdit
              className="mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                updateNote(note);
              }}
            />
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
