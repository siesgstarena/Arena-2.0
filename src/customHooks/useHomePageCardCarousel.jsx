import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { TOP_IMPROVERS, TOP_USERS_BY_RATING } from '../graphql/queries';

const useHomePageCardCarousel = () => {
  const [cardData, setCardData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const q1 = useQuery(TOP_USERS_BY_RATING, {
    variables: { limit: 3 },
  });
  const q2 = useQuery(TOP_IMPROVERS, {
    variables: { limit: 3 },
  });
  useEffect(() => {
    if (q1.loading || q2.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (q1.error || q2.error) {
      setError(true);
    } else {
      setError(false);
    }
    if (q1.data && q2.data) {
      const cardDataObj = [
        {
          id: 1,
          title: 'At the Top!',
          props: 'ratings',
          icon: 'https://cdn0.iconfinder.com/data/icons/recreation-and-hobbies/2000/47-512.png',
          subHead: 'Top 3 Performers!',
          cardLink: '/ratings',
          topThree: q1.data.topUsersByRating,
        },
        {
          id: 2,
          title: 'Exponentials!',
          props: 'ratingChange',
          icon: 'https://img.icons8.com/plasticine/128/000000/positive-dynamic--v1.png',
          subHead: 'Top 3 Improvements!',
          cardLink: `/contests/${q2.data.topUsersByImprovement.code}/change`,
          topThree: q2.data.topUsersByImprovement.RatingChange,
        },
      ];
      setCardData(cardDataObj);
    }
  }, [q1, q2]);
  return { cardData, loading, error };
};

export default useHomePageCardCarousel;
