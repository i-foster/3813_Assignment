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


Groups are structured with the following data points. Groups are stored in an object or array of objects, with each point being stored as a string.
- `name`: the name of the channel
- `group`: the group the channel is apart of
- `users`:  all users who can be in the group
- `messages`:  messages within the channel


#### Chats
Chats are user-generated content of string typing. Currently, only example chats are hardcoded into an array of strings. When MongoDB is added, they will have the following data structure:
- `ChatContent`: the chat messages
- `Owner`: the user who sent the message

### Angular Design
This app is using the Angular framework. Here is a detailed breakdown of each component and service:

#### Services
- `Logon Service`: Used to access local storage with methods for getting, setting, and clearing values.
- `Socket Service`: Used for chat component to send and receive messages in channels.
- `String Cleaning Service`: Used for user inputs to ensure they are simple strings to remove risk of users entering unexpected values


#### Components
- `Logon`: Acts as a splash page for the app where users are authenticated and redirected if they sign out.
- `Home`: The default page for a signed-in user. It provides access to each group the user can see and their profile. If the user is a group admin or super admin, this is where they can create new groups.
- `Channels`: Displays channels for the group the user is currently in. If the user is a group admin or super admin, this is where they can create new channels.
- `Profile`: Displays all user details. All users can sign out from this page. It is also where super admins can create new user accounts.
- `Chats`: Display each chanel chat messages, if super admin or group admin will be where they can click on a user to remove them from the channel/group

### GIT
Git was used to regularly back up and commit new work. Merges had to be manually approved, and branches were used after the first working version for CSS and small changes, allowing a rollback in case of failure. My Git repository mirrors an Angular project with some minor adjustments:
- `.gitignore` used for node modules
- `images` folder containing early drafts of wireframes and data structures

### Server Side
there is a mix of server and client side. server side is implemented using socket.io for messaging, the plan is to implement mongoDB for server side data storage but currently this is not working due to machine limitations.

### Routes Rest API 
The routes used are as below. The default is the only route accessible when not logged in. It does not have a parameter in implementation, but for documentation, it is referred to as default. All routes excluding the default return the user login data and current location.

- `default`
- `home`
- `profile`
- `channels`
- `chats` 


### Validation 
there is string cleaning service to clean values to remove unexepected inputs by a user. the login function uses strict typing to ensure only strings can be entered for username and password. 
