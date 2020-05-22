# Arena 2.0

Arena 2.0 is the second version of [SIESGSTarena](http://arena.siesgst.ac.in/). In this version, we are completely redesigning the UI. We are also moving to the MERN stack to deliver a good user experience.

## About The Project

You can have a look at our [Arena 2.0](https://arena-2.herokuapp.com/)
The project is focused on providing a good UI and performance to our end users in order to provide them a good coding experience. We are making use of material UI components (provided by Google) and material design guidelines to redesign our website.

### Project Structure

The project structure is based on the idea of keeping all the components and assets required by a route in its own separate folder.
The entire project is divided into 5 modules:

1. common: This module contains the components which are common across all the routes. e.g. The AppBar, Footer, SearchBar.
1. footerPages: This module contains the routes which are present in the footer. e.g about, competitions, contact, our-team, feedback, faq and privacy.
1. drawer: This module contains the routes which are present in the (side) drawer. e.g contests, ratings, blog, problemSet, playlists, goodies and turingCup.
1. user: This module contains all the user specific routes. e.g newPost, myPosts, profile and settings.
1. auth: This module contains all the authentication related routes. e.g signin, signup, forgotPassword and resetPassword.
1. search: This module contains all the search related components.
1. admin: This module contains all the routes and components related to the admin.
1. superuser: This module contains all the routes and components related to the superuser.

### Project Status

- Completed the footerPages module.
- Completed goodies route from drawer module.

### How can you contribute?

Read the [Contributing Guidelines](https://github.com/siesgstarena/Arena-2.0/blob/master/CONTRIBUTING.md) to know how easy it is to contribute to this project.
