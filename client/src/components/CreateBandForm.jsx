import React from 'react';

function  CreateBandForm(props){
  const { handleChange,
          handleCreateBand,
          name,
          description,
          genre } = props;
  return(
    <form onSubmit={handleCreateBand}>
      <input
      type="text"
      name="band_name"
      placeholder="Name Of Your Band"
      value={name}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_desc"
      placeholder="Describe Your Band"
      value={description}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_genre"
      placeholder="Genre Of Your Band"
      value={genre}
      onChange={handleChange}/>

      <input
      type="submit"
      onSubmit={handleCreateBand}/>
    </form>
  )

}

export default CreateBandForm;
