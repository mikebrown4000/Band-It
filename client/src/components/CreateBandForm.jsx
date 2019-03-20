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
      name="name"
      placeholder="Name Of Your Band"
      value={name}
      onChange={handleChange}/>

      <input
      type="text"
      name="description"
      placeholder="Describe Your Band"
      value={description}
      onChange={handleChange}/>

      <input
      type="text"
      name="genre"
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
