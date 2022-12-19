import requests
from flask import Flask, redirect, url_for, render_template, request
from bs4 import BeautifulSoup
from flask_cors import CORS, cross_origin

HEADERS = {
    'Accept-Language': 'en-US, en;q=0.5'
}

app = Flask(__name__)
cors = CORS(app)

# app.config['CORS_HEADERS'] = 'Content-Type'


website =[]

def getWebsiteData(url,htmlElement,htmlIdentifier, identifierTag):
    page = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(page.content,"html.parser")
    return soup.find(htmlElement,{htmlIdentifier:identifierTag}).text.strip()

def returnAllWebsiteData():
    tmpArray = []
    for i in website:
        webData = getWebsiteData(str(i['website']),str(i['html']),str(i['id']),str(i['tag']))
        tmpArray.append({
            'website':i['website'],
            'data':webData
        })
    return tmpArray

@app.route('/addWebsite', methods=['POST'])
@cross_origin()
def postWebsite():
    request_data = request.get_json()
    website.append({
        'website':request_data['website'],
        'html':request_data['html'],
        'id':request_data['id'],
        'tag':request_data['tag']
    })
    print(website)
    data = returnAllWebsiteData()
    print(data)
    return data

@app.route('/getWebsites')
@cross_origin()
def getWebsite():
    return returnAllWebsiteData()

if __name__ == '__main__':
#     print(getWebsiteData('https://www.npmjs.com/package/axios','span','class', '_76473bea f6 dib ph0 pv2 mb2-ns black-80 nowrap f5 fw4 lh-copy'))
    app.run('0.0.0.0',port=5000)

