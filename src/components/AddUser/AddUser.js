import React, { useState } from 'react'
import Form from '../Layout/Form'
import Button from '../Layout/Button'

const AddUser = () => {

    const [input, setInput] =useState(
        {
            id: Math.ceil(Math.random() * 100),
            name: '',
            age: '',
            address: '',
            phone: '',
        }
    );
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const inputHandler = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        // setInput({ ...input, key: value })
        setInput((prevStat) => {
            console.log(prevStat);
            return { ...prevStat,  key: value }
        })
    }

  return (
    <Form onSubmit={ onSubmitHandler }>
        <Form.Controller>
            <label htmlFor='name'>Name : </label>
            <input type='text' id='name' placeholder='Enter Name' onChange={ inputHandler } />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='age'>Age : </label>
            <input type='text' id='age' placeholder='Enter Age' onChange={ inputHandler } />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='address'>Address : </label>
            <input type='text' id='address' placeholder='Enter Address' onChange={ inputHandler } />
        </Form.Controller>
        <Form.Controller>
            <label htmlFor='phone'>Phone : </label>
            <input type='text' id='phone' placeholder='Enter Phone' onChange={ inputHandler } />
        </Form.Controller>
        <Form.Controller>
            <Button  type='submit'>Save</Button>
            <Button type='reset'>Reset</Button>
        </Form.Controller>
    </Form>
  )
}

export default AddUser