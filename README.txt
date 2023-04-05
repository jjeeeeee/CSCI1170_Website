index.html:


Line 1 specifies the doctype of the HTML file
Line 2 indicates where the HTML code starts, as well as the language, which is English
Lines 3-10 are the head section that contains important information that describe the document:
	
	Firstly, line 4 specifies the character endcoding for the HTML document
	Line 5 sets the favicon by stating the image's relationship with the document. The relative link path is Images/Favicon.png, as the Images folder and index.html are in the same parent directory
	Line 6 renames the page in the browser tab, and also specifies which page the current page is in relation to the website
	Line 7 is specified to correctly scale the page so that it is sized correctly on all devices
	Line 8 links the CSS stylesheet to the HTML document
	Lastly, line 9 points to the external JavaScript file

Lines 12-52 are dedicated to the nagivation structure of the website:

	Lines 13-15 create a separate container for the image link:
	
		Line 14 is the anchor tag that links to the Home page via an image, which contains alt text describing that it is a picture of 2 cursive J's. The relative link path is Images/Home.png, as the Images folder and index.html are in the same parent directory. When clicking this link, the browser will be redirected to the index.html page

	Lines 16-46 are used to create a list of navigation links. All links are relative (except the LinkedIn as it is an external resource) and only the names of the pages because they are in the same parent directory:

		Line 18 is the anchor tag that links to the About page, which when clicked, will redirect the browser to the About.html page
		Line 21 is the anchor tag that links to the Experience page, which when clicked, will redirect the browser to the Experience.html page
		Line 24 is the anchor tag that links to the Interests page, which when clicked, will redirect the browser to the Interests.html page
		Line 27 is the anchor tag that links to the newly added Contact page, which when clicked will redirect the browser to the Contact.html page
		Line 30 is the anchor tag that links to an external LinkedIn page, which when clicked, will redirect the browser to the external LinkedIn page
		Line 33 is the anchor tag that links to email me, which when clicked, will open the default mail app with my email as the sender
		Line 36 is the anchor tag that links to the my resume, which when clicked, will open in a new tab my resume as a PDF

	Lines 38-45 are used to define an area for the colour changing feature that is outlined in the assignment requirements:
		
		Lines 39-43 define a select widget, where after selecting the desired colour scheme and pressing the "Apply" button, it will change the colours of all of the elements. Example inputs and outputs: User selects "Default" and presses "Apply", the page changes the colours of the elements to colour scheme #1 outlined in the wireframe PDF.  User selects "Protanopia" and presses "Apply", the page changes the colours of the elements to colour scheme #2 outlined in the wireframe PDF. User selects "Deuteranopia" and presses "Apply", the page changes the colours of the elements to colour scheme #3 outlined in the wireframe PDF. The "Apply" button is also located on line 44

	Lines 47-51 define an area that is used for the hamburger menu that indicates the dropdown menu on a tablet and mobile view. It is simply 3 spans that will be styled to look like bars

Lines 54-96 are dedicated to the main content of the page:

	Lines 56-58 define the area for the hero image, with a header overtop the hero image on line 57

	Lines 60-66 define an area that is dedicated to the captivating introduction, and on line 63 there is a span tag that encapsulates my name so that I am later able to style it so that it is larger an draws more attention

	Lines 68-79 are used to display a preview of my projects:

		Lines 69-71 display a header for the section
		Line 72 displays a subheader for the one project that is being showcased
		Lines 73-76 give a very short summary of the project
		Line 78 displays the preview image of the project, as well as links to the location of the project on the Experience page. The relative link path is Experience.html#projectHeader as index.html and Experience.html are in the same parent directory, and #projectHeader is the id of the section that displays the project on the Experience page
	
	Lines 81-95 create a container with my profile picture and a small personal introduction. The relative path of the profile image is Images/Profile.JPG as index.html  and the Images folder are in the same parent directory
	Line 84 links again to the About page, that when clicked redirects the browser to the About.html page




About.html


Line 1 specifies the doctype of the HTML file
Line 2 indicates where the HTML code starts, as well as the language, which is English
Lines 3-10 are the head section that contains important information that describe the document:
	
	Firstly, line 4 specifies the character endcoding for the HTML document
	Line 5 sets the favicon by stating the image's relationship with the document. The relative link path is Images/Favicon.png, as the Images folder and About.html are in the same parent directory
	Line 6 renames the page in the browser tab, and also specifies which page the current page is in relation to the website
	Line 7 is specified to correctly scale the page so that it is sized correctly on all devices
	Line 8 links the CSS stylesheet to the HTML document
	Lastly, line 9 points to the external JavaScript file

