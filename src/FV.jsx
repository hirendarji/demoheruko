import React from 'react';
import { useForm } from 'react-hook-form';
 
function FV() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" placeholder="fname" ref={register({minLength:2,required:true})} />
      {errors.firstname && 'Last name is required.'}
       {/* register an input */}
      <input name="lastname" placeholder="lname" ref={register({ required: true })} />
      {errors.lastname && 'Last name is required.'}
      <input name="age" placeholder="age" ref={register({ pattern: /\d+/ ,required:true})} />
      {errors.age && 'Please enter number for age.'}
      {errors.age && 'age name is required.'}
      <input type="submit" />
    </form>
  );
}
export default FV;