
  class tratamientoslist {
        
    constructor( tratamientos, precio, stock) {


             this.nombre = tratamientos
             this.precio = precio
             this.stock = stock

             }
                 
    datoTratamiento() {

            console.log("Lista de Tratamientos:");
            console.log("Tratamiento: ", this.nombre);
            console.log("Precio: ", this.precio);
            console.log("Numero de tratamientos disponible: ", this.stock);
            console.log("<--------------------->");
        

     }
 
   get_stock() {
        if (this.stock <= 0) {
            return false;
        }
        else {

          return true;
        }


   }


  }

   let listaTratamientos = []

    listaTratamientos.push( new tratamientoslist("Abrillantado", 20000 , 9) );
    listaTratamientos.push( new tratamientoslist("Acrilico", 32000 , 5) );
    listaTratamientos.push( new tratamientoslist("Ceramico", 52000 , 2) );

   /* for (let i = 0; i < 3 ; i = i + 1) {
           
         let tratamientos = prompt ("Ingrese el nombre del tratamiento para agregar a la lista")
         let precio = parseInt(prompt("Precio del tratamiento"));
         let stock = parseInt(prompt("Numero de tratamientos disponibles"));


         let tratamientosAgregado = new tratamientoslist (tratamientos, precio, stock);
         listaTratamientos.push(tratamientosAgregado);
   }
*/
       
      for ( let tratamientoss of listaTratamientos ) { 

            tratamientoss.datoTratamiento();
          

      }



function BuscarTratamientos( tratamientos ){

    return tratamientos.nombre == tratamiento

       

} 



function calcularCuotaTratamiento(pago, cuotas) {

  cuotas = parseInt(cuotas);

    if (cuotas == 3) {
      let cuota = pago * 0.2;
      return cuota;
  
    } else if (cuotas == 6) {
      let cuota = pago * 0.5;
      return cuota;
  
    } else if (cuotas == 12) {
      let cuota = pago * 0.8;
      return cuota;
  
    } else if (pagos == "efectivo") {
      let cuota = pago;
      return cuota;
    }
  }
  
  // ---- PRECIOS DE PRODUCTOS ----- //
  /*
  const precio_abrillantado = 20000;
  const precio_acrilico = 32000;
  const precio_ceramico = 54000;
  */
  // ---- VARIABLES ---- //
  let cuotas = 0;
  let menu = 0;
  let pagos = 0;
  
  console.log("Bienvendios a CarDetaling");
  
  while (menu != "fin") {
  
    
    // -------------------------------- INGRESO A LA LISTA ---------------------------------- //
  

    menu = prompt( 'Ingrese "lista" para ver los tratamientos disponibles o "fin" para terminar' );
  
      if (menu != "fin") {
      {

  
      // --------------------------------- SELECCION DE TRATAMIENTO ----------------------------- //
      
 
        tratamiento = prompt( "Ingrese el nombre del tratamiento para seleccionarlo\n Abrillantado: $20000\n Acrilico: $32000\n Ceramico: $54000" );
        
        
        console.log("Tratamiento seleccionado: " + tratamiento);
  
        pagos = prompt("¿Como abonaras?, ¿Tarjeta o Efectivo? ");
      }
  

      // ------------------------------------------   EFECTIVO   ---------------------------------------------- //
  
     
      if (pagos == "efectivo" || pagos == "Efectivo") {
        if (tratamiento == "Abrillantado" || tratamiento == "abrillantado") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $" + listaTratamientos.find(BuscarTratamientos).precio) ;
  
        }
  
        else if (tratamiento == "Acrilico" || tratamiento == "acrilico") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $",listaTratamientos.find(BuscarTratamientos).precio) ;
  
        }
  
        else if (tratamiento == "Ceramico" || tratamiento == "ceramico") {
  
          console.log( "El precio de tu tratamiento en efectivo es: $",listaTratamientos.find(BuscarTratamientos).precio) ;
  
        }
  
      }
  

      // ------------------------------------------- TARJETA -------------------------------------------- //
  
      else if (pagos == "tarjeta" || pagos == "Tarjeta" ) {
  
        
        cuotas = prompt("En cuantas cuotas desea abonar: 3, 6 o 12 ?");
  
        if (tratamiento == "Abrillantado" || tratamiento == "abrillantado") {
          let precioTratamiento = listaTratamientos.find(BuscarTratamientos).precio;
          let cuota = calcularCuotaTratamiento(precioTratamiento, cuotas);
          let precioFinal = precioTratamiento + cuota;
          
          console.log( "El precio final en",cuotas,"cuotas es $", precioFinal);
          console.log( "El precio de cada cuota es: $", cuota);
  
        }
  
        else if (tratamiento == "Acrilico" || tratamiento == "acrilico") {

          let precioTratamiento = listaTratamientos.find(BuscarTratamientos).precio;
          let cuota = calcularCuotaTratamiento(precioTratamiento, cuotas);
          let precioFinal = precioTratamiento + cuota;

          console.log( "El precio final en",cuotas,"cuotas es $", precioFinal);
          console.log( "El precio de cada cuota es: $", cuota);
  
        }
  
        else if (tratamiento == "Ceramico" || tratamiento == "ceramico") {

          let precioTratamiento = listaTratamientos.find(BuscarTratamientos).precio;
          let cuota = calcularCuotaTratamiento(precioTratamiento, cuotas);
          let precioFinal = precioTratamiento + cuota;

          console.log( "El precio final en",cuotas,"cuotas es $", precioFinal);
          console.log( "El precio de cada cuota es: $", cuota);
  
        }
      }
    }
  

    // ----------------------------------------------- FIN ----------------------------------------------- //
  else {
        console.log("Refresque la pagina para comenzar a comprar");
    }
  }
