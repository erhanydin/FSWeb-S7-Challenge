import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";

const Schema = yup.object().shape({
    name: yup.string().required("Name is required").min(2, 'İsim en az 2 karakter olmalıdır'),
    special: yup.string().required("Message is required").min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

function Form(props) {

    //****************************************//
    const [formData, setFormData] = useState({
        name: '',
        size: 'Large',
        material1: false,
        material2: false,
        material3: false,
        material4: false,
        special: '',
    })
    //****************************************//
    const [disabled, setDisabled] = useState(true);
    //****************************************//
    useEffect(() => {
        Schema.isValid(formData)
            .then(valid => setDisabled(!valid));
    }, [formData]);
    //****************************************//
    const [errors, setErrors] = useState({
        name: '',
        special: '',
    });
    const history = useHistory();
    //****************************************//

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://reqres.in/api/orders', formData)
            .then((res) => {
                console.log(res.data)

                setFormData({

                    name: '',
                    size: 'Large',
                    material1: false,
                    material2: false,
                    material3: false,
                    material4: false,
                    special: '',

                })
            })


    }


    //****************************************//
    const checkErrors = (name, value) => {
        yup
            .reach(Schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) =>
                setErrors({ ...errors, [name]: err.errors[0] })
            );
    }

    //****************************************//
    const handleChange = (event) => {
        const { checked, value, name, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;

        type === 'text' && checkErrors(name, value)

        setFormData({
            ...formData,
            [name]: valueToUse
        })

    }

    // const handleChange2 = (event) => {
    //     const { value, name } = event.target;

    //     checkErrors(name, value)

    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })

    // }



    return (
        <div>
            <h1>Build your own pizza!</h1>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Your full name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            id="name-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="size">Choise of size: </label>
                    <select name="size" id="size-dropdown" value={formData.size} onChange={handleChange}>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                    </select>
                </div>
                <div>
                    <p>Materials</p>
                    <label>
                        Material 1
                        <input
                            type="checkbox"
                            name="material1"
                            checked={formData.material1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Material 2
                        <input
                            type="checkbox"
                            name="material2"
                            checked={formData.material2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Material 3
                        <input
                            type="checkbox"
                            name="material3"
                            checked={formData.material3}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Material 4
                        <input
                            type="checkbox"
                            name="material4"
                            checked={formData.material4}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Special Instructions
                        <input
                            type="text"
                            name="special"
                            id="special-text"
                            placeholder="Anything else you'd like to add?"
                            value={formData.special}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <input type="button" value="Add to Order" disabled={disabled} />
                </div>
                <div style={{ color: 'red' }}>{errors.name}</div>
                <div style={{ color: 'red' }}>{errors.special}</div>
            </form>
        </div>
    )
};

export default Form;