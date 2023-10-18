// Each Data list object is a role in the chapter
const data = [
  {
    // role must be unique
    role: 'alumni',
    // title which will be shown on top of the section
    title: 'SIESGSTarena Alumni',
    // subtitle which will be shown below the title
    subtitle: 'People behind the chapter',
    // data is an array of objects
    // each object is a person and must have a unique Id
    // all the parameters are required but can be left empty
    data: [
      {
        id: 1,
        name: 'Omkar Prabhu 2018(Founder)',
        imageUrl: 'https://avatars2.githubusercontent.com/u/31627958?s=460&v=4',
        githubUrl: 'https://github.com/prabhuomkar',
        linkedinUrl: 'https://linkedin.com/in/prabhu-omkar',
        twitterUrl: 'https://twitter.com/@op_prabhuomkar',
        facebookUrl: 'https://fb.com/op1111',
        instagramUrl: 'https://instagram.com/prabhu.omkar',
      },
    ],
  },
];

export default data;
