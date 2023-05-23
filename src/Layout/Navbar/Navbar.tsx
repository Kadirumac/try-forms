import React,{ useState } from 'react';
import './_navbar.scss';
import {Navbar as NavbarTypes} from '../../types';
import classNames from 'classnames';

const Navbar:React.FC<NavbarTypes> = ({ title }: NavbarTypes) => {

    let navClass: boolean = false

    return(
        <div className={classNames('container try-navbar',
                       {'has-primary': navClass})}>
            <div className={'row try-navbar--wrapper w-100'}>
                <img src="./logo.png" alt="" />
                <div className={'col-lg-2 try-navbar--title'}>{title}</div>
                <div className={'col-lg-8 try-navbar--search'}>
                    <input type="text"/>
                </div>
                <div className={'col-lg-2 try-navbar--menu'}>
                    <ul>
                        <li>AAA</li>
                        <li>BBB</li>
                        <li>CCC</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar