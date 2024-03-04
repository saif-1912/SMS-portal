import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import apicallfunction from '../Function/apicallfunction'

export default function Add_message() {

  var [data, Setdata] = useState([])

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)

    apicallfunction('message_route/add',

      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

  }

  useEffect(() => {
    apicallfunction('libraryroute/show')
      .then(val => {
        console.log(val.data)
        Setdata(val.data)
      })
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center'>Add Message</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea cols="0" rows="0"
          className='form-control'
          placeholder='Enter Your Messages'
          {...register("Message", { required: true })}>
        </textarea>
        {errors.Message?.type === "required" && (
          <p role="alert">Message is required</p>
        )}
        <br />
        <select {...register("lib_id", { required: true })} className='form-control'>
          <option value="female">Please Enter a Library</option>
          {data && data.map((obj) =>
            <option value={obj._id}>{obj.lib_name}</option>
          )}

        </select>
        <br />
        <input type="submit" className='btn btn-dark' />
      </form>
    </div>
  )
}