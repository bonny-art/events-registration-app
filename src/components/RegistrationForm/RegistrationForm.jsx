import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';

import {
  InputFormContainer,
  FormField,
  FormInput,
  ErrorMessageStyled,
  Title,
  RadioGroup,
  RadioLabel,
} from './RegistrationForm.styled';
import { useNavigate, useParams } from 'react-router-dom';
import {
  participantsActions,
  participantsSelectors,
} from 'store/participants/participantsSlice';
import { Button } from 'components/Button/Button';

const INITIAL_STATE = {
  fullName: '',
  email: '',
  dateOfBirth: '',
  heardAboutEvent: '',
};

const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(namePattern, 'Name must contain only letters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  dateOfBirth: yup
    .date()
    .max(new Date(), 'Date can not be in future')
    .required('Date of birth is required'),
  heardAboutEvent: yup
    .string()
    .oneOf(['Social media', 'Friends', 'Found myself'], 'Not valid value')
    .required('Field is required'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(participantsActions.getParticipantsAction({ eventId }));
  }, [dispatch, eventId]);
  const participants = useSelector(
    participantsSelectors.selectFilteredParticipants
  );
  console.log('🚀 ~ participants:', participants);

  const register = data => {
    const isExist = participants.find(
      ({ email }) => data.email.trim() === email
    );

    if (isExist) {
      Notify.failure(
        `The participant with ${data.email} email has already registered.`
      );
      return;
    }

    dispatch(
      participantsActions.addParticipantAction({ eventId, participant: data })
    );

    navigate(`/event/${eventId}/participants`);
  };

  const handleSubmit = (values, { resetForm }) => {
    register(values);
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <InputFormContainer>
        <Title>Event registration</Title>
        <FormField>
          Name:
          <FormInput
            type="text"
            name="fullName"
            placeholder="Enter your full name"
          />
          <ErrorMessage name="fullName" component={ErrorMessageStyled} />
        </FormField>
        <FormField>
          Email:
          <FormInput type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component={ErrorMessageStyled} />
        </FormField>
        <FormField>
          Date of Birth:
          <FormInput type="date" name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component={ErrorMessageStyled} />
        </FormField>
        <FormField>
          Where did you hear about this event?
          <RadioGroup>
            <RadioLabel>
              <Field type="radio" name="heardAboutEvent" value="Social media" />
              Social media
            </RadioLabel>
            <RadioLabel>
              <Field type="radio" name="heardAboutEvent" value="Friends" />
              Friends
            </RadioLabel>
            <RadioLabel>
              <Field type="radio" name="heardAboutEvent" value="Found myself" />
              Found myself
            </RadioLabel>
          </RadioGroup>
          <ErrorMessage name="heardAboutEvent" component={ErrorMessageStyled} />
        </FormField>
        <Button type="submit">Register</Button>
      </InputFormContainer>
    </Formik>
  );
};