Lines 12-52 are dedicated to the nagivation structure of the website:

	Lines 13-15 create a separate container for the image link:
	
		Line 14 is the anchor tag that links to the Home page via an image, which contains alt text describing that it is a picture of 2 cursive J's. The relative link path is Images/Home.png, as the Images folder and About.html are in the same parent directory. When clicking this link, the browser will be redirected to the index.html page

	Lines 16-46 are used to create a list of navigation links. All links are relative (except the LinkedIn as it is an external resource) and only the names of the pages because they are in the same parent directory:

		Line 18 is the anchor tag that links to the About page, which when clicked, will redirect the browser to the About.html page
		Line 21 is the anchor tag that links to the Experience page, which when clicked, will redirect the browser to the Experience.html page
		Line 24 is the anchor tag that links to the Interests page, which when clicked, will redirect the browser to the Interests.html page
		Line 27 is the anchor tag that links to the newly added Contact page, which when clicked will redirect the browser to the Contact.html page
		Line 30 is the anchor tag that links to an external LinkedIn page, which when clicked, will redirect the browser to the external LinkedIn page
		Line 33 is the anchor tag that links to email me, which when clicked, will open the default mail app with my email as the sender
		Line 36 is the anchor tag that links to the my resume, which when clicked, will open in a new tab my resume as a PDF

	Lines 38-45 are used to define an area for the colour changing feature that is outlined in the assignment requirements:
		
		Lines 39-43 define a select widget, where after selecting the desired colour scheme and pressing the "Apply" button, it will change the colours of all of the elements. Example inputs and outputs: User selects "Default" and presses "Apply", the page changes the colours of the elements to colour scheme #1 outlined in the wireframe PDF.  User selects "Protanopia" and presses "Apply", the page changes the colours of the elements to colour scheme #2 outlined in the wireframe PDF. User selects "Deuteranopia" and presses "Apply", the page changes the colours of the elements to colour scheme #3 outlined in the wireframe PDF. The "Apply" button is also located on line 44

	Lines 47-51 define an area that is used for the hamburger menu that indicates the dropdown menu on a tablet and mobile view. It is simply 3 spans that will be styled to look like bars

Lines 55-59 define and create a header that id displayed at the top of the About page
Lines 61-116 define the main content of the About page:
	
	Lines 63-86 create a container for my background information
	Lines 88-115 create a container for a list of my skills and attributes



Experience.html:


Line 1 specifies the doctype of the HTML file
Line 2 indicates where the HTML code starts, as well as the language, which is English
Lines 3-10 are the head section that contains important information that describe the document:
	
	Firstly, line 4 specifies the character endcoding for the HTML document
	Line 5 sets the favicon by stating the image's relationship with the document. The relative link path is Images/Favicon.png, as the Images folder and Experience.html are in the same parent directory
	Line 6 renames the page in the browser tab, and also specifies which page the current page is in relation to the website
	Line 7 is specified to correctly scale the page so that it is sized correctly on all devices
	Line 8 links the CSS stylesheet to the HTML document
	Lastly, line 9 points to the external JavaScript file

Lines 12-52 are dedicated to the nagivation structure of the website:

	Lines 13-15 create a separate container for the image link:
	
		Line 14 is the anchor tag that links to the Home page via an image, which contains alt text describing that it is a picture of 2 cursive J's. The relative link path is Images/Home.png, as the Images folder and Experience.html are in the same parent directory. When clicking this link, the browser will be redirected to the index.html page

	Lines 16-46 are used to create a list of navigation links. All links are relative (except the LinkedIn as it is an external resource) and only the names of the pages because they are in the same parent directory:

		Line 18 is the anchor tag that links to the About page, which when clicked, will redirect the browser to the About.html page
		Line 21 is the anchor tag that links to the Experience page, which when clicked, will redirect the browser to the Experience.html page
		Line 24 is the anchor tag that links to the Interests page, which when clicked, will redirect the browser to the Interests.html page
		Line 27 is the anchor tag that links to the newly added Contact page, which when clicked will redirect the browser to the Contact.html page
		Line 30 is the anchor tag that links to an external LinkedIn page, which when clicked, will redirect the browser to the external LinkedIn page
		Line 33 is the anchor tag that links to email me, which when clicked, will open the default mail app with my email as the sender
		Line 36 is the anchor tag that links to the my resume, which when clicked, will open in a new tab my resume as a PDF

	Lines 38-45 are used to define an area for the colour changing feature that is outlined in the assignment requirements:
		
		Lines 39-43 define a select widget, where after selecting the desired colour scheme and pressing the "Apply" button, it will change the colours of all of the elements. Example inputs and outputs: User selects "Default" and presses "Apply", the page changes the colours of the elements to colour scheme #1 outlined in the wireframe PDF.  User selects "Protanopia" and presses "Apply", the page changes the colours of the elements to colour scheme #2 outlined in the wireframe PDF. User selects "Deuteranopia" and presses "Apply", the page changes the colours of the elements to colour scheme #3 outlined in the wireframe PDF. The "Apply" button is also located on line 44

	Lines 47-51 define an area that is used for the hamburger menu that indicates the dropdown menu on a tablet and mobile view. It is simply 3 spans that will be styled to look like bars

