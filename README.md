# operating-owls-business-communication-platform
This project is a web application based on discord.  It will have many of the same features, including servers, chanels, server roles, and real-time chat. 

## prerequisites
Ensure Node.js is installed on your machine.  If not, download and install the latest version [here](https://nodejs.org/en/download/).

## setup
1. Clone the repository using the following command:
```bash
git clone git@github.com:Martyn-Conkling/operating-owls-business-communication-platform.git
```
2. Change into the project directory:
```bash
cd operating-owls-business-communication-platform
```
3. Install the project dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open a browser and navigate to `http://localhost:5173` to view the application.

## Link To Design
Figma Design Here

# Contributing

## How to Assign an Issue to Yourself

1. Navigate to the **Issues** tab in the GitHub repository.
2. Browse through available issues or create a new one if necessary.
3. Choose an issue you'd like to work on and click on it to open the details.
4. Comment on the issue mentioning that you'd like to handle it.
5. If the maintainers approve, they might assign the issue to you officially.

## Working on a New Feature Branch

1. Ensure you have the latest changes from the `main` branch:
    - git checkout main
    - git pull origin main
2. Create a new branch for your feature:
    - git checkout -b your-initials-issue-number-feature-name
    - Replace `feature-name` with a descriptive name for your feature.
        - ex: git checkout -b ar-5-header-navigation
3. Make changes, write code, and commit your work:
    - git add .
    - git commit -m "Description of changes made"

## Pushing Changes to GitHub

1. Push your feature branch to the remote repository:
    - git push origin feature-name

## Initiating a Pull Request

1. Go to the repository on GitHub and switch to your feature branch.
2. Click on the "New pull request" button.
3. Compare changes between your feature branch and the `main` branch.
4. Fill in details about your changes in the pull request template.
5. Submit the pull request.

## Peer Code Review

1. Share the link to your pull request with your peers or team members.
2. Ask for their review and feedback on the changes.
3. Peers can add comments, suggestions, or approve the pull request.
4. Address any feedback or comments and make necessary changes in your branch.
5. Once approved, a maintainer can merge your pull request into the `main` branch.

### Git Commands

- To clone a repository from GitHub onto your local machine
  - `git clone https://github.com/Shift3/ancestreeLiveV3.git`
- Add all changes to be tracked:
  - `git add .`
- Commit tracked changes:
  - `git commit -m "type(scope):body"`
  - [Follow commit conventions found at this link](commits.md)
- Push changes up to GitHub
  - `git push`

Get the latest changes:

- Check out development  
   `git checkout development`
- Pull from development  
   `git pull`
- Change to my branch  
   `git checkout your-branch-name`
- Merge from development  
   `git merge development`

## Commit Messages

### Your commit messages should be formatted as follows:

Short message example (`git commit -m "..."`):

`type(scope):subject`

Long message example (`git commit`):
```
type(scope):subject
(blank line)
body
```

`type`: Select one of the following 8 commit types. These are your _only_ options for commit type:

- **_feat_**: A new feature for the application user. Rolling out a new module, new piece of functionality, etc.
- **_fix_**: Bug fix to your production code. Dealing with GH Issues, fixing a bug, etc.
- **_docs_**: Changes to your documentation. Adding a comment, editing a comment, changing README.md files, etc.
- **_style_**: Changes to your code formatting. _This does **not** address CSS styling_ but rather the style of your code. Reformatting, adding semi-colons, etc.
- **_refactor_**: Refactor to production code. Upgrading a package and changing your code to meet the new demands, changing a **let** or a **const** name, etc.
- **_test_**: All things that apply to unit testing. Creating tests, refactoring tests, etc. No changes to production code occur.
- **_chore_**: Updating gulp, webpack, package.json files. This is developer-facing _only_.
- **_workaround_**: Temporary fix until a more robust solution is found or until other factors are resolved.

`scope`: Narrow the scope of the commit to a one or two word description in parentheses

`subject`: Favor imperative mood, present tense, active voice, and start with verbs. Don't use a period at the end. Think of it as a newspaper headline.

`body` (optional): If necessary, provide additional context that can help other developers in the future. This is normally unnecessary but some use cases are:

- If the commit contains a new package you've added to the project
- If the commit contains a change to your build that you need to notate
- If the commit includes changes that would benefit from an explanation and from additional context.
- If the commit is the last in a series that will become a Pull Request and you want to communicate something to your senior developer.

Remember to communicate effectively, follow project guidelines, and be open to feedback during the entire process.

Happy contributing!