import {robots} from './robots.js'

console.log(robots[0].id);
console.log(robots[0].name);
console.log(robots[0].weapon);


const { id, series, name, sprite1, avatar} =robots[0];

console.log(id);
console.log(series);
console.log(name);
console.log(sprite1);
console.log(avatar);



    const getRobotByiD = (id="013")=> {
        return robots.find((robot)=>{
            return robot.id===id;
        });
        }
        
        let robot = getRobotByiD("013");
        console.log(robot)
    


    const getRobotBySeries = (series=3)=>{
        return robots.filter((robot)=>{
            return robot.series===series;
        });
    }

    robot = getRobotBySeries(2);
    console.log(robot)


    const createRobotCard = (robot)=>{

        const cardContainer = document.getElementById("card-container");

        //desestruccturacion
        const  {name,weapon,avatar}=robot;

        // crear elementos html para la card de boostrap
        const card = document.createElement("div");
        card.classList.add("col-md-4,mb-4");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("src",avatar);
        image.setAttribute("alt",name);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent=name;

        const weaponInfo = document.createElement("9");
        weaponInfo.classList.add("card-text");
        weaponInfo.textContent = 'weapon: {wapon}';

        //construir la estructura de la card
        cardBody.appendChild(title);
        cardBody.appendChild(weaponInfo);

        cardInner.appendChild(image);
        cardInner.appendChild(cardBody);


        card.appendChild(cardInner);

        return card;

    };

    //crear y agregar cards para cada robot al contenedor 

    const getRobots = (robots) => {
        const robotCards = robots.map(createRobotCard);
        robotCards.forEach(card => {
            cardContainer.appendChild(card);
        });
    }

    //llamar a la funcion para mostrar las cartas

    getRobots(robots);