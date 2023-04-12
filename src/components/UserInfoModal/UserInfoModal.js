// import { useState, useRef } from 'react';
// import { HiPlus } from 'react-icons/hi';
// import { FiUser, FiEdit2 } from 'react-icons/fi';

// import {
//   UserForm,
//   PictureField,
//   PickButton,
//   NameField,
//   SubmitButton,
// } from './UserInfoModal.styled';

// export const UserInfoModal = () => {
//   const picturePicker = useRef(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   // const [uploadedFile, setUploadedFile] = useState(null);

//   const pictureHandler = e => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handlePicture = e => {
//     e.preventDefault();
//     picturePicker.current.click();
//   };

//   const handleUpload = () => {
//     if (!selectedFile) {
//       return;
//     }
//   };

//   return (
//     <UserForm onSubmit={handleUpload} autoComplete="off">
//       <PictureField>
//         <FiUser size={40} />
//         <PickButton onClick={handlePicture}>
//           <HiPlus size={18} />
//         </PickButton>
//         <label htmlFor="file">Choose new picture</label>
//         <input
//           id="file"
//           ref={picturePicker}
//           type="file"
//           accept="image/*, .jpg, .png, .gif, .web"
//           onChange={pictureHandler}
//         />
//       </PictureField>
//       <NameField>
//         <label htmlFor="name">
//           <FiUser />
//         </label>
//         <input id="name" type="text" />
//         <button>
//           <FiEdit2 />
//         </button>
//       </NameField>
//       <SubmitButton type="submit">Save changes</SubmitButton>
//     </UserForm>
//   );
// };






// import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';

// import { HiPlus } from 'react-icons/hi';
// import { FiUser, FiEdit2 } from 'react-icons/fi';

// import { updateUserInfo } from 'redux/auth/operations';

// import {
//   UserForm,
//   PictureField,
//   PickButton,
//   NameField,
//   SubmitButton,
// } from './UserInfoModal.styled';

// export const UserInfoModal = ({ avatar, user }) => {
// const [name, setName] = useState(user);
// const [picture, setPicture] = useState(avatar);
// const picturePicker = useRef(null);
  
  
// const dispatch = useDispatch();

//     const picOnChange = e => {
//     const [file] = e.target.files;
//     if (file) {
//       setPicture(URL.createObjectURL(file));
//     }
//   };

//   const onSubmitHandler = async e => {
//     e.preventDefault();
//     const files = e.target.elements[0].files[0];
//     const data = {};
//     if (files) {
//       data.avatarURL = files;
//     }
//     if (name) {
//       data.name = name;
//     }
//     dispatch(updateUserInfo(data));
//   };

//   const handlePicture = e => {
//     e.preventDefault();
//     picturePicker.current.click();
//   };

//   const nameOnChange = e => {
//     setName(e.target.value);
//   };


//   return (
//     <UserForm onSubmit={onSubmitHandler} autoComplete="off">
//       <PictureField>
//         {picture ? (
//           <img src={picture} alt="user"/>
//         ) : (
//             <FiUser size={40} />  
//         )}
//         <PickButton onClick={handlePicture}>
//           <HiPlus size={18} />
//         </PickButton>
//         <label htmlFor="file">Choose new picture</label>
//         <input
//           id="file"
//           ref={picturePicker}
//           type="file"
//           accept="image/*, .jpg, .png, .gif, .web, .jpeg"
//           onChange={picOnChange}
//         />
//       </PictureField>
//       <NameField>
//         <label htmlFor="name">
//           <FiUser />
//         </label>
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={nameOnChange} />
//         <button>
//           <FiEdit2 />
//         </button>
//       </NameField>
//       <SubmitButton type="submit">Save changes</SubmitButton>
//     </UserForm>
//   );
// };





import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HiPlus } from 'react-icons/hi';
import { FiUser, FiEdit2 } from 'react-icons/fi';

import { updateUserInfo, getCurrentUser } from 'redux/auth/operations';
import { updateDataUser } from 'redux/auth/slice';

import {
  UserForm,
  PictureField,
  PickButton,
  NameField,
  SubmitButton,
} from './UserInfoModal.styled';

export const UserInfoModal = ({ avatar, name, stateFn }) => {
  const [value, setValue] = useState(name);
  const [picture, setPicture] = useState(avatar);
  const picturePicker = useRef(null);
  
  const dispatch = useDispatch();

  const picOnChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const files = formData.get('file');
    if (files) {
      formData.set('avatar', files);
    }
    formData.set('name', value);

    try {
      await dispatch(updateUserInfo(formData));
      dispatch(updateDataUser(formData));
      stateFn('closed');
    } catch (error) {
      console.error(error);
    }
  };

  const handlePicture = (e) => {
    e.preventDefault();
    picturePicker.current.click();
  };

  const nameOnChange = (e) => {
    setValue(e.target.value);
  }; 

useEffect(() => {
  dispatch(getCurrentUser())
    .then((currentUser) => {
      if (currentUser && currentUser.name) {
        setValue(currentUser.name);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}, [dispatch]);

  return (
    <>
      <UserForm onSubmit={onSubmitHandler} autoComplete="off">
        <PictureField>
          {picture ? (
            <img src={picture} alt="user"/>
          ) : (
            <FiUser size={40} />  
          )}
          <PickButton onClick={handlePicture}>
            <HiPlus size={18} />
          </PickButton>
          <label htmlFor="file">Choose new picture</label>
          <input
            id="avatar"
            ref={picturePicker}
            type="file"
            accept="image/*, .jpg, .png, .gif, .jpeg"
            onChange={picOnChange}
          />
        </PictureField>
        <NameField>
          <label htmlFor="name">
            <FiUser />
          </label>
          <input
            id="name"
            type="text"
            value={value}
            onChange={nameOnChange} />
          <button>
            <FiEdit2 />
          </button>
        </NameField>
        <SubmitButton type="submit">Save changes</SubmitButton>
      </UserForm>
    </>
  );
};