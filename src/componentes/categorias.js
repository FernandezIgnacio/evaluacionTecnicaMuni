import React from "react";
import category from "./tipodecat";
import categorias from "./home"
import categorias from "./categorias.css"
const inicio = () => {
    return (
        <div class="Categorias">
            <h1>Elija el tipo de categoria que quiera</h1>
            {categories.map((category) => (
        <CategoryBox key={category.id} category={category} />
      ))}
        </div>
    )
}
