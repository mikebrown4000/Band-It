import React from 'react';

function  CreateBandForm(props){
  const { handleChange,
          handleCreateBand,
          band_name,
          band_desc,
          band_genre }
  return(
    <form onSubmit={handleCreateBand}>
      <input
      type="text"
      name="band_name"
      placeholder="Name Of Your Band"
      value={band_name}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_desc"
      placeholder="Describe Your Band"
      value={band_desc}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_genre"
      placeholder="Genre Of Your Band"
      value={band_genre}
      onChange={handleChange}/>

      <input
      type="submit"
      onSubmit={handleCreateBand}/>
    </form>
  )

}

export default CreateBandForm;
