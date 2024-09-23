import React, { useState } from 'react';
import axios from 'axios';

const CreateDynamicModel = () => {
    const [modelName, setModelName] = useState('');
    const [fields, setFields] = useState([{ name: '', type: 'CharField', options: {} }]);

    const handleAddField = () => {
        setFields([...fields, { name: '', type: 'CharField', options: {} }]);
    };

    const handleCreateModel = () => {
        axios.post('http://127.0.0.1:8000/api/dynamic-model/', { model_name: modelName, fields })
            .then(response => {
                console.log('Model created:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the model!', error);
            });
    };

    return (
        <div>
            <h1>Create Dynamic Model</h1>
            <input className=' bg-gray-600 my-2 p-2'
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="Model Name"
            />
            {fields.map((field, index) => (
                <div key={index}>
                    <input className=' bg-gray-600 p-2 my-2'
                        type="text"
                        value={field.name}
                        onChange={(e) => {
                            const newFields = fields.slice();
                            newFields[index].name = e.target.value;
                            setFields(newFields);
                        }}
                        placeholder="Field Name"
                    />
                    <select className=' bg-gray-700'
                        value={field.type}
                        onChange={(e) => {
                            const newFields = fields.slice();
                            newFields[index].type = e.target.value;
                            setFields(newFields);
                        }}
                    >
                        <option value="CharField">CharField</option>
                        <option value="IntegerField">IntegerField</option>
                        <option value="TextField">TextField</option>
                        {/* Add more field types as needed */}
                    </select>
                </div>
            ))}
            <button className=' p-2 bg-purple-400 m-2' onClick={handleAddField}>Add Field</button>
            <button className=' p-2 bg-purple-400 m-2' onClick={handleCreateModel}>Create Model</button>
        </div>
    );
};

export default CreateDynamicModel;
