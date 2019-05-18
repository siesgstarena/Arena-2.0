import {
  homePath, contestsPath, ratingsPath, blogPath, problemSetPath,
  playlistsPath, goodiesPath, turingCupPath,
} from '../../../routes';

const drawerItems = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    path: homePath,
  },
  {
    id: 2,
    name: 'Contests',
    icon: 'code',
    path: contestsPath,
  },
  {
    id: 3,
    name: 'Ratings',
    icon: 'star',
    path: ratingsPath,
  },
  {
    id: 4,
    name: 'Blog',
    icon: 'library_books',
    path: blogPath,
  },
  {
    id: 5,
    name: 'Problem Set',
    icon: 'question_answer',
    path: problemSetPath,
  },
  {
    id: 6,
    name: 'Playlists',
    icon: 'playlist_play',
    path: playlistsPath,
  },
  {
    id: 7,
    name: 'Goodies',
    icon: 'card_giftcard',
    path: goodiesPath,
  },
  {
    id: 8,
    name: 'Turing Cup',
    icon: 'star',
    path: turingCupPath,
  },
];

export default drawerItems;
