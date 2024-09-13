import AddButton from '@/app/components/AddButton';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface Post {
    id: number,
    title: string,
    description: string
}

const HomePage = async () => {

    let result = await fetch('http://localhost:5041/api/Blog/GetPublishedItems');
    let posts:Post[] = await result.json();

    // helper function
    const reload = async () => {
        'use server'
        revalidatePath('/HomePage');  // this is a server action so we need to tell next js that we want to use this to be fired on the server side
    }

  return (
    <>
        <div className='flex justify-center mt-8'>
            <AddButton reload={reload}/>
        </div>
        <div className='grid gap-4 grid-cols-4 mt-8 mx-[1%]'>

        {/* <h1>Welcome to the HomePage</h1> */}
        {posts.map((post,index) => (
            <Card key={index}>
                <CardHeader>
                    <h1 className='text-large font-bold'>{post.title}</h1>
                </CardHeader>
                <CardBody>
                    <p>{post.description}</p>
                </CardBody>
            </Card>
        ))}
        </div>
    </>
  )
}

export default HomePage