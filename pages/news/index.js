import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
          <li>
              <Link href="/news/latest-news">Latest news</Link> 
          </li>
          <li>
              <Link href="/news/more-news">More news</Link> 
          </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
