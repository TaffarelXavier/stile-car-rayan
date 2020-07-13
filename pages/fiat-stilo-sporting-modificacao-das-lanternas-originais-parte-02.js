import React, { useState } from 'react';
import Layout from '../components/Layouts'
import CommentItem from '../components/CommentItem'
const App = () => {
    return (<>
        <Layout>
            <div style={{ width: 900, margin:"0px auto" }}>
                <div style={{
                    display: "flex", flexDirection: "column", flexWrap: "wrap", textAlign: "center",
                    justifyContent: "center", marginBottom: 20
                }}>
                    <h1 style={{ fontSize: '1.5rem' }}>Fiat Stilo Sporting | Modificação das Lanternas Originais | Parte 02</h1>
                    <img
                        style={{ height: 400, maxWidth:"70%", marginTop: 20, margin:"0px auto" }}
                        src="https://i.ytimg.com/vi/1olNW7vlqT8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDt3h_dz1jZu8wIWbydfZqQPwRcfA" alt="" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis earum, quaerat nesciunt, ullam molestias fugit doloremque nobis impedit corporis unde quod magni illo rerum aut possimus sequi odio aspernatur temporibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium autem odit ipsum adipisci ab saepe doloremque voluptas itaque, eos, a nostrum cum? Maiores laboriosam dolor, maxime ad, deleniti natus nemo repellat obcaecati animi ex amet. Ea amet eum quasi distinctio, ipsa sint, nam itaque consectetur iure reprehenderit possimus repellendus?
                </p>
                </div>
                <hr />
                <div>
                    <p style={{textAlign:"center"}}><strong>Comentários</strong></p>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </div>
            </div>


        </Layout>
    </>)
}

export default App;