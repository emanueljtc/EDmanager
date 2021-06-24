const initialState = {
    players: [
        {
            id: 1,
            name: "Juan Carlitos",
            photo: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
        },
        {
            id: 2,
            name: "Beto Quiroga",
            photo: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        },
        {
            id: 3,
            name: "Alejo Garcia",
            photo: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
        },
        {
            id: 4,
            name: "Juan Disain",
            photo: "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
        },
        {
            id: 5,
            name: "Alvaro Felipe",
            photo: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/alvaro.jpg?itok=08DTxTR9"
        },
        {
            id: 6,
            name: "Alexys Lozada",
            photo: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-09/tioalexys.jpg?itok=X6xIi4DI"
        },
        {
            id: 7,
            name: "Harold Pajuelo",
            photo: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/2017-11-16_17h25_03.png?itok=FrcROCNv"
        },
        {
            id: 8,
            name: "Manu Rodriguez",
            photo: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/manu-photo.jpg?itok=4HvdRLS7ceived_1693673130717610.jpeg?itok=ey6dQlly"
        },
        {
            id: 9,
            name: "AlejoRodríguez",
            photo: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-02/IMG-20180202-WA0001.jpg?itok=TIRhGBIM"
        },
        {
            id: 10,
            name: "Andrés Muquinche",
            photo: "https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg"
        },
        {
            id: 11,
            name: "Ricardo Otero",
            photo: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/ricardo%20%28FILEminimizer%29.png"
        },
        {
            id: 12,
            name: "Deivis Rivera",
            photo: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/deivis.jpg"
        },
        {
            id: 13,
            name: "Percy Tuncar",
            photo: "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png"
        }
    ],
    headlines: [],
    alternates: []
}

export const Types = {
    addHeadline: 'ADD_HEADLINE',
    addAlternate: 'ADD_ALTERNATE',
    removeHeadline: 'REMOVE_HEADLINE',
    removeAlternate: 'REMOVE_AlTERNATE'
}


export const trainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.addHeadline:
            return {
                ...state,
                headlines: state.headlines.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case Types.addAlternate:
            return{
                ...state,
                alternates: state.alternates.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case Types.removeHeadline:
            return {
                ...state,
                headlines: state.headlines.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        case Types.removeAlternate:
            return {
                ...state,
                alternates: state.alternates.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        default:
            return state;
    }
}