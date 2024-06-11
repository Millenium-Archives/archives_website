import { useState } from 'react'
import book from "../assets/images/book.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav class="nav">
            <img class="logo" style={{ width: '50px', height: '50px' }} src={book}/>
            <ul class="pages">
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/survey">Survey</a>
                </li>
            </ul>
        </nav>
    )
}
