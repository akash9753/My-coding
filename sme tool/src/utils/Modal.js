import React, { useState, useEffect } from 'react';

const Updatecontact = ({ show, data, onSubmit, onCancel, editUser }) => {
    useEffect(() => {
        if (editUser) setFormData(editUser);
    }, [editUser]);

    // const initialFormState = () => {
    //     return editUser
    //         ? { id: null, name: 'silly billy', age: '123' }
    //         : { id: null, name: '', age: '' };
    // };

    // const [formData, setFormData] = useState(initialFormState);

    // const onInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: name === 'age' ? parseInt(value) : value,
    //     });

    // };

    // const submitData = (event) => {
    //     event.preventDefault();
    //     onSubmit(formData);
    //     onCancel();
    // };

    return show ? (

        <div className="modal-overlay">
            <div className="modal">
                <form onSubmit={submitData}>
                    <h3>{editUser ? 'Edit Details' : 'New details'}</h3>
                    <div className="modal-section">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onInputChange}
                            autoFocus
                            autoComplete="off"
                            className="modalInput"
                        />
                    </div>
                    <div className="modal-section">
                        <label>Age: &nbsp;</label>
                        <input
                            className="modalInput"
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                    </div>
                    <div className="modal-section">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="modalInput"
                            name="mail"
                            value={formData.mail}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                    </div>
                    <button className="btn" type="button" onClick={onCancel}>
                        cancel
                    </button>
                    <button className="btn btn-primary" type="submit">submit</button>
                </form>
            </div>
        </div>

    ) : null;
};

export default Updatecontact;