Lines 55-85 are used to create a table in the header of the Experience page that displays what coding languages I know

Lines 87-142 are dedicated to the main content of the page:
	
	Lines 88-90 are used to display a header indicating that it is the Projects section
	Lines 91-98 are used to create a container that displays the robotics project that I have worked on
	Lines 99-101 are used to create a container that displays that it is a placeholder for future projects
	Lines 102-104 are used to display a header indicating that it is the Achievements section 
	Lines 106-141 create a contianer that holds a nested list that displays my achievements



Interests.html:


Line 1 specifies the doctype of the HTML file
Line 2 indicates where the HTML code starts, as well as the language, which is English
Lines 3-10 are the head section that contains important information that describe the document:
	
	Firstly, line 4 specifies the character endcoding for the HTML document
	Line 5 sets the favicon by stating the image's relationship with the document. The relative link path is Images/Favicon.png, as the Images folder and Interests.html are in the same parent directory
	Line 6 renames the page in the browser tab, and also specifies which page the current page is in relation to the website
	Line 7 is specified to correctly scale the page so that it is sized correctly on all devices
	Line 8 links the CSS stylesheet to the HTML document
	Lastly, line 9 points to the external JavaScript file

Lines 12-52 are dedicated to the nagivation structure of the website:

	Lines 13-15 create a separate container for the image link:
	
		Line 14 is the anchor tag that links to the Home page via an image, which contains alt text describing that it is a picture of 2 cursive J's. The relative link path is Images/Home.png, as the Images folder and Interests.html are in the same parent directory. When clicking this link, the browser will be redirected to the index.html page

	Lines 16-46 are used to create a list of navigation links. All links are relative (except the LinkedIn as it is an external resource) and only the names of the pages because they are in the same parent directory:

		Line 18 is the anchor tag that links to the About page, which when clicked, will redirect the browser to the About.html page
		Line 21 is the anchor tag that links to the Experience page, which when clicked, will redirect the browser to the Experience.html page
		Line 24 is the anchor tag that links to the Interests page, which when clicked, will redirect the browser to the Interests.html page
		Line 27 is the anchor tag that links to the newly added Contact page, which when clicked will redirect the browser to the Contact.html page
		Line 30 is the anchor tag that links to an external LinkedIn page, which when clicked, will redirect the browser to the external LinkedIn page
		Line 33 is the anchor tag that links to email me, which when clicked, will open the default mail app with my email as the sender
		Line 36 is the anchor tag that links to the my resume, which when clicked, will open in a new tab my resume as a PDF

	Lines 38-45 are used to define an area for the colour changing feature that is outlined in the assignment requirements:
		
		Lines 39-43 define a select widget, where after selecting the desired colour scheme and pressing the "Apply" button, it will change the colours of all of the elements. Example inputs and outputs: User selects "Default" and presses "Apply", the page changes the colours of the elements to colour scheme #1 outlined in the wireframe PDF.  User selects "Protanopia" and presses "Apply", the page changes the colours of the elements to colour scheme #2 outlined in the wireframe PDF. User selects "Deuteranopia" and presses "Apply", the page changes the colours of the elements to colour scheme #3 outlined in the wireframe PDF. The "Apply" button is also located on line 44

	Lines 47-51 define an area that is used for the hamburger menu that indicates the dropdown menu on a tablet and mobile view. It is simply 3 spans that will be styled to look like bars

Lines 54-123 are dedicated to the main content of the Interests page:

	Lines 56-82 define a smaller section so that I will be able to style it and use a grid layout so that I can have 2 elements spaced evenly on the top, as well as having 3 elements being spaced evenly at the bottom of the page:

		Lines 58-67 create a container to display my favourite book, with alt text detailing that it is an image of the book Evil Genius by Catherine Jinks. The relative path is Images/Book.jpg as Images/ and Interests.html are in the same parent directory
		Lines 69-81 create a container to display a piano piece that I have played (but the recording is not mine, it is cited in the Citations section below) with a relative path of Other/MagneticRag.mp3 as Other/ and Interests.html are in the same parent directory. This section also has a citation to the source of the audio file
	
	Lines 84-92 create a container to display an embedded YouYube video of music that I listen to
	Lines 94-96 create a section for a header indicating that the section below is a Gallery
	Lines 98-105 create a container to display an image that I took of the MacKay Bridge in Halifax Nova Scotia, and alt text detailing that it is an image of the MacKay bridge. The relative path is also Images/Bridge.jpg since Images/ and Interests.html are in the same parent directory
	Lines 107-113 create a comtainer to display an image that I took of a waterfall that I visited in Nova Scotia, and alt text detailing that it is an image of a waterfall. The relative path is also Images/Waterfall.jpg since Images/ and Interests.html are in the same parent directory
	Lines 115-122 create a container to display an image that I took of my badminton team in high school, with alt text describing that it is an image of members of my badminton team, and relative path of Images/Badminton.jpg since Images/ and Interest.html are in the same parent directory



