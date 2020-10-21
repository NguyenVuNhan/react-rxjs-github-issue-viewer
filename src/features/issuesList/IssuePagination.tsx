import React, { Suspense } from 'react'
import classnames from 'classnames'
import Paginate from 'react-paginate'
import styles from './IssuePagination.module.css'
import './IssuePagination.css'
import { onPageChange, useCurrentPage, useIssues } from 'state'

const IssuePaginationLoaded = () => {
  const currentPage = useCurrentPage()
  const { pageCount } = useIssues()

  const _onPageChange = ({ selected }: { selected: number }) =>
    onPageChange(selected + 1)

  return pageCount === 0 ? null : (
    <div className={classnames('issuesPagination', styles.pagination)}>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={_onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
  )
}

export const IssuePagination = () => (
  <Suspense fallback={<p>Loading ...</p>}>
    <IssuePaginationLoaded />
  </Suspense>
)
