import React from 'react'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      {touched &&
        error &&
        <div style={{ marginBottom: '20px', color: '#700' }}>
          <i className="material-icons left tiny" style={{ marginRight: '5px' }}>
            error
          </i>
          {error}
        </div>
      }
    </div>
  )
};
