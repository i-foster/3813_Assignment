# 3813_Assignment

## 3813 Software Frameworks Assignment Repository

### Colors Palette
- `#86CB92`
- `#71B48D`
- `#404E7C`
- `#251F47`
- `#260F26`

### Data Structures

#### Users
Users are structured with the following data storage design. Items with a star are not editable by a user. Users are stored in an object or array of objects and are of mixed typing.
- `username`: string
- `id`: unique user number/integer *
- `birthdate`: data stored as a string
- `age`: number/integer (e.g., 27)
- `email`: string (e.g., "i@com")
- `password`: string (the user's password)
- `valid`: ensures the user is still current *
- `level`: current rank or level of a user, which can be "user", "group admin", or "super admin" *

#### Groups
Groups are structured with the following data points. Groups are stored in an object or array of objects, with each point being stored as a string.
- `name`: the name of the group
- `owner`: the owner of the group
- `channels`: array of strings representing channels within the group
- `users`: array of strings of all users who can be in the group

#### Channels
Channels store their own name and chat messages. Currently, this will be changed to include the channel name and the location of the stored messages.

#### Chats
Chats are user-generated content of string typing. Currently, only example chats are hardcoded into an array of strings. When MongoDB is added, they will have the following data structure:
- `ChatContent`: the chat messages
- `Owner`: the user who sent the message

### Angular Design
This app is using the Angular framework. Here is a detailed breakdown of each component and service:

#### Services
- **Logon Service**: Used to access local storage with methods for getting, setting, and clearing values.

#### Components
- `Logon`: Acts as a splash page for the app where users are authenticated and redirected if they sign out.
- `Home`: The default page for a signed-in user. It provides access to each group the user can see and their profile. If the user is a group admin or super admin, this is where they can create new groups.
- `Channels`: Displays channels for the group the user is currently in. If the user is a group admin or super admin, this is where they can create new channels.
- `Profile`: Displays all user details. All users can sign out from this page. It is also where super admins can create new user accounts.

### GIT
Git was used to regularly back up and commit new work. Merges had to be manually approved, and branches were used after the first working version for CSS and small changes, allowing a rollback in case of failure. My Git repository mirrors an Angular project with some minor adjustments:
- `.gitignore` used for node modules
- `images` folder containing early drafts of wireframes and data structures

### Server Side
Everything is handled client-side currently, as there is no database authentication or editing. This will be implemented in A2.
