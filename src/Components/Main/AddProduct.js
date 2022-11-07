
import { db } from '../../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const AddProduct = () =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const productCollection = collection(db,"products");

    const addProduct = async (e) =>{
      
        e.preventDefault();
        
        try{

          await addDoc(productCollection,{
            title,
            description,
            image,
            price,
            category,
          });

          MySwal.fire({
            title: "Created!",
            text: "Your product has been created successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });

          navigate("/products");

        }catch(error){

          MySwal.fire({
            title: "Error!",
            text: "Your product has not been created.",
            icon: "error",
            confirmButtonText: "Ok",
          });

        }
    }

    return(
        <div>
            <form onSubmit={addProduct}>
                <input 
                type='text'
                name='title'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                name='description'
                placeholder='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <input
                type='text'
                name='image'
                placeholder='image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />

                <input
                type='number'
                name='price'
                placeholder='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <input
                type='text'
                name='category'
                placeholder='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />

                <Button variant='success' type='submit'>Create Product</Button>
            </form>
        </div>
    )
}
export default AddProduct;