import useSWR from 'swr'
import { Fragment } from 'react'
import { useFetch } from '../src/hooks/hookFetch'
import DefaultLayout from '../src/components/layouts/DefaultLayout'
import { Button, majorScale, Text, Pane } from 'evergreen-ui'

function Profile() {
  const { data } = useFetch('POST', 'https://api.wikiforest.com')
  return (
    <DefaultLayout>
      
    </DefaultLayout>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://127.0.0.1:2333`)
//   const posts = await res.json()
//   return {
//     props: {posts}, // will be passed to the page component as props
//   }
// }

export default Profile
