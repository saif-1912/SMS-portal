import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import apicallfunction from '../Function/apicallfunction'
import { useNavigate } from "react-router-dom";

export default function Add_contact() {

  const navigate = useNavigate()

  var [data, Setdata] = useState([])

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)


    apicallfunction('contact_router/add',

      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    navigate('/add_message')
  }


  useEffect(() => {
    apicallfunction('group_router/show')
      .then(val => {
        console.log(val.data)
        Setdata(val.data)
      })
  }, [])


  return (
    <div className='container'>
      <div>
        <h2 className='text-center'>Add Contact</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          placeholder='Enter Your Name'
          className='form-control'
        />
        {errors.username?.type === "required" && (
          <p role="alert">Username is required</p>
        )}
        <br />

        <input
          {...register("usermobile", { required: true })}
          placeholder='Enter Your Mobile'
          className='form-control'
        />
        {errors.usermobile?.type === "required" && (
          <p role="alert">Usermobile is required</p>
        )}
        <br />

        <input {...register("useremail", { required: true })}
          placeholder='Enter Your Email'
          className='form-control'
        />
        {errors.useremail?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
        <br />

        <select className='form-control' {...register("group_id")}>

          <option value="">Please select Group</option>
          {data && data.map((obj) =>
            <>
              <option value={obj._id}>{obj.group_name}</option>
            </>
          )}




        </select><br />

        <input type="submit" className='btn btn-dark' />
      </form>
    </div>
  )
}
