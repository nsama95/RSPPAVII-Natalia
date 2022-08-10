import axios from "axios";

const newPeople = (data) => {

    console.log(data);
    console.log(localStorage.getItem("token"));
    return axios
    .post(`http://localhost:3000/api/starwars/`, {
        nombre: data.nombre,
        color_pelo: data.color_pelo,
        color_ojos: data.color_ojos,
        altura: data.altura.toString()
    }, 
    {
        headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token"))
        }
    })
    .then((response => {
        return response.data;
    }));
};

const updatePeople = (data) => {

    console.log(data)

    return axios
    .put(`http://localhost:3000/api/starwars/`+data.id, {
        nombre: data.nombre,
        color_pelo: data.color_pelo,
        color_ojos: data.color_ojos,
        altura: data.altura.toString(),
        id: data.id
    },  
    {
        headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token")).toString()
        }
    })

};

const deletePeople= (data) => {

    console.log(data)

    return axios
    .delete(`http://localhost:3000/api/starwars/`+data.id,  
    {
        headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token")).toString()
        }
    })

};

const PeopleService = {
newPeople,
updatePeople,
deletePeople
};

export default PeopleService;