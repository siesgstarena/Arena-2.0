import {
  aboutPath, competitionsPath, contactPath, developersPath,
  feedbackPath, faqPath, privacyPath,
} from '../../../routes';

const footerRoutes = [
  {
    id: 1,
    changeRouteTo: aboutPath,
    routeName: 'About',
  },
  {
    id: 2,
    changeRouteTo: competitionsPath,
    routeName: 'Competitions',
  },
  {
    id: 3,
    changeRouteTo: contactPath,
    routeName: 'Contact',
  },
  {
    id: 4,
    changeRouteTo: developersPath,
    routeName: 'Developers',
  },
  {
    id: 5,
    changeRouteTo: feedbackPath,
    routeName: 'Feedback',
  },
  {
    id: 6,
    changeRouteTo: faqPath,
    routeName: 'FAQ',
  },
  {
    id: 7,
    changeRouteTo: privacyPath,
    routeName: 'Privacy',
  },
];

export default footerRoutes;
