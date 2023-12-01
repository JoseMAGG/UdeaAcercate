import React, { FormEvent as ReactFormEvent , useState } from 'react'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { spawn } from 'child_process';
import { CREATE_EVENT } from '@/graphql/client/event';
import { useMutation, useQuery } from '@apollo/client';
import { useUserData } from '@/hooks/useUserData';

// import { useUserData } from '@/hooks/useUserData';

interface FormDataInterface {
    [key: string] : string;
}

const FormEvent = () => {

    // const {userData} = useUserData();
    /*const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //setFormData({...formData, image: usrImage});
        //setFormData({...formData, authorId: userData});
        setFormData({
            ...formData,
            image: usrImage,
            authorId: userData,
          });
        console.log('formaData: ',formData);
        console.log("url imagen", usrImage);
    }*/

    const [crearEvento] = useMutation(CREATE_EVENT);
    const {loading: loadingUser, session, status, userData} = useUserData();
    const userId = userData?.user.id
    

    

    /*const [formData, setFormData] = useState<FormDataInterface>({
        title: '', description: '', place: '', date: '', tag: 'Academico', image: '', authorId: ''});*/
    const [usrImage, setUsrImage] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');

    function handleOnUpload(result: any, operations: any) {
        // if (!result.event === "success") {
        // //   updateError(result?.info);
        //   return;
        // }
        setUsrImage(result?.info.secure_url);
        // setValue("userImage", result?.info.secure_url);
        // console.log("url imagen", usrImage);
      }

      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        try {
          await crearEvento({
            variables: {
                title,
                description,
                place,
                date,
                image: usrImage,
                tag,
                authorId: userId,                               
            },
          });
          console.log("formulario", FormData)
        } catch (error) {
          console.error('Error al crear o actualizar el perfil', error);
        }
      };
  return (
    <form onSubmit={handleSubmit} className='w-[400px] flex flex-col gap-2'>
            <label htmlFor="title">
                <span>Titulo:</span>
                <input 
                    type="text" 
                    name='title'
                    placeholder='titulo del evento'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="description">
                <span>Descripcion:</span>
                <input 
                    type="text" 
                    name='description'
                    placeholder='descripcion del evento'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="place">
                <span>Lugar:</span>
                <input 
                    type="text" 
                    name='place'
                    placeholder='lugar del evento'
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />   
            </label>
            <label htmlFor="date">
                <span>Fecha:</span>
                <input 
                    type="date" 
                    name='date'
                    placeholder='fecha del evento'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px'
                    }}
                />
            </label>
            <label htmlFor="tag">
                <span>Tipo de evento:</span>
                <select
                    id="tag"
                    name="tag"
                    onChange={(e) => setTag(e.target.value)}
                    required
                    style={{
                        border: '1px solid black',
                        padding: '2px',
                        
                    }}
                >
                    <option disabled value={''}>Seleccionar</option>
                    <option value="Academico">Academico</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Deportivo">Deportivo</option>
                </select>
            </label>
            <figure className='debug flex flex-col items-center'>
                {usrImage ? <img src={usrImage} /> : <span>Sube la imagen del evento</span>}
                <CldUploadButton
                    uploadPreset="udeacercate2023"
                    onUpload={handleOnUpload}
                    className='ButtonCard'
                    // id="cloudinary"
                >
                    {/* <i className="bi bi-camera fs-5" id='CameraIcon' /> */}
                </CldUploadButton>
            </figure>
            <button className='debug ButtonCard' type='submit'>Crear</button>

    </form>
  )
}

export default FormEvent