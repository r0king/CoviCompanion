![BFH Banner](https://trello-attachments.s3.amazonaws.com/542e9c6316504d5797afbfb9/542e9c6316504d5797afbfc1/39dee8d993841943b5723510ce663233/Frame_19.png)

## Project Name

This project utilizes the COWIN APIs to run a discord bot (CoviCompanion) to help the user to get the vaccination slot availability near the user’s vicinity. The bot stores the details of users to its database and uses it to find for vaccination slot availability. The bot also has a feature that allows the user to request an hourly notification whether a slot opens up or not and notifies the user every hour.

## Team Members

1. [Royal Babu](https://github.com/r0king)
2. [Sidharth K Ajith](https://github.com/Sid9021)

## Team ID

BFH/recueOWV77fWLmGG9/2021

## Link to Product Walkthrough

[Link]

## How it Works?

The prefix for the discord bot commands is '/'

1. The project is based COWIN APIs to check for slot availability and Mongodb for database functions.
2. The user is registerd into the database and the input parameters is taken from the database.
3. When the slot availability is used, the bot uses the COWIN API call and displays the needed information and data to the user
4. If the user wants to get hourly notifications from the bot, the bot uses the COWIN API call to display the slot availability information and puts into a time interval which calls the API after one hour.

## Libraries Used

Discord.js – 12.5.3
Axios – 0.21.1
Dotenv – 9.0.2
Mongodb – 3.6.6

## How to configure
Configure the .env files
```
TOKEN=<YOUR_SECRETS_HERE>
ATLAS=<YOUR_SECRETS_HERE>
```

## Clone the Repository

  `git clone https://github.com/r0king/CoviCompanion.git`


## How to Run


```bash
cd CoviCompanion
npm install
node index.js
```

