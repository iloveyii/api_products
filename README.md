# PROJECT

- A MERN application

## THE PURPOSE OF THIS PROJECT

- A small MERN stack application
- Frontend in react - A small N-Puzzle game
- Backend in node typescript - An GraphQL endpoint which fetches data from two remote API endpoints and reformats data in a specific format

| GraphQL                                                   | Backend API                                                | Frontend                                              |
| --------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| ![grpahql](http://172.104.140.88:7700/images/graphql.png) | ![api](http://172.104.140.88:7700/images/products_api.png) | ![fe](http://172.104.140.88:7700/images/frontend.png) |

- [DEMO PROJECT - Link 1](http://172.104.140.88:7700/)

## DEMO

### GraphQL

- browse to http://172.104.140.88:7700/graphql
- Paste the following (and then click execute button) to fetch data from the online configured server

```
{
  products{
    id
    name
    attributes {
      name
      value
    }
  }
}

```

### Backend

- Browse to http://172.104.140.88:7700/api/v1/products/1/3
- The parameter 1 in the query path is for page number, while 3 is for page size
- You may use the query string url as well like : http://172.104.140.88:7700/api/v1/products?page=1&page_size=3

### Frontend

- Browse to http://172.104.140.88:7700 and click login (change email to root@admin.com if not already)
- Password can be anything for user root@admin.com

## INSTALLATION

- We will use Ubuntu as operating system for all installations below, but it should work on any operating system.
- Install mongodb `sudo apt update & sudo apt install mongodb -y`
- Clone the repo `git clone https://github.com/iloveyii/api_products.git`
- Inside both apps (i.e frontend and backend) copy the corresponiding .env-example to .env (change mongo credentials if you have different settings for it on your system)
- Install packages in both backend and frontend by cd to backend or frontend and then `npm i` and then run both applications as `npm start`
- The frontend application will open browser, simply click login and you will see the Dashboard.
- Click Puzzle menu in the side bar to see the frontend application in action. You can change rows and cols and click reset button
- Click Dashboard menu in the side bar to see the data from API endpoint
