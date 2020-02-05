import React from 'react';
import HomeLayout from '@/layouts/Home/';


export default function (props: any) {
    console.log(props.location.pathname)
    if (props.location.pathname === '/') {
        return <HomeLayout>{props.children}</HomeLayout>
    }

    else {
        return props.children
    }
}