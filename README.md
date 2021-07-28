# React & NextJS Course Application - 03. Navigation 


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
