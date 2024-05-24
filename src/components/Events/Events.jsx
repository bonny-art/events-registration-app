import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventsActions, eventsSelectors } from 'store/events/eventsSlice';
import { Container, LoaderBox } from './Events.styled';
import { Loader } from 'components/Loader/Loader';
import { Message } from 'components/Message/Message';
import { EventList } from 'components/EventList/EventList';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

const limit = 9;

export const Events = () => {
  const dispatch = useDispatch();
  const initialRender = useRef(true);

  const sorting = useSelector(eventsSelectors.selectSorting);

  const initialQuery = {
    page: 1,
    limit,
    sortField: sorting.sortField,
    sortOrder: sorting.sortDirection,
  };

  const [query, setQuery] = useState(initialQuery);

  const events = useSelector(eventsSelectors.selectEvents);

  const isLoading = useSelector(eventsSelectors.selectIsLoading);

  const hasMorePages = useSelector(eventsSelectors.selectHasMorePages);

  const prevPageRef = useRef(1);
  const prevSortFieldRef = useRef(sorting.sortField);
  const prevSortOrderRef = useRef(sorting.sortDirection);

  useEffect(() => {
    const hasPageChanged =
      query.page !== 1 && prevPageRef.current !== query.page;

    const payload = {
      page: query.page,
      limit: query.limit,
      sortField: query.sortField,
      sortOrder: query.sortOrder,
    };

    if (initialRender.current && hasPageChanged) {
      dispatch(eventsActions.getMoreEventsAction(payload));
    } else {
      dispatch(eventsActions.getEventsAction(payload));
    }

    initialRender.current = false;

    prevPageRef.current = query.page;
    prevSortFieldRef.current = query.sortField;
    prevSortOrderRef.current = query.sortOrder;
  }, [query.page, query.limit, query.sortField, query.sortOrder, dispatch]);

  useEffect(() => {
    initialRender.current = true;
    setQuery(q => ({
      ...q,
      page: 1,
      sortField: sorting.sortField,
      sortOrder: sorting.sortDirection,
    }));
  }, [sorting.sortField, sorting.sortDirection]);

  const onIntersect = useCallback(() => {
    if (hasMorePages) {
      initialRender.current = true;
      setQuery(q => ({ ...q, page: q.page + 1 }));
    }
  }, [hasMorePages]);

  const [targetRef] = useIntersectionObserver({ onIntersect });

  return (
    <Container>
      <>
        {events.length ? (
          <EventList events={events} />
        ) : (
          <Message>There are no planned events yet. Try again later.</Message>
        )}
      </>

      <div ref={targetRef} style={{ height: '25px' }}>
        {isLoading && (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        )}
      </div>
    </Container>
  );
};
