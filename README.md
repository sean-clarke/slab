# Slab Datatable Manager
An interactive datatable-based database management service for creating, editing, and saving tables.

![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/titless.png?raw=true "Easy to use, beautiful table management")

## Table of Contents
   1. [Getting Started](#getting-started)
      * Try it out
      * Download and host locally
   2. [Features](#features)
      * Easy in-browser editing
      * Edit and visualize multiple tables at the same time
      * Visualize with various color schemes and layouts
      * Upload, edit, and save your data in several file formats
   3. [Tutorial](#slab-quick-tutorial)
   4. [Console Controls](#javascript-console-controls)
   5. [Contributing](#contributing-to-slab)
   
   6. [Contact Me](#contact-me)
   
   7. [Acknowledgments](#acknowledgments)

## Getting Started
### How do I start using Slab?
#### Quick Note
**Slab Datatable Manager** is free to use, I think. I haven't attached any license and it is a public repository, so feel free to use it. Though I assume no responsibility for how you use it, I would ask that you use it wholesomely and attempt to give back to the project either monetarily or intellectually, especially if you plan to use this commercially. You might have to ask me before you sell anything that uses it but I am not 100% sure, so let's just say I'd appreciate it if you do. Just open an issue.

### Try it out
Because github is awesome and offers free project pages with GitHub Pages, you can try out Slab from the link at the top of the github repository. Mess around with the demo table, or feel free to delete the table and get started by uploading your own data by clicking on the large circled '+' on the left side of the application header. Have fun!

### Downloading and hosting on local machine
Currently the most secure way to utilize Slab Datatable Manager is to download the code and run it from your own computer or private server. Just download the master repo as a .zip file above, unzip into the folder you want to run it from and open up index.html with your preferred browser (as long as your preferred browser is Chrome or FireFox, because I haven't tested with anything else, feel free to try though). In some early builds I will have a demo table already rendered in the workspace. Feel free to play around with this table, or just delete it (the white/red 'X' at the top-right of the table). Now you can either build a table from scratch or upload data for editing and visualization purposes by clicking on the big circled '+' at the left of the page header. I am only aiming to add support for uploading _.json_, _.csv_. and _.xlsx_ files, however, I have currently only integrated .csv and if you want anything else, you may have to ask me (create an issue) and wait or add the feature yourself.

## What can I do in Slab?
You can do a lot in Slab! Here are some of its features:
### Features
#### Easy-to-use table editor
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/editor.png?raw=true "Easy editing functionality")
#### Maintain, edit, and visualize as many tables as your computer can handle
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/multicolors.png?raw=true "Multiple tables support")
#### Visualize your tables in multiple colors and layouts
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/altrowlayout.png?raw=true "Alternating rows layout")
#### Build and refine your tables right in the browser
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/tablebuilding.png?raw=true "Build on your tables")
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/interfaceoptions.png?raw=true "Comprehensive interface")
#### Upload data from multiple sources, different file types and varied formats
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/newtable.png?raw=true "Easy editing functionality")
![Screenshot](https://raw.github.com/Sean-Clarke/website-dbms/screenshots/loadpreview.png?raw=true "Easy editing functionality")
## Slab quick tutorial
Coming Soon...
## JavaScript Console Controls
### Create New Table
```js
t = new Table('table-name');
```
### Editing Table
```js
// Add Column
t.add_col('header-name', 'default cell value');

// Add Row
t.add_row(['list', 'of', 'cells']); // Takes a list of strings representing new cell value at the respective header index column, additonal keyword arguments 'index'=-1 and 'replace'=false are used for reorganizing and editing cells

// Remove Column
t.rmv_col('header-name');

// Remove Row
t.rmv_row(row_index);

// Sort
t.sort('header-name');

// Add Filter
t.add_filter('filter-string');
```
### Representing Table in Workspace (Browser DOM)
```js
// Add table to workspace
addTable(t);

// Remove table from workspace
removeTable('table-name')

// Rerenders table, adding changes made by console commands to table with name == 'table-name'
updateTable('table-name');
```

## Contributing to slab
Hey! It is great that you are interested in contributing. Here is how you can do it:
### Code
Fork it, make a pull request, open an issue, contact me. Let's work together!
### Testing
Bug reports, coding inefficiencies, etc. please let me know. Open an issue!
### Ideas
What do you want to see from Slab? Let me know, open an issue. Maybe we can work together to add it.
### Donate
Right now I don't have anything set up, but if you want to contribute, send me a message or open an issue!

## Everything else
### Contact me
Email: sean.alexander.clarke@gmail.com

Website: https://sean-clarke.github.io/
### Acknowledgments
**Sean Clarke** - _Creator_
