/* eslint-disable no-console */
import zipy from 'zipy-staging-nextjs';
export async function throwerror (status) {

    try {
    
      const response = await fetch(`http://localhost:4000/api/error/${status}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                "token": "kjbdfhdh.djbr.scrff"
            }
          })
          
          zipy.logError('API FETCH', `${status}`)

          return response
    } catch(e) {
      console.error(e);
    }
  }
