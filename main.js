/* Data */

var contacts = [
    {key: 1, name: "Amitesh", email: "amitesh.jy.786@gmail.com", description: "Front-end Developer"},
    {key: 2, name: "Singh", email: "amiteshsingh@gmail.com", description: "Back-end Dev"}
]

var newContact = {name: "", email: "", description: ""}

ReactDOM.render(
    React.createElement(ContactView, {
        contacts: contacts,
        newContact: newContact
    }),
    document.getElementById('react-app')
)
