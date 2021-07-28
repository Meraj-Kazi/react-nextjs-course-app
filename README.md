This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## React & NextJS Course Application - 00. Warm Up

- This is a starter kit for the learning. You can skip it and move on to next step. 


## React & NextJS Course Application - 01. Initial Setup


Follow these steps:

- open terminal
- run command ``` npx create-next-app next-news ```
- Open the folder into VS Code or any text editor.
- get rid of index page inside pages folder, delete api folder, delete module css file from style folder.
- Make 2 pages inside pages folder called index.js and news.js
- add relevent code in those two.
- now open terminal and run the project using this command ```npm run dev```
- view the app on localhost:3000
- Now if you visit localhost:3000, you'll see indexJS page loaded.
- If you want to see the newsJS page, visit localhost:3000/news. Also, if you move newsJS file into a folder called news, inside pages folder, and name the newsJS page as indexJS, it'll still be available on localhost:3000/news. It's upto you. It's better for making nested pages.
- But if wanna load anything dynamic in our news page, we need to use <strong>Dynamic Paths</strong>


## React & NextJS Course Application - 02. Dynamic Path 


Follow these steps:

- If we add file called [newsId].js, browser will know that this contains dynamic data
- now copy the code from index and change the names, you can see the info at localhost:3000/news/1 or localhost:3000/news/111 or anything like that. It's totally dynamic. 
- To find out what's in the url so that we can send the relevant data from database, we will use a hook provided by nextJS. put this code on the top of the details page. ``` import { useRouter } from 'next/router'; ```
- We can call this hook and access to it's data by adding this line in the deatils page. ``` const router = useRouter(); ``` 
- To get the url news link from browser, we can use this to see if we can access the data or not ``` console.log(router.query.newsId); ```
- Now go to the browser and browse <strong>localhost:3000/news/latest-news-update</strong>
- Open the console of the browser and see it prints ``` latest-news-update ```
- If we had a backend, we could send a request to the  backend API, and fetch the data associated with the newsId.
- Now we gonna talk about Navigation.

## React & NextJS Course Application - 03. Navigation 


Follow these steps:

- We need to have links in our site to allow users to navigate from a page to another.
- So, let's go to the index.js file which is inside the news folder. And add this line on the top ``` import { Fragment } from "react"; ``` 
- This Fragment will help us to wrap elements. 
- Now let's edit the heading and put it inside the Fragment tag 

``` 
return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
          <li>
              <a href="/news/latest-news">Latest news</a> 
          </li>
          <li>
              <a href="/news/more-news">More news</a> 
          </li>
      </ul>
    </Fragment>
  );
``` 
- Also we added basic html list with each item as an individual link with ``` <a></a> ``` tag. The Fragment section will hold them together. 
- Let's go to the browser and visit news page at ``` localhost:3000/news ``` 
- Click on the texts on the list and it'll take you to the corresponding url. 
- But when you click on the links, the page refreshes and takes you to the next page. We dont want that. That's not SPA(Single Page Application). We want something that will not refresh the page during the transition of going one page to another. That's why we use React in the first place.
- So, now we gonna import another package/component called ``` Link ```.
- Add this code on the top of the index.js page (which is inside news folder). ``` import Link from "next/link"; ```
- Now replace the ``` a ``` from ``` <a></a> ``` tag with ``` Link ```. This portion should like this

``` 
          <li>
              <Link href="/news/latest-news">Latest news</Link> 
          </li>
          <li>
              <Link href="/news/more-news">More news</Link> 
          </li>
``` 
- Now save it and visit ``` localhost:3000/news ``` again and click on the links. They go to the url without refreshing the page. 
- Those were the basic stuffs. 
- Now we gonna dive deep into the Advanced stuffs of NextJS. 


## React & NextJS Course Application - 04. Advanced Section Initial Setup 

- This is a starter project in basic React so that we can improve it with NextJS.


