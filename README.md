#Notes Taking App

CLI based notes management application created with node.js.

The application saves the notes in a simple JSON file.

##### Usage
 -	Adding a note 
 ```shell
node app.js add --title="Some Title" --body="Some Content"
```
 - Removing a note
 ```shell
node app.js remove --title="Some Title"
```
 - Listing all notes
 ```shell
node app.js list"
```
 - Reading a note
 ```shell
node app.js read --title="Some Title"
```