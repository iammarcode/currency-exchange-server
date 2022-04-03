````

# 1. Api Documentation

[Postman api export file](https://github.com/whoismarcode/currency-exchange-server/blob/main/currency-exchange-server.postman_collection.json)

* **URL**
  http://54.147.207.43:3000/cryptos/list

* **Method:**
  `POST`

* **Data Params**
```javascript
{
    "currency": "HKD"
}
```

* **Success Response:**
```javascript
{
    "status": 200,
    "code": "Success",
    "data": [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "currency": "HKD",
            "price": 363870.95892505656,
            "percent_change_24h": 0.51899794
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "currency": "HKD",
            "price": 27445.074352547144,
            "percent_change_24h": 1.45669471
        },
        {
            "id": 1839,
            "name": "BNB",
            "symbol": "BNB",
            "currency": "HKD",
            "price": 3509.103187391231,
            "percent_change_24h": 1.47641555
        },
        ...
    ]
}
```
* **Error Data Params** (ss is not a valid currency symbol)
```javascript
{
    "currency": "ss"
}
```
  
* **Error Response:** 
```javascript
{
    "status": 400,
    "code": "InvalidParams",
    "data": []
}
```  

# 2. How to run project locally?
### Clone project
```
git clone https://github.com/whoismarcode/currency-exchange-server.git
cd currency-exchange-server
```

### Install dependencies
```
npm i
```

### Run application
```
npm run dev
```

### Run test
```
npm run test
```

### Build and run application
```
npm run build
npm run start
```

# 3. Dockerize and deploy application locally
### Build image
```
docker build -t currency-exchange-server .
```

### Run application
```
docker run -p 3000:3000 currency-exchange-server
```

# 4. Deploy application to remote server
### 4.1 Push the image to docker hub
```
docker tag currency-exchange-server:<tagName> <YOUR-DOCKER-HUB-USERNAME>/currency-exchange-server:<tagName>
docker login
docker push <YOUR-DOCKER-HUB-USERNAME>/currency-exchange-server:<tagName>
```

### 4.2 Apply a AWS EC2 free instance and setup
    4.2.1 add HTTP rules to Inbound rules
    4.2.2 install docker and so on...
```
docker login
docker pull <YOUR-DOCKER-HUB-USERNAME>/currency-exchange-server:<tagName>
docker run -p 3000:3000 <YOUR-DOCKER-HUB-USERNAME>/currency-exchange-server
```

### 4.3 test public api with curl on another machine
```
curl -d "currency=HKD" http://54.147.207.43:3000/cryptos/list
```


````
