# Webex - An Automated Website Tester
put badges here

## Introduction

This is an advanced web crawling tool that will not only discover the active URLs within the website but also provide information about SSL certificate compliance, Cookie checker, ADA compliance, Security-related checks, SEO and the complete analysis of the website.

## Implementation Details

## Tools and Technology

The project is using a microstructure architecture where we have the main server in golang which would be communicating with all other services/agents/scripts such as Python, Node.js etc.

The front end is created in React.js and Material UI. All the reports are displayed to users in a visually appealing manner which can be exported in all the major formats including pdf, doc, etc. We created a very flexible and versatile foundation for our codebase, so that in future its functionality could be easily extended and new agents could be easily added into it. 




## Usage or Working Demo


## Contributing Guidelines

1. This repository consists of 2 directory `frontend`,`backend`.
2. The `frontend` directory the frontent code written in React.
3. The `backend` contains `db`, `go`,`node` and `python` directory which have databases, crawler, webpages backend and SSL checker code respectively.
4. So, commit code to the corresponding services.

### Setting up the repository locally

1. Fork the repo to your account.

2. Clone your forked repo to your local machine:

```
git clone https://github.com/Aman-Codes/techfest.git (https)
```

or

```
git clone git@github.com:Aman-Codes/techfest.git (ssh)
```

This will make a copy of the code to your local machine.

3. Change directory to `techfest`.

```
cd techfest
```

4. Check the remote of your local repo by:

```
git remote -v
```

It should output the following:

```
origin	https://github.com/<username>/techfest.git (fetch)
origin	https://github.com/<username>/techfest.git (push)
```

or

```
origin	git@github.com:<username>/techfest.git (fetch)
origin	git@github.com:<username>/techfest.git (push)
```

Add upstream to remote:

```
git remote add upstream https://github.com/Aman-Codes/techfest.git (https)
```

or

```
git remote add upstream git@github.com:Aman-Codes/techfest.git (ssh)
```

Running `git remote -v` should then print the following:

```
origin	https://github.com/<username>/techfest.git (fetch)
origin	https://github.com/<username>/techfest.git (push)
upstream	https://github.com/Aman-Codes/techfest.git (fetch)
upstream	https://github.com/Aman-Codes/techfest.git (push)
```

or

```
origin	git@github.com:<username>/techfest.git (fetch)
origin	git@github.com:<username>/techfest.git (push)
upstream	git@github.com:Aman-Codes/techfest.git (fetch)
upstream	git@github.com:Aman-Codes/techfest.git (push)
```

## Installation or Dev Setup

### Method 1 (recommended): using Docker

#### Pre-requisites

1. Install `Docker` by looking up the [docs](https://docs.docker.com/get-docker/)
2. Install `Docker Compose` by looking up the [docs](https://docs.docker.com/compose/install/)

#### Steps

1. Make sure you are in the root of the project (i.e., `./techfest/` folder).
2. Setup environement variables in `.env` files of all `services` and `root` according to `.env.sample` files.
3. Run `docker-compose up` to spin up the containers.
4. The website would then be available locally at `http://localhost:WEB_PORT/`. (`WEB_PORT` in `.env.sample`)
5. The above command could be run in detached mode with `-d` flag as `docker-compose up -d`.
6. For help, run the command `docker-compose -h`.

### Method 2 (not recommended): Setup services independently

##### Pre-requisites

1. Signup and Install `mongodb` from [here](https://www.mongodb.com/try/download).
2. 
3. 


#### Setup Crawler

1. 
2. 

#### Setup node backend

1.   
2. 


#### Setup SSL
 
1. 
2. 

### References

* https://github.com/gocolly/colly
* https://github.com/narbehaj/ssl-checker
* https://gdpr.eu/cookies
* https://github.com/jkwakman/Open-Cookie-Database
* https://cookiedatabase.org
* https://www.cookieserve.com
* https://checka11y.jackdomleo.dev
* https://github.com/Khan/tota11y
* https://github.com/koenbuyens/securityheaders
* https://securityheaders.com
* https://csp.withgoogle.com/docs/index.html
* https://github.com/s0md3v/XSStrike
* https://github.com/sqlmapproject/sqlmap
* https://github.com/foospidy/web-cve-tests
* https://github.com/oazevedo/GDPR-is-my-Website-Insecure/blob/master/GDPR%20-%20Is%20My%20Website%20inSecure-v1.4.pdf
* https://en.wikipedia.org/wiki/Search_engine_optimization
* https://github.com/sethblack/python-seo-analyzer
* https://www.python.org/success-stories/python-seo-link-analyzer/
* https://www.searchenginejournal.com/python-technical-seo/330515/
* https://github.com/eliasdabbas/advertools
* https://www.holisticseo.digital/python-seo/crawl-analyse-website/
* https://github.com/jonathankamau/seo_check
