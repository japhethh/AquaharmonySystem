import React from 'react'

const account = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl">Account</h1>
      </div>
      <form className="flex flex-col w-64" action="">
        <label htmlFor="name">Name</label>
        <input type="text" id='name'/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id='email'/>

        <label htmlFor="password">Password</label>
        <input type="text" id='password' />

      </form>
    </div>
  )
}

export default account