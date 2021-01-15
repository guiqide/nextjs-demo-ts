import React, { FC, useState, useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next'

interface IName {
  name: string
}

const Login: NextComponentType = (res: IName) => {
  return (
    <p>欢迎登录{res.name}</p>
  )
}

Login.getInitialProps = async (ctx: NextPageContext): Promise<IName> => {
    const res = await fetch('http://localhost:3000/api/hello')
    const json = await res.json()
    console.log(json);
    
    return json
  }

export default Login