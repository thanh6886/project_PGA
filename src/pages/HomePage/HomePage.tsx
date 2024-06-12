import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { employee } from 'src/apis/employee.api'
import path from 'src/constants/path'

export default function HomePage() {
  const { data: employees } = useQuery({
    queryKey: ['data'],
    queryFn: employee.getEmployee
  })
  console.log(employees)

  return (
    <div>
      <div className='flex'>
        <Link to={path.login} className='bg-lime-500'>
          Login
        </Link>
      </div>
    </div>
  )
}