Contact.html:


Line 1 specifies the doctype of the HTML file
Line 2 indicates where the HTML code starts, as well as the language, which is English
Lines 3-10 are the head section that contains important information that describe the document:
	
	Firstly, line 4 specifies the character endcoding for the HTML document
	Line 5 sets the favicon by stating the image's relationship with the document. The relative link path is Images/Favicon.png, as the Images folder and Contact.html are in the same parent directory
	Line 6 renames the page in the browser tab, and also specifies which page the current page is in relation to the website
	Line 7 is specified to correctly scale the page so that it is sized correctly on all devices
	Line 8 links the CSS stylesheet to the HTML document
	Lastly, line 9 points to the external JavaScript file

Lines 12-52 are dedicated to the nagivation structure of the website:

	Lines 13-15 create a separate container for the image link:
	
		Line 14 is the anchor tag that links to the Home page via an image, which contains alt text describing that it is a picture of 2 cursive J's. The relative link path is Images/Home.png, as the Images folder and Contact.html are in the same parent directory. When clicking this link, the browser will be redirected to the index.html page

	Lines 16-46 are used to create a list of navigation links. All links are relative (except the LinkedIn as it is an external resource) and only the names of the pages because they are in the same parent directory:

		Line 18 is the anchor tag that links to the About page, which when clicked, will redirect the browser to the About.html page
		Line 21 is the anchor tag that links to the Experience page, which when clicked, will redirect the browser to the Experience.html page
		Line 24 is the anchor tag that links to the Interests page, which when clicked, will redirect the browser to the Interests.html page
		Line 27 is the anchor tag that links to the newly added Contact page, which when clicked will redirect the browser to the Contact.html page
		Line 30 is the anchor tag that links to an external LinkedIn page, which when clicked, will redirect the browser to the external LinkedIn page
		Line 33 is the anchor tag that links to email me, which when clicked, will open the default mail app with my email as the sender
		Line 36 is the anchor tag that links to the my resume, which when clicked, will open in a new tab my resume as a PDF

	Lines 38-45 are used to define an area for the colour changing feature that is outlined in the assignment requirements:
		
		Lines 39-43 define a select widget, where after selecting the desired colour scheme and pressing the "Apply" button, it will change the colours of all of the elements. Example inputs and outputs: User selects "Default" and presses "Apply", the page changes the colours of the elements to colour scheme #1 outlined in the wireframe PDF.  User selects "Protanopia" and presses "Apply", the page changes the colours of the elements to colour scheme #2 outlined in the wireframe PDF. User selects "Deuteranopia" and presses "Apply", the page changes the colours of the elements to colour scheme #3 outlined in the wireframe PDF. The "Apply" button is also located on line 44

	Lines 47-51 define an area that is used for the hamburger menu that indicates the dropdown menu on a tablet and mobile view. It is simply 3 spans that will be styled to look like bars

Lines 54-80 are used to create a form that the user will be able to send feedback to me, with input fields for names, emails, and general feedback. This form will not actually send any information as the action is just to "https://example.com/", however this is where the information would go if there was a server to send it to
An example input into the form would be "Jason" in the name input, "js768355@dal.ca" in the email input, and "example" in the textarea input. The output would be post the name/value pairs: "name=Jason&email=js768355@dal.ca&feedback=example"



Styles.css:


Lines 2-43 are used for styling that applies to general things throughout all webpages:

	Lines 2-10 create CSS variables that I used throughout the website by using the :root selector which makes it apply to all of the code in the HTML documents(s). Here, colours and sizes were defined for uniformness and consistency throughout the website

	Lines 13-18 is used to style all of the elements with specific rules, again to maintain consistency throughout the website, and also because without these rules, the styling of some elements simply would not work. This was done using the universal selector on line 13

	Lines 21-23 are used to style the main content of the pages, giving them all space between the bottom of the content and the browser

	Lines 26-31 are used to style most of the images throughout the website, as I am using a class selector. This styled their borders, padding and margin

	Lines 34-36 give space between the top of the page and the header sections
	
	Lines 39-43 style unordered lists so that they get rid of the dot to make the more visually pleasing

	Lines 46-49 are used to style the headers in the website consistently

