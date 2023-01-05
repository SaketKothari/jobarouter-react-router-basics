# Jobarouter

<img style="text-align:center" src="https://user-images.githubusercontent.com/81709725/210764359-d69bff8d-2298-4052-bdef-f65f329055ad.png" width=700px/>

#

 ### Why ?

* Whenever you make a site using react you're normally making something called a single page application or an SPA for short and what that means is that when we request the
website from the server in the browser, the server then sends back just a single HTML page and along with that the react JavaScript code needed to render content and react components onto that page.

* Now in actual fact you'll be very surprised to know that most websites don't consist just of a single page of content and normally you click on a link in the menu
to go to a different page right, so in traditional websites that are not single page applications when we click on one of those links it would send a fresh request to the server for a brand new HTML page but that's not the way that react in general were designed to work instead Single page apps like to handle all of the routing in the browser on the front end and not send any additional requests to the server for new pages.

* That's where the react router is needed because out of the box react doesn't come loaded with a fully baked front-end routing mechanism so typically when we make react site we install an additional package called react router Dom which allows us to easily handle routing in the browser and the way this works is that when we click on a link to
a different page in the website the react router intercepts that request and stops it reaching the server and instead the router swaps out the page content depending on whatever page that we requested where each page is essentially  just a react component.

* This is a really fast process because it's all handled on the front end in the browser and we're not sending requests to the server so that's the why and a bit about
the how. 


#

### What are we making ? 

* We'll be making a simple react application which lists out a load of jobs and we can click on each job to see the job details we've also got some other Pages like a help
page which has a few nested routes as well for additional content you can see at the top of the site we've got some breadcrumbs as well which we'll be making. 

* With a little help from the react router too and aside from all the essentials we've learned about some of the newer react router features such as loaders, error components , forms and actions.

#

<img style="text-align:center" src="https://user-images.githubusercontent.com/81709725/210767141-0f8fc865-ff65-4218-acd3-1028a47f0ba6.png" width=800px/>

#

### Usage

Install dependencies

```bash
npm install
```

Run

```bash
npm start
```

To run the json server

```bash
npm i -g json-server
json-server -p 4000 -w ./data/db.json
http://localhost:4000/careers - See all json data
```
