
import Car from './car'
import data from './data'


export default function App (){

  const cars = data.map((motor) =>{
    return(
      <Car 
      key= {motor.id}
      {...motor} />
    )
  })

  return (
    <>
      <Car name= "hondas" color = "red" img = "image 1"/>
      <Car />
      {cars}
    </>
  )
}
