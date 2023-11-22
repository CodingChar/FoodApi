# FoodApi

<p>Basic API with CRUD functionalities</p>

## Basic Food Object  structure
Food = {
 name: String,
 kcal: Number 
}
<h2>Add the attribute "_name" and "_kcal" if you are attempting to update some specific object of the database.</h2>
<span>For example: req.body = {name: "Lettuce", _name: "Banana", _kcal: 22}</span>
<p>If u sent the request to the update endpoint, there will be a function that will take "name" to search for an object with the same name in the database
and then will modify the name of the found object, with "_name" and it will also modify the value of "kcal" with the value inside of "_kcal"
</p>

## First version endpoints and their http protocols:
<h2>GET</h2>
<ul>
  <li> "/" <span>To get all the foods stored in the database</span></li>
  <li>"/get-food" <span>To find one specific food taking in consideration his name as search parameter</span></li>
</ul>
<h2>POST</h2>
<ul>
    <li>"/add-food" <span>To add one single food to the database</span></li>
</ul>
<h2>PUT</h2>
<ul>
  <li>"/update-food" <span>To update one specific food taking in consideration  his name as search parameter</span></li>
</ul>
<h2>DELETE</h2>
<ul>
    <li>"/delete-food" <span>To delete one specific food taking in consideration  his name as search parameter </span></li>
</ul>

