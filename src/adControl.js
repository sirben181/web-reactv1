import React from 'react'
import './adControl.css'

const adControl = () => {
  return (
    <div>
        <div className='control-container'>
            <form action="/posts/adcontrol" method='post'>
                <div className='form-control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='add title' name='title'/>
                </div> <div className='form-control'>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" placeholder='add title' name='description'>

                    </textarea>
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Title</label>
                    <textarea type="text" placeholder='add title' name='body'></textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default adControl