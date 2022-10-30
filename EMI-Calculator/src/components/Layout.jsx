import React from 'react'

const Layout = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <>
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <form className='d-flex'>
                    <button className='btn btn-danger' onClick={handleClick}>Logout</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Layout