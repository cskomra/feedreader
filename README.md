## Using Feedreader
Feedreader is a web-based application that loads RSS feeds so that you can read them.

Open the [index.html](http://cskomra.github.io/projects/feedreader/index.html) file to begin using Feedreader.  

- Basic Functionality
	- Click the hamburger menu to view a list of available feeds
	- Click on a menu item to load its respective feed
	- Click on an entry's Title to load its content
- Test Suite Functionality
	- RSS Feeds
		- are defined
		- have URLs that are not empty
		- have names that are not empty
	- The Menu
		- is hidden by default
		- changes visibility when menu icon is clicked
	- Initial Entries
		- load at least a single .entry element within the .feed container
	- New Feed Selections
		- actually change container content

## Basic Functionality
Use Feedreader to browse and read available feed content.

## Test Suite Functionality
[Jasmine](http://jasmine.github.io/2.2/introduction.html) is used to test basic functionality. Results are displayed at the bottom of the screen.
