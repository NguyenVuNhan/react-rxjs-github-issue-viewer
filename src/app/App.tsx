import React, { Suspense } from 'react'
import './App.css'
import { RepoSearchForm } from 'features/repoSearch/RepoSearchForm'
import { IssuesListPage } from 'features/issuesList/IssuesListPage'
import IssueDetailsPage from 'features/issueDetails/IssueDetailsPage'
import { useSelectedIssueId } from 'state'

const List: React.FC = () => {
  const id = useSelectedIssueId()
  return id !== null ? null : (
    <>
      <RepoSearchForm />
      <IssuesListPage />
    </>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <List />
      <Suspense fallback={<p>Loading ...</p>}>
        <IssueDetailsPage />
      </Suspense>
    </div>
  )
}

export default App
