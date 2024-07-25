import React from 'react'

function Error() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', height: '100vh' }} 
        className='error-container'>
            <div className="error-wrapper">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            </div>
      
    </div>
  )
}

export default Error