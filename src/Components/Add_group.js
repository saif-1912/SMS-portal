import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import apicallfunction from '../Function/apicallfunction'
import { useNavigate } from "react-router-dom";




export default function Add_group() {

    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        apicallfunction('group_router/add',

            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        navigate('/add_contact')
    }

    return (
        <div className='container'>
            <div>
                <h2 className='text-center'>Add Group</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("group_name", { required: true })}
                    className='form-control'
                    placeholder='Enter Group Name' />

                {errors.group_name?.type === "required" && (
                    <p role="alert">Group name is required</p>
                )}
                <br />

                <input type="submit" className='btn btn-dark' />
            </form>
        </div>
    )
}
