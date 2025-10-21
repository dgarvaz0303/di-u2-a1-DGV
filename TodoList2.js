
const person = {
  name: 'Gregorio Y. Zara',
  imageInit: 'https://i.imgur.com/',
  imageId: '7vQD0fP',
  imageSize: 'b',
  imageExt: '.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList2() {

  const imageUrl = `${person.imageInit}${person.imageId}${person.imageSize}${person.imageExt}`;

  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={imageUrl}
        alt={person.name}
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}
