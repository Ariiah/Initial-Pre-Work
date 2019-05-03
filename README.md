# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The user loads up the techtonic web page and sends a request to the server. The server then searches for the domain name and sends the information over once it's found.  Then it generates onto the user side. This is all done in a matter of (milli)seconds.

## From start to finish, how does data reach you to be rendered in the browser?

The user sends a request to the client, which is then sent over the DNS (Domain Name System) to look up the IP address for the site. Once it's found, it gets sent back to the client and sends a GET request to the database to retrieve the data of the site. The database then sends the data over to the server, which is then rendered into a stataus 200 HTTP response, and then the content is loaded onto the user side.

## What code is rendered in the browser?

HTML (Hyper Text Markup Language) is loaded into the browser. It reads the code written and parses it to be HTML.

## What is the server-side code’s main function?

The server side holds the backend data of the web page. It's where information like user accounts are held.

## What is the client-side code’s main function?

The client side code holds the visual representation of a webpage. It's what the user sees. Some examples are: Navigaton tools, dashbaords, layouts, etc.

## What is runtime?

Runtime is when instructions to run the program of the code is executed. It's how developers test if thier code works.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Gleaning from the Cloudware glossary on Client-Side vs Server-Side, it creates one instance for the one particular user.

## How many instances of the server-side code are available at any given time?

Gleaning from the Material UI explaination on Server Rendering, it looks like the server renders every time the web page is loaded.

## How many instances of the databases connected to the server application are created?

Gleaning from the Lifewire article "Database Instance" by Mike Chapple, it depends on what kind of data is being delt with. In general, there might be three different database instances when testing code: Development, Pre-production, and Production. 
