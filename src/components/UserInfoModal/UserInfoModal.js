import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { HiPlus } from 'react-icons/hi';
import { FiUser, FiEdit2 } from 'react-icons/fi';

import { updateUserInfo } from 'redux/auth/operations';

import {
  UserForm,
  PictureField,
  PickButton,
  NameField,
  SubmitButton,
} from './UserInfoModal.styled';

export const UserInfoModal = ({ avatar, user, onClose }) => {
  const [name, setName] = useState(user);
  const [picture, setPicture] = useState(avatar);
  const picturePicker = useRef(null);

  const dispatch = useDispatch();

  const picOnChange = e => {
    const [file] = e.target.files;
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    const files = document.getElementById('avatar').files[0];
    const formData = new FormData();
    if (files) {
      formData.append('avatar', files);
    }
    if (name) {
      formData.append('name', name);
    }
    try {
      dispatch(updateUserInfo(formData));
      onClose();
      console.log('Update User Info operation dispatched!');
    } catch (error) {
      console.error(error);
    }
  };

  const handlePicture = e => {
    e.preventDefault();
    picturePicker.current.click();
  };

  const nameOnChange = e => {
    setName(e.target.value);
  };

  return (
    <UserForm onSubmit={onSubmitHandler} autoComplete="off">
      <PictureField>
        {picture ? (
          <img src={picture} alt="user" />
        ) : (
          <FiUser size={40} />
        )}
        <PickButton onClick={handlePicture}>
          <HiPlus size={18} />
        </PickButton>
        <label htmlFor="avatar">Choose new picture</label>
        <input
          id="avatar"
          ref={picturePicker}
          type="file"
          accept="image/*, .jpg, .png, .gif, .web, .jpeg"
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
          value={name}
          onChange={nameOnChange} />
        <button>
          <FiEdit2 />
        </button>
      </NameField>
      <SubmitButton type="submit">Save changes</SubmitButton>
    </UserForm>
  );
};