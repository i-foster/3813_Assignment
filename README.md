# 3813_Assignment
3813 software frameworks assignment repository
Colours Palete: 
#86CB92
#71B48D
#404E7C
#251F47
#260F26


Data structures: 
Data structures for all major items in this app

Users: Users are structured with the following data storage design.: any items with a star are not editable by a user. Users are stored in a object or array of objects and are of mixed typing.
    username: string.
    * id: unique user number/integar.
    birthdate: data stored as a string.
    age:27, user age stored as a number/integar.
    email:"i@com", user email stored as a string.
    password: string of the users password.
    * valid: to ensure a user is still current.
    * level: current rank or level of a user, can be a user , group admin or a super admin.

Groups:\
Groups are structured with the following data points of: Groups are stored in a object or array of objects and  with each point being stored as a string.\
    name: the name of the group. \
    owner: the owner of the group. \
    channels: channels within the group stored as a array of strings. \
    users: array of strings of all users who can be in the group. \

Channels:\
Channels store their own name and the chat messages currently this will be changed to the channel name and the location of those stored messages.\

Chats:\
Chats are user generated content of string typing, currently only example chats are hardcoded into a array of strings, however when MongoDB is added they will have the following data structure.\
    Chatcontent: The chat messages.\
    Owner: the user that sent the message.\


Angular Design:


GIT:
Git was used to regularly backup and commit new work, with merge having to be manually approved. and branches used after first working version for CSS and small changes allowing a rollback incase of failure. My git repository mirrors a Angular project with some minor adjustments. This is to allow easy understanding there is also the addition of the server folder currently with a package.json and server.js file.
    minor adjustments:
    gitignore being use for the node modules.
    images folder containing early drafts of wireframes and data structures. 



Server Side:

Everything is handled client side currently as their is no database authentication or editting this will be implemented in A2.