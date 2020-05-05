import React from 'react';
import styles from './Paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }
    return <ul className={styles.pager}>
        {pages.map( p => {
          return <li className={currentPage === p && `${styles.selectedPage}`}
              onClick={(e) => {
                onPageChanged(p);}}>{p}</li>
        })}
      </ul>;
};


export default Paginator;

