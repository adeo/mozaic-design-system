import * as React from 'react'
import { navigate } from "gatsby"
// import { Redirect } from "@reach/router"
import { setSlugify } from '../utils'
// import Layout from '../../components/layout'

const PageRedirect = (props) => {
    console.log('props ======== ', props)
    console.log('encodeURIComponent ======== ', encodeURIComponent(props.location.pathname))
    console.log('encodeURI ======== ', encodeURI(props.location.pathname))

    // const pathname = location.pathname
    // const slug = setSlugify(pathname)

    // console.log('pathname ==== ', pathname)
    // console.log('slug ==== ', slug)
    
    // if (pathname !== slug) {
    //         navigate(slug)
    // return null
    // }
    

    return
}

export default PageRedirect