Lines 58-203 are used to style the navigation bar:

	Lines 58-68 are used to style the container that holds the navigation links. The overall container is given a colour, set so that it is a flexbox which allows the links to be arranged much easier and better, and the position is also set to fixed so that when scrolling it reains in the same position on the viewport. It also defines positioning and formatting rules which allow the content to be arranged in a visually connected and pleasing way. The last addition is the z-index rule, which makes it so that the navigation bar will always be on top of any element on the page.

	Lines 71-75 are used to style the actual list of nav links. This too is made a flexbox, and givinging it rules so that the positioning of it is visually appealing

	Lines 79-82 are used to style the contianer that holds the burger menu, which is initially hidden with display none, and also given a pointer cursor so that the user knows that they are able to click on it

	Lines 85-93 are used to style the actual lines that make up the burger icon. They are given a black background, and positioning and formatting rules so that they resemble an actual burger icon. It is also given a transition effect for when is clicked and transitions to an "X"

	Lines 96-98 are used to align the colour changer feature in the center

	Lines 101-103 are used to give space between the "Apply" button and the colour selector widget

	Lines 106-112 are used to style the links in the nav bar, giving them a colour using the CSS variable, as well as padding and a border radius to look more polished. It is also given text decoration none so that there is no underline

	Lines 115-118 are used to style the nav bar links when the mous is hovering over them, which changes the background colour, as well as the font for contrast of colours

	Lines 121-123 are used to style the links slightly darker depending on which page the user is on so that they are able to know which page they are on

	Lines 126-164 use a media query that activates the contained code when the window width is less than 880px:

		Lines 128-130 make the burger menu visible as it is now in tablet or mobile view

		Lines 133-145 make the burger menu change into an "X" when it is clicked, from the JavaScript applying the ".on" class, which makes the middle bar disappear, and translates and rotates the outside 2 bars so that they form an "x"

		Lines 148-156 are used to style the nav menu initially, which makes it completely invisible because it is 200% to the left (out of the window), and it is also given flex-direction column becuase it is no longer going horizontal, but rather vertical as with mobile and tablet displays there is typically more vertical screen than horizontal screen

		Lines 159-163 are used to display the nav menu when the burger menu is clicked using JavaScript and applying the ".on" class

	Lines 167-172 use a media query that activates when the window height is less than 700px, which changes the gap between the nav elements for a better presentation
	
	Lines 175-180 use a media query that activates when the window height is less than 500px, which changes the gap between the nav elements for a better presentation

	Lines 183-194 use a media query that activates when the window height is less than 350px:

		Lines 185-188 changes the gap between the nav elements, and also the space between the nav section and the logo section for a better presentation

		Lines 191-193 change the padding of the links in the nav bar

	Lines 197-203 use a media query that activates when the window height is less than 300px, which changes the gap between the nav elements, as well as the space between the nav and logo section for a better presentation

Lines 212-429 are used to style the Index page:

	Lines 212-223 define a grid for the content of the index page to be arranged, making it 2 columns that can be max 1fr, and min 0 wide, and it is also given positioning and formatting rules that make the content more visually pleasing

	Lines 226-235 are used to style the hero image section, which makes the background image the hero image, and gives it positioning and formatting rules that make it visually pleasing. It is also given a grid-area value so that it can be positioned in the grid

	Lines 238-240 are use to style the text on the hero image

	Lines 243-153 are used to style the intro text section, giving it background, border, and font colour using the CSS variables, as well as giving it positioning and formatting elements so that it is visually pleasing. It is also given a grid-area value so that it can be positioned in the grid

	Lines 256-263 are used to style the work preview section, again giving it background and border colour using the CSS variables, as well as positional rules for better formatting. It is also given a grid-area value so that it can be positioned in the grid

	Lines 266-268 are used to style the short description section font size

	Lines 271-273 are used to style the header in the intro text section font size

	Lines 276-278 are used to style the subheader in the work preview section font size

	Lines 281-283 are used to style the span that encompases my name to make it larger and more in focus

	Lines 286-288 are used to style the header in the work preview section font size

	Lines 291-296 are used to style the preview image of the project, giving it positional rules for best formatting

	Lines 299-304 are used to style the description section with positional rules, as well as giving it a grid-area value so that it can be positioned in the grid

	Lines 307-309 are used to style the paragraphs in the description section's positioning

	Lines 312-316 are used to style the profile picture, giving it a rounded, coloured border so that it looks visually appealing

	Lines 319-325 are used to style the link that links to the About.html page in the description section, making in the same as the nav links for consistency

	Lines 328-331 are used to give the same styling as the nav bar links to the About.html page link when hovered over

	Lines 334-345 use a media query that activates when the window width is less than 880px: 
	
		Lines 336-338 are used to change the font size of the paragraphs in the description section, the short description, and the header in the intro text section

		Lines 341-344 are used to adjust the size of the link in the description section, changing its padding and font size

	Lines 348-428 use a media query that activates when the window width is less than 500x:
	
		Lines 350-352 add space between the hero image and the nav bar

		Lines 355-357 change the width of the profile picture

		Lines 360-362 reposition the header in the hero image

		Lines 365-404 change the font size of various elements, and for some of those elements it also asjusts their padding

		Lines 407-409 get rid of the padding right so that the intro text is properly positioned in mobile view

		Lines 412-414 are used to change the width of the project preview image

		Lines 417-427 rearrange the layout of the index page by making the grid only one column, as well as giving it positional rules for better presentation

