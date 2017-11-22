# NOW That's What I Call Backbone
We have come a long way from our mixtape days. You're a little older, wiser and now know some new, slick technologies.

With this exercise, we are going to make a relatively simple backbone application (from scratch!) that will display the track list of a mix cd. To make it even more slick, when we click on a song title, the artists name will appear below the title. WILD!

Let's jump in!

### Setup

We have already set up the Webpack template for you to get started. It comes pre-loaded with all of beautiful libraries that will help us make a great application: Backbone, jQuery and Underscore. It also has a starter `app.js` file as well as `models` and `collections` folders.

Since we are set up with Webpack, you'll want to run `npm install` once to set this project up. To start your development server, you'll want to run `npm start`.

Take a moment to examine the folder structure before moving on.

### Initial Data
Our mix CD will be based on a hard-coded array of objects with song data. We've gotten you started here with the structure of one song, so go ahead and copy this code to your `app.js` file, above the `$(document).ready()`:
```JavaScript
var songData = [
    {
        "title": "Drop It Like It's Hot",
        "year": 2004,
        "artist": "Snoop Dog"
    }
  ];
```

Then **add a few more songs** to your collection that you like!


### Models
Next up, we'll want to create a Model to store our song's information.

#### Model File
1. You will create a new model file in the `src/app/models` folder
2. Write the code that you need to create an empty model called `Song` in this new file

#### Use the Model
Make some updates to the `app.js` file.

1. Add the code to load the new Model
2. Create an instance of your model object
3. Log some information about the model instance to ensure it was created successfully

#### View the Model Data

1. There is an Underscore template stub already created for you in the `dist/index.html` file. Update this template to display some of the song fields that you want to see displayed.
2. Compile the template in `app.js` in the appropriate section of code
3. Invoke the compiled template to generate the HTML for the model instance created above
4. Add the song's HTML to the DOM (check out `index.html` to see where you'd like to add it)

### Collections
Next, we'll create a collection.

#### Collection File

1. Create a new collection file in the `src/app/collections` folder
2. Add the code to load in the `Song` model
3. Write the code that you need to create a collection called `SongList` which will contain `Song` model objects


#### Use the Collection
Make some updates to the `app.js` file.

1. Add the code to load the new collection
2. Instantiate the collection using the `songData` array you created earlier
3. Add the model instance that you created in the previous step to the collection using the collection's `add` method

#### View the Collection Data
1. Using the Underscore tempate you created in the model section to render the data for each Song within the collection
