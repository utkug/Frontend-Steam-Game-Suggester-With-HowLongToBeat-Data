import React from 'react'
import { Text} from '@mantine/core'
import { MantineProvider } from '@mantine/core'

function NotFound() {
  return (
    <div style={{backgroundColor:'black', height:'100vh', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
      <MantineProvider>
      <Text c='cyan' style={{fontSize:'60px'}}>Woopsie Oopsie :/</Text>
      <br />
      <Text c='cyan' style={{fontSize:'30px'}}>Page Not Found 404</Text>
      </MantineProvider>
    </div>
  )
}

export default NotFound