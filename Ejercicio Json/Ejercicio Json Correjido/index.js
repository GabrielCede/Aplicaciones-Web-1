var app={};
var miCallback = datos =>{
    console.log(datos);
    app.estudiantes=datos;
    var html = ""
    html+="<h2>Estudiantes</h2>"
    app.estudiantes.map(estudiante => {
        for (let propiedad of Object.keys(estudiante)){
            html+="<li>"+propiedad+": "+estudiante[propiedad]+"</li>";
        }
        html+="<hr/>"
    })

    document.getElementById("results").innerHTML=html; 
}