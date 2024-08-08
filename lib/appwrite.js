import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'h-dev-aora',
    projectId: '66abadde002c0e736860',
    databaseId: "66abb6bc00144e482d59",
    userCollectionId: "66abb6f4000fbc0d416b",
    videoCollectionId: "66abb6bc00144e482d59",
    storageId: '66abbd32002b5d3bce10'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

