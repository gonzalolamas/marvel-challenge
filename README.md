<h1>React Challenge Marvel</h1>

<img src="https://ph-files.imgix.net/628f8ed7-1c0b-4a9f-9e9f-d9b6d2431913.png?auto=format"/>

<h2>
Funcionalidades incorporadas en la app 
</h2>

<ul>

<li>Las peticiones se tienen que realizar a la siguiente URL:
http://gateway.marvel.com/v1/</li>


</ul>

<h2>
Funcionalidades que faltan:
</h2>

<ul>

<li>El buscador tiene que tener la posibilidad de buscar los nombres de los Personajes de Marvel en el input y por URL.</li>

<li>Cuando se entra la primera vez en la app web sin ningún personaje en
la URL tiene que mostrar un personaje aleatorio y así por cada vez
que vuelva a recargar la página.</li>

<li>La búsqueda tiene que contemplar buscar por similitudes de texto y
parecidos de nombre, es decir, con solo buscar “spider” debería de
renderizar todas las posibilidades y matches que abarcan.</li>

<li>La búsqueda tiene que tener la posibilidad de buscar por comic
directamente también y si es un link que viene directamente de la
página de marvel(The Amazing Spider-Man #22) tiene que visualizar un
preview del cómic.
La manera que se mostrarán las búsquedas serán en forma de cards
y modales para el detalle del personaje con sus comics.</li>

<li>
Al clickear un card debería ir al detalle del personaje y mostrar un
listado de sus cómics ordenados por fecha.
</li>

<li>
El buscador de marvel tiene que contemplar que por la búsqueda de
la URL se pueda hacer búsqueda de los personajes mediante query
strings en la url del sitio, por ejemplo:
http://my.app.com/?character=”spiderman”&comic=”The Amazing
Spider-Man #22” y debe renderizar el card de Spiderman que al
clickearse solo debe de aparecer el comic que fue buscado(este
feature debe de soportar más de un cómic por URL, así como más de
un personaje)
</li>

<li>
La búsqueda tiene que poder guardarse en un listado de favoritos y
que persista en el browser para que pueda ser usada en un futuro solo
dandole click a la lista de búsquedas favoritas el cual tiene la estrella
en la esquina superior derecha del input de búsqueda.

</li>
</ul>