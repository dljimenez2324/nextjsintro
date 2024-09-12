'use Client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'


const WelcomeButton = () => {

    const router = useRouter();

    // function
    const handleClick = () => {
        console.log('Ive been clicked');
        router.push('./HomePage');
    }

  return (
    
        <Button color='primary' variant='shadow' onClick={handleClick}>Click Me</Button>
    
  )
}

export default WelcomeButton