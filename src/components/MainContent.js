import React from 'react'   // required for JSX
import './css/bootstrap.min.css'

function MyInfo() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Hello Koos</h2>
                </div>
            </div>
            <div class="row">
                <div class="card text-white bg-primary mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-secondary mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Secondary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div>        
    )
}

export default MyInfo