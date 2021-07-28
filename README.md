This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


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

