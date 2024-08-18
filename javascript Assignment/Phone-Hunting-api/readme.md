# Phone Search App
# Hosted Link [Hosted link] (https://nileshtiwari04.github.io/FS-21-Assignments/javascript%20Assignment/Phone-Hunting-api/index.html).

## Overview
## Overview

The Phone Search App allows users to search for mobile phones and view detailed information about them. Users can search for phones using a search bar, view the top 12 results, and click on a "Show All" button to see more phones. Additionally, clicking on a phone card displays detailed specifications and images in a modal dialog.

## Features

- **Search Functionality:** Users can search for phones by name using the search bar. The app displays the top 12 results, with the option to show all results.
- **Infinite Scrolling:** The app loads and displays additional phone data as the user scrolls.
- **Phone Details:** Clicking on a phone card opens a modal displaying detailed information about the phone, including its image, brand, specifications, and release date.
- **Show All Button:** Users can view all available phones by clicking the "Show All" button.
- **Responsive Design:** The app is fully responsive and works on various screen sizes.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For styling the application and ensuring a responsive layout.
- **JavaScript**: For handling the dynamic behavior, fetching data from the API, and DOM manipulation.
- **API**: The data is fetched from the [Programming Hero Phone API](https://openapi.programming-hero.com/api/phones?search=oppo).

## How to Use

1. **Search for a Phone:**
   - Type the name of the phone in the search bar.
   - Click on the "Search" button to view the top 12 matching phones.

2. **View More Phones:**
   - Click the "Show All" button to display all matching phones.

3. **View Phone Details:**
   - Click on any phone card to open a modal with detailed information about the phone.

4. **Close the Modal:**
   - Click the "Close" button inside the modal to close it.

phone-search-app/
├── index.html      # The main HTML file
├── style.css      # The CSS file for styling the app
├── script.js       # The JavaScript file for app logic
└── readme.md       # The README file (this file)