Lines 437-520 are use to style the About page:

	Lines 437-440 are used to style the mission statement header

	Lines 443-451 are used to arrange the contents of the About page, defining a 3 column grid so that the description section can be larger than the unordered list. It is also given positional rules for better presentation

	Lines 454-461 are used to style the background information section, giving it background and border colour from the CSS variables, as well as positional rules for better presentation. It is also given a grid-area value so that it can be positioned in the grid

	Lines 464-469 are used to style the unordered list of skills and attributes, giving it background and border colour from the CSS variables, as well as a grid-area value so that it can be positioned in the grid

	Lines 472-476 are used to style the list elements in the unordered list, to look more visually appealing by changing the colours of the list elements, as well as giving them positioning and formatting rules for better presentation

	Lines 480-500 use a media query that activates when the window width is less than 880px:

		Lines 482-489 are used to style the main content of the page, rearranging it using a different grid layout of only 1 column

		Lines 492-494 are used to change the padding of the background section

		Lines 497-499 are used to change the font size of the paragraphs in the background

	Lines 503-521 use a media query that activates when the window width is less than 500px:

		Lines 505-508 are used to style the mission statement section, changing the font size and adding more space between it and the nav bar

		Lines 511-513 are used to change the padding of the background section for better positioning

		Lines 516-519 are used to change the font size and positioning of the paragraphs in the background section

Lines 529-669 are used to style the Experience page:

	Lines 529-532 are used to style the table in the header section using a flexbox so that it can be positioned in the center

	Lines 535-537 are used to style the font size of the header in the main section

	Lines 540-542 are used to style the table header font size

	Lines 545-547 are used to style the table data padding

	Lines 550-554 are used to give additional styling to the table, namely changing the border colour, as well as making it only have 1 uniform border using border-collapse collapse

	Lines 557-568 are used to position the main content of the Experience page, using a 2 column grid, as well as giving them the positioning and formatting rules for better presentation

	Lines 571-573 are used so that the project header can be positioned in the grid

	Lines 576-579 are used so that the achievement header can be positioned in the grid

	Lines 581-589 are used to style the robotics section, giving it background, border, and font colour from the CSS variables, giving it positioning and formatting rules for better presentation, as well as a grid-area value so it can be positioned in the grid

	Lines 592-597 are used to style the actual robotics video, giving it formatting rules for better presentation

	Lines 600-607 are used to style the placeholder section, giving it background, border, and font colour from the CSS variables, formatting rules, as well as a grid-area value so that it can be positioned in the grid

	Lines 610-613 are used to style the paragraphs' position within the placeholder section

	Lines 616-618 are used to style the font size of the paragraphs in the robotics and placeholder sections

	Lines 621-627 are usd to style the nested list of achievements, giving it background and border colour, formatting rules, as well as a grid-area value so that it can be positioned in the grid

	Lines 630-632 are used to style the list elements within the nested list, giving them padding

	Lines 635-640 use a media query that activates when the window width is less than 880px, which changes the padding of the table data

	Lines 643-669 use a media query that activates when the window width is less than 500px:

		Lines 645-647 are used to add more space between the experience header and the nav bar

		Lines 650-658 are used to rearrange the grid, making it only one column for mobile view

		Lines 661-663 change the padding of the table data

		Lines 666-668 are used to style the placeholder section, changing the height of it to stay consistent between views

