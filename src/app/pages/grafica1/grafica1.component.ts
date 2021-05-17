import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  tituloVentas:string = "Ventas"
  tituloClientes:string = "Clientes"
  tituloCitas:string = "Citas Exitosas"
  tituloCitasCanceladas:string = "Citas Canceladas"

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
  public labels2: string[] = ['Asociados', 'Premium', 'Basico']  
  public labels3: string[] = ['Exitosas', 'Canceladas', 'Pendientes'] 
  public labels4: string[] = ['Incumplimiento', 'Compromisos', 'Llegadas tarde'] 


  public dataVentas = [
    [350, 450, 100]
  ];

  public dataClientes = [
    [250, 350, 100]
  ];

  public dataCitas = [
    [450, 350, 100]
  ];

  public dataCitasCanceladas = [
    [100, 250, 150]
  ];
}
