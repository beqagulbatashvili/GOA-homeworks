import React from "react";

function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        age: event.target.age.value,
        city: event.target.city.value,
        };

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="firstName" 
            placeholder="Enter first name"
        />

        <input 
            type="text" 
            name="lastName" 
            placeholder="Enter last name"
        />

        <input 
            type="number" 
            name="age" 
            placeholder="Enter age"
        />

        <input 
            type="text" 
            name="city" 
            placeholder="Enter city"
        />

        <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
