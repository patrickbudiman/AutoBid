import React from 'react'
import { getSession, getTokenWorkaround } from '../actions/authActions'
import Heading from '../components/Heading';
import AuthTest from './AuthTest';

export default async function Session() {
  const session = await getSession();
  const token = await getTokenWorkaround();

  return (
    <div>
        <Heading title='Session dashboard' />

        <div>
            <h3 className='text-lg'>Session Data</h3>
            <pre>{JSON.stringify(session,null,2)}</pre>
        </div>
        <div className='mt-4'>
          <AuthTest/>
        </div>
        <div>
            <h3 className='text-lg'>Token Data</h3>
            <pre>{JSON.stringify(token,null,2)}</pre>
        </div>
    </div>
  )
}
