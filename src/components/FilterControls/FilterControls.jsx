import { Button } from 'components/Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  participantsActions,
  participantsSelectors,
} from 'store/participants/participantsSlice';
import { FilterBox, FormField, FormInput } from './FilterControls.styled';
import { Link } from 'react-router-dom';

export const FilterControls = () => {
  const dispatch = useDispatch();
  const filter = useSelector(participantsSelectors.selectFilter);

  const changeFilter = e => {
    dispatch(participantsActions.setFilterAction(e.target.value));
  };

  return (
    <FilterBox>
      <FormField>
        Search by full name or email:
        <FormInput
          type="text"
          name="name"
          placeholder="Start printing name here"
          value={filter}
          onChange={changeFilter}
        />
      </FormField>

      <Link to={`/event-list`}>
        <Button>Go back</Button>
      </Link>
    </FilterBox>
  );
};
