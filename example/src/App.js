import React from 'react'

import Dropzone from '../../src/Dropzone'

const styles = {
  dropzoneActive: {
    backgroundColor: '#F6F8FA',
    border: '2px solid #3DC59F',
  },
  input: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    cursor: 'pointer',
  },
}

const App = () => {
  const getUploadParams = ({ file, meta }) => {
    const url = 'https://httpbin.org/post'
    const fileUrl = `${url}/${encodeURIComponent(meta.name)}`
    return { url, meta: { fileUrl } }
  }

  const handleSubmit = (files) => {
    console.log(files.map(f => f.meta))
  }

  const onChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
    if (status === 'done') return { meta: { custom: true } }
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={onChangeStatus}
      onSubmit={handleSubmit}
      maxSizeBytes={1024 * 1024 * 1000}
      styles={styles}
      fileInputText=""
      fileInputWithFilesText=""
      instructions={<span className="dzu-largeText">Drop Or Pick Files</span>}
    />
  )
}

export default App
