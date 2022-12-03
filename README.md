# Automated-Webscraper

## Description
Webscraping application allowing users to add specific urls, html element identifiers and tags to scrape any website they please. This application persists
state as long as the Flask server is running, 
allowing users to continuosly monitor changes to websites automatically.

## How It Works

Users will enter the respective information about the website they would like to scrape. Then the scraper will post to Flask, and using BeautifulSoup the webscraper will
scrape the approriate website looking for the desired content. Flask API will send back the information it was able to gather and the frontend application will display accordingly.

## Usage
Clone repository

cd web-scraper ``npm install`` then ``npm run dev`` to run frontend Vite+React Application

cd backend ``./installation.sh`` then  ``py main.py`` to run backend Flask Application


## Example
Website Screenshot:
![image](https://user-images.githubusercontent.com/81478885/205455607-c1a75fb0-18fb-4668-8aa4-d5a4fa220dbd.png)

## Tech Stack

![image](https://user-images.githubusercontent.com/81478885/205456253-3302bd98-bdbf-4567-a1fc-862f02677ffe.png)

