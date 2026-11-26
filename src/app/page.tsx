import {redirect} from 'next/navigation'

// Redirect / -> /vi
export default function RootPage() {
  redirect('/vi')
}
