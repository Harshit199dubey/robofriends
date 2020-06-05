import React from 'react';

const Card = ({name, email, id}) =>{
	
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={`${name} robo`} src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
		)
}
export default Card;