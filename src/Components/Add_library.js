import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import apicallfunction from '../Function/apicallfunction'
import { useNavigate } from "react-router-dom";
import '../style/style.css'




export default function Add_library() {

    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        apicallfunction('libraryroute/add',

            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        navigate('/add_group')
    }

    return (
        <div className='container'>
            <div>
                <h2 className='text-center'>Add Library</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("lib_name", { required: true })}
                    className='form-control'
                    placeholder='Enter Library Name' />

                {errors.lib_name?.type === "required" && (
                    <p role="alert">Library name is required</p>
                )}
                <br />

                <input type="submit" className='btn btn-dark ' />
            </form>
        </div>
    )
}
