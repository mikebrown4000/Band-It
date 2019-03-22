import React from 'react';

function  CreateBandForm(props){
  const { handleChange,
          handleCreateBand,
          name,
          band_description,
          genre,
          band_img } = props;

  return(
    <div className='band-form-container'>
    <form onSubmit={handleCreateBand}>
      <input
      type="text"
      name="name"
      placeholder="Name Of Your Band"
      value={name}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_description"
      placeholder="Describe Your Band"
      value={band_description}
      onChange={handleChange}/>

      <input
      type="text"
      name="genre"
      placeholder="Genre Of Your Band"
      value={genre}
      onChange={handleChange}/>

      <input
      type="text"
      name="band_img"
      placeholder="Insert the image"
      value={band_img}
      onChange={handleChange} />

      <input
      type="submit"
      onSubmit={handleCreateBand}/>

    </form>
    </div>
  )
}

export default CreateBandForm;
