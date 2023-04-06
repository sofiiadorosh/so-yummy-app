import { useState, useRef } from 'react';
import { HiPlus } from 'react-icons/hi';
import { FiUser, FiEdit2 } from 'react-icons/fi';

import {
  UserForm,
  PictureField,
  PickButton,
  NameField,
  SubmitButton,
} from './UserInfoModal.styled';

export const UserInfoModal = () => {
  const picturePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [uploadedFile, setUploadedFile] = useState(null);

  const pictureHandler = e => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePicture = e => {
    e.preventDefault();
    picturePicker.current.click();
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }
  };

  return (
    <UserForm onSubmit={handleUpload} autoComplete="off">
      <PictureField>
        <FiUser size={40} />
        <PickButton onClick={handlePicture}>
          <HiPlus size={18} />
        </PickButton>
        <label htmlFor="file">Choose new picture</label>
        <input
          id="file"
          ref={picturePicker}
          type="file"
          accept="image/*, .jpg, .png, .gif, .web"
          onChange={pictureHandler}
        />
      </PictureField>
      <NameField>
        <label htmlFor="name">
          <FiUser />
        </label>
        <input id="name" type="text" />
        <button>
          <FiEdit2 />
        </button>
      </NameField>
      <SubmitButton type="submit">Save changes</SubmitButton>
    </UserForm>
  );
};
