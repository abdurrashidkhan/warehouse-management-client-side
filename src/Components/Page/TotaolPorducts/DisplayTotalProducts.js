import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DisplayTotalProducts = ({data}) => {
  const {img , title , about , price , _id} = data;
  return (
    <div >
      <div className="bg-slate-100 border-2 rounded-lg">
        <img className='' style={{width:'100%',height:'300px'}} src={img} alt="" />
        <div className="p-2">
          <h2 >{title}</h2>
          <strong>{price}</strong>
          <p className=''>{about}</p>
        </div>
        <Link to={`/product/${_id}`} className='w-full bg-sky-500 py-2 rounded hover:bg-sky-600 block text-center'>select product</Link>
      </div>
    </div>
  );
};

export default DisplayTotalProducts;