Lines 678-867 are used to style the Interests page:

	Lknes 678-692 are used to arrange the main content within the interests page, using a 3 column grid, as well as formatting and positioning rules for better presentation

	Lines 695-701 are used to make a separte grid so that 2 elements will be positioned evenly, even those there are 3 columns in the bigger main grid. This grid is only 2 columns, and will only hold the book and audio sections. It is also givn a grid-area value so that it can be positioned within the bigger grid

	Lines 704-710 are used to style the book section, giving it background and border colour from the CSS variables, as well as formatting rules, and a grid-area value so that it can be positioned within the smaller grid

	Lines 713-719 are used to style the audio section, giving it background and border colour from the CSS variables, as well as formatting rules, and a grid-area value so that it can be positioned within the smaller grid

	Lines 722-726 are used to style the audio player to make it more visually appealing, giving it a border and rounding it a bit more

	Lnes 729-735 are used to style the YouTube video section, giving it background and border colour from the CSS variables, as well as formatting rules, and a grid-area value so that it can be positioned within the larger grid

	Lines 738-741 are used to style the dimensions of the YouTube video

	Lines 744-751 are used to style the gallery header section, giving it background, borer, and font colour from the CSS variables, formatting rules, as well as a grid-area value so that it can be positioned within the larger grid

	Lnes 754-759 are used to style the bridge section, giving it background and border colour from the CSS variables, rounding its border, and giving it a grid-area value so that it can be positioned within the larger grid

	Lines 762-767 are used to style the badminton section, giving it background and border colour from the CSS variables, rounding its border, and giving it a grid-area value so that it can be positioned within the larger grid

	Lines 770-775 are used to style the waterfall section, giving it background and border colour from the CSS variables, rounding its border, and giving it a grid-area value so that it can be positioned within the larger grid

	Lines 778-781 are used to styl the images within the three sections above, changing their padding and widths for better presentation

	Lines 784-786 are used to style the paragraph after the audio player, giving it space between it and the audio player

	Lines 789-792 are used to style the paragraphs in the book, audio, youtube vieo, bridge, badminton, and waterfall section, as well as the cite tag, changing the font size and padding

	Lines 795-833 use a media query that activates when the window width is less than 880px:

		Lines 797-803 are used to rearrange the smaller grid, making it only one column wide

		Lines 806-814 are used to rearrange the larger grid, making it only 2 columns wide

		Lines 817-820 are used to chang the dimensions of the embedded YouTube video

		Lines 823-827 are used to style the images in the bridge, badminton, and waterfall sections, changing their dimensions and padding

		Lines 829-833 are used to style the paragraph in the gallery header, changing the font size and the margins

	Lines 836-867 use a media query that activates when the window width is less than 500px:
		
		Lines 838-849 are used to rearrange the larger grid, so that it is only 1 column wide

		Lines 852-855 are used to change the dimensions of the embedded YouTube video

		Lines 858-861 are used to change the dimensions and padding of the bridge, badminton, and waterfall images

		Lines 864-866 are use to adjust the padding of the book and audio sections

Lines 876-928 are used to style the Contact page:

	Lines 876-878 are used to give space between the form and the nav bar

	Lines 881-888 are used to style the form, giving it background and border colour from the CSS variables, as well as formatting rules for better presentation

	Lines 891-893 are used to style the list elements in the form, giving them space between each other

	Lines 896-899 are used to style the labels for the input fields, making them inline block, and giving them a set width

	Lines 902-907 style the input fields, giving them a set width, so that mainly so that the text area cannot be adjusted horizontally, breaking the presentation, but so it can still be adjusted vertically if the user needs more space to type

	Lines 910-912 are used to style the input elements, giving them an inset border

	Lines 915-920 use a media query that activates when the window width is less than 880px, which makes the form width 80% of the screen

	Lines 923-928 use a media query that activates when the window width is less than 500px, which adds more space between the form and the nav bar



Script.js:


Lines 2-6 assign constant values with selected nodes in the DOM that are of interests (which will be used to modify the website)

Lines 10-14 add an event listener that responds to a click on the burger menu, which toggles a class ".on" that is added to the burger, and nav menu classes. This is one of the many event listeners that the website uses, which is one of the assignement requirements

Lines 17-25 add an event listener that responds to the resizing of the window, which will constanly check if it is greater than 880px. If this is true, the code within the if statements runs, which removes the ".on" class from the burger and main nav classes, so that if the user had the drop down menu opened but then resized to a larger browser, and then went back to the tablet/mobile view, the drop down menu would be closed again (i.e. reset). This is the conditional statement that is one of the assignment requirements

Lines 28-36 add an event listener which responds to when the mouse enters the space that the bridge container takes up (hovers over), which will make the image larger, giving it a transition so that it is not immediate, and giving it a z-index of 2 so that it will be placed over all of the other images because it overlaps

Lines 39-46 add an event listener which responds to when the mouse leaves the space that the bridge container takes up, which will revert the image to how it was so that other images may be hovered over (or the same one again)

Lines 49-56 add an event listener which responds to when the mouse enters the space that the badminton container takes up (hovers over), which will make the image larger, giving it a transition so that it is not immediate, and giving it a z-index of 2 so that it will be placed over all of the other images because it overlaps

Lines 59-66 add an event listener which responds to when the mouse leaves the space that the badminton container takes up, which will revert the image to how it was so that other images may be hovered over (or the same one again)

