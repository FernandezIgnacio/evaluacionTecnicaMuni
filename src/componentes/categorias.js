import React from "react";
import category from "./tipodecat";
import categorias from "./home"
const inicio = () => {
    return (
        <div>
            <h1>Elija el tipo de categoria que quiera</h1>
            {categories.map((category) => (
        <CategoryBox key={category.id} category={category} />
      ))}
        </div>

    )
}
