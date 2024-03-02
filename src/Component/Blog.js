import React from 'react'

export default function Blog() {
    return (
        <>
            <h1 style={{ marginTop: "200px", color: 'white', textAlign: "center", fontSize:"80px" }}>Our Blog</h1>
            <p style={{ marginTop: "80px", color: 'white', textAlign: "center", fontSize:"30px" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

            <div className="container" style={{marginTop:'80px'}}>
                <div className="row">
                    <div className="col-4">
                        <div class="card" style={{width: "25rem"}}>
                            <img style={{height:"300px"}} src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body"> 
                                <h5 class="card-title" >Why Lead Generation is Key for Business Growth</h5>
                                <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{width: "25rem"}}>
                            <img style={{height:"300px"}} src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp?b=1&s=170667a&w=0&k=20&c=c0Q8u1Y5yFJCDxltBZd0RAn1g01Se6qCjZGS5q9XLZs=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Why Lead Generation is Key for Business Growth</h5>
                                <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{width: "25rem"}}>
                            <img style={{height:"300px"}} src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Why Lead Generation is Key for Business Growth</h5>
                                <p class="card-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
