import { Button } from 'components/Button/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import { eventsActions, eventsSelectors } from 'store/events/eventsSlice';
import { SortingBox } from './SortControls.styled';

export const SortControls = () => {
  const dispatch = useDispatch();
  const sorting = useSelector(eventsSelectors.selectSorting);

  const [sortConfig, setSortConfig] = useState(sorting);

  const handleSortClick = sortField => {
    const isCurrentField = sortConfig.sortField === sortField;

    const nextSortDirection =
      sortField === ''
        ? ''
        : isCurrentField
        ? sortConfig.sortDirection === 'asc'
          ? 'desc'
          : 'asc'
        : 'asc';

    const newSortConfig = {
      sortField,
      sortDirection: nextSortDirection,
    };

    dispatch(eventsActions.setFiltersAction(newSortConfig));
    setSortConfig(newSortConfig);
  };

  const getSortLabel = (label, sortField) => {
    if (sortConfig.sortField === sortField) {
      return (
        <>
          {label}
          <span></span>
          {sortConfig.sortDirection === 'asc' ? (
            <GoTriangleUp size={12} />
          ) : (
            <GoTriangleDown size={12} />
          )}
        </>
      );
    }
    return label;
  };

  return (
    <SortingBox>
      <Button onClick={() => handleSortClick('title')} className="select">
        {getSortLabel('Title', 'title')}
      </Button>
      <Button onClick={() => handleSortClick('event_date')} className="select">
        {getSortLabel('Event date', 'event_date')}
      </Button>
      <Button onClick={() => handleSortClick('organizer')} className="select">
        {getSortLabel('Organizer', 'organizer')}
      </Button>
      <Button onClick={() => handleSortClick('')}>Default</Button>
    </SortingBox>
  );
};
