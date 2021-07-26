# React & NextJS Course Application - 02. Dynamic Path 


Follow these steps:

- If we add file called [newsId].js, browser will know that this contains dynamic data
- now copy the code from index and change the names, you can see the info at localhost:3000/news/1 or localhost:3000/news/111 or anything like that. It's totally dynamic. 
- To find out what's in the url so that we can send the relevant data from database, we will use a hook provided by nextJS. put this code on the top of the details page. ``` import { useRouter } from 'next/router'; ```
- We can call this hook and access to it's data by adding thi sline in the deatils page. ``` const router = useRouter(); ``` 
- To get the url news link from browser, we can use this to see if we can access the data or not ``` console.log(router.query.newsId); ```
- Now go to the browser and browse <strong>localhost:3000/news/latest-news-update</strong>
- Open the console of the browser and see it prints ``` latest-news-update ```
- If we had a backend, we could send a request to the  backend API, and fetch the data associated with the newsId.
- Now we gonna talk about Navigation.
