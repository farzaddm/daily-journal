# Daily Journal
Daily Journal is a web application that allows you to write and manage your diary entries online. You can choose to keep your entries private or share them with a select group of friends.



## Built With
* Node.js - A JavaScript runtime built on Chrome's V8 engine.
* EJS - A simple templating language that lets you generate HTML markup with plain JavaScript.
* CSS - Cascading Style Sheets for styling the application.
* MongoDB - A NoSQL database for storing your todo lists.


## Getting Started
To set up the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed on your system:

* Node.js and npm: You can download and install them from [Node.js official website](https://nodejs.org/en).
  
* MongoDB: Make sure MongoDB is installed and running on your local machine. You can follow the [official MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) for setup. To start MongoDB, use the command:
```sh 
sudo systemctl start mongod
```

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/farzaddm/daily-journal.git
   ```
2. **Install NPM packages:**
    ```sh
    npm install
    ```
3. **Run the project:**
   ```sh
    node app.js
   ```

## Usage
To write a new diary entry, navigate to http://localhost:3000/compose in your web browser.



## App Structure
```bash
myandpp
|__public
|    |__style.css
|__views
|    |__partials
|    |   |__footer.ejs
|    |   |__header.ejs
|    |__home.ejs
|    |__about.ejs
|    |__compose.ejs
|    |__post.ejs
|__app.js
|__README.md
|__package-lock.json
|__package.json                  
```
