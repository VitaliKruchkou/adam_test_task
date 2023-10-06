# User Dashboard

## Getting Started

1. Clone the develop branch.

`$ git clone https://github.com/VitaliKruchkou/adam_test_task.git -b develop`

2. Go to the directory

`$ cd user-list-db`

3. Install the npm modules

`$ npm install`

4. Run the command for starting server

`npx json-server --watch db.json --port 4200`

5.Open a new terminal

6. Go to the directory

`$ cd user-list-next`

7. Install the npm modules

`$ npm install`

8. Run the command

`$ npm run dev`

## Implemented functionality

- UserList (SSR)
- Filtering and Searching (by name and by dateOfBirth)
- User Detail Page (SSG)
- Styling (i decided to use styled components)
- Implemented SSR and SSG (you can check by running the command `npm run build`)
- Animations (when hovering over links and cards)
- Testing (added tests from components and utils using Jest and React Testing Library)
- Performance & Optimization (used Image NextJS component)

## Not implemented functionality

- Internationalization
- Implemented CI/CD Deployment (via GitHib actions - check prettier, check eslint, run tests, deploy to Vercel)
- Accessibility & Internationalization (by clicking on the Tab button, you can switch between the components on the MainPage)
- Advanced Styling (added ToggleSwitch for themes)
