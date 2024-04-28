import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmployeePage = () => {
    return (
        <div className=' flex flex-col gap-4 mt-4 w-screen max-w-[1400px] justify-center items-center'>
            <h1 className='text-5xl font-bold text-center'>CRUD Operation using NextJS</h1>
            <Button asChild>
                <Link href="/employee/create">Create</Link>
            </Button>
        </div>

    )
}

export default EmployeePage