Lines 69-76 add an event listener which responds to when the mouse enters the space that the waterfall container takes up (hovers over), which will make the image larger, giving it a transition so that it is not immediate, and giving it a z-index of 2 so that it will be placed over all of the other images because it overlaps

Lines 79-86 add an event listener which responds to when the mouse leaves the space that the waterfall container takes up, which will revert the image to how it was so that other images may be hovered over (or the same one again)

Lines 90-127 define a function that is applied when the colour changer "Apply" button is pressed. This function applies the chosen colour scheme to the webpage. This works by first getting the root element, and the colour changer node, and checking what the value of the colour changer node is. This will indicate what colour scheme to apply. There are 3 if statements, which correspond to the 3 colour schemes. If the value is "Default", then the applied colours are the original colours in the Styles.css file. If the value is "Protanopia", then the CSS variables are changed (from accessing the root element) to the colours outlined in the wireframe PDF, as well as some additional colours for hovering over links, borders, and lists which all slightly differ from the outlined colours so that the elements can contrast with the backgrounds. Finally, if the value is "Deuteranopia", then the CSS variables will be changed to the set of colours outlined again in the wireframe PDF, and the statements in the second "else if" condition will run. This is the colour changer that is one of the assignement requirements

Lines 130-164 are used to define a function that is applied when the form "Submit" button is pressed. This function works first by setting constant values to the user input field DOM nodes. This is so that it will be able to check if any of them are empty, or "". If any of the 3 are, then the condition will evaluate to true, and it will create a string. This string "blankFields" will be appended to depending on what fields are empty. First the name field is checked, if it is empty, then "==>Name\n" is appended on to the blankFields string. This check is done for the email and feedback fields, and if any of them are empty, then their respective messages are appended to the blankFields string. Finally, there is an alert that is prompted to the browser, with a message indicating which fields are empty. It also returns false so that if any of the fields are empty, the form will not submit. This is idea as it saves the information entered into the fields, so the user does not have to retype everything. A sample input would be: "Test" in the name field, the email and feedback fields blank: "WARNING: The following fields are empty: ==>Email\n==>Message\n" Note that the "\n" will be rendered as linebreaks in the actual alert



More Details:

The majority of this code (HTML and CSS) was used from Assignment 2. Some HTML and CSS was added, and the entirety of the Script.js was added for this assignment



File Structure:

A3_Js768355/
	-Code Review.pdf
	-Design - Dektop, Tablet, Mobile.pdf
	-README.txt
	-Website/
		-index.html
		-About.html
		-Experience.html
		-Interests.html
		-Contact.html
		-Styles.css
		-Script.js
		-Images/
			-Favicon.png
			-Home.png
			-HeroImage.png
			-Profile.JPG
			-Preview1.jpg
			-Book.jpg
			-Bridge.jpg
			-Badminton.jpg
			-Waterfall.jpg
		-Other/
			-ExperimentalRoboticsVideo.mp4
			-MagneticRag.mp3
			-Resume.pdf



List of Assets:

Images:
	-Images/Favicon.png
	-Images/Home.png
	-Images/HeroImage.png
	-Images/Profile.JPG
	-Images/Preview1.jpg
	-Images/Book.jpg
	-Images/Bridge.jpg
	-Images/Badminton.jpg
	-Images/Waterfall.jpg

Videos:
	-Other/ExperimentalRoboticsVideo.mp4
	-https://www.youtube.com/embed/l98w9OSKVNA

Audio:
	-Other/MagneticRag.mp3

Miscellaneous:
	-Other/Resume.pdf
	-https://example.com/ (Form action)



Linked to hosted website:

https://jjeeeeee.github.io/CSCI1170_Website/



Citations (Same from Assignment 2 and Assignment 1):

Lofi Girl. 2022. 12 A.M Study Session [book emoji] [lofi hip/hop/chill beats] (January 23 2022). Retrieved February 7, 2023 from https://www.youtube.com/watch?v=l98w9OSKVNA&ab_channel=LofiGirl


David Nichols. n.d. Coloring for Colourblindess. (n.d.). Retrieved April 1, 2023 from https://davidmathlogic.com/colorblind/#%23D81B60-%231E88E5-%23FFC107-%23004D40 


Scott Joplin. 1914. Magnetic Rag. [Audio recording]. Performed by Constantin Stephan (n.d). Retrieved February 6, 2023 from https://musopen.org/music/43092-magnetic-rag/


Wikipedia. n.d. Image of "Front cover of the novel" of Evil Genius book [Image]. (n.d). Retrived February 7, 2023 from https://en.wikipedia.org/wiki/Evil_Genius_(novel)




End note:

Congradulations on making it to the end of this README file. I hope for your sake that this is the longest README you will have to mark.