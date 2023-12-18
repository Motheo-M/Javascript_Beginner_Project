// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
    const mernStack = ['MongoDB', 'Express', 'React', 'Node']

    // console.log('While Loop')
    // let i = 0
    // while(i <= 10) {
    //     console.log(i)
    //     i++
    // }

    // console.log('For Loop')
    // for (i = 0; i <= 10; i++) {
    //     console.log(i)
    // }

    // console.log('Do While')
    
    // i = 0
    // do {
    //     console.log(i)
    //     i++
    // } while (i <= 10)


    // console.log('2')

    // console.log('While Loop')
    // i = 10
    // while(i >= 0) {
    //     console.log(i)
    //     i--
    // }

    // console.log('For Loop')
    // for (i = 10; i >= 0; i--) {
    //     console.log(i)
    // }

    // console.log('Do While')
    
    // i = 10
    // do {
    //     console.log(i)
    //     i--
    // } while (i >= 0)

    // let i = 1
    // while(i <= 7) {

    //   const newArr = Array(i)
    //   newArr.fill('#')
    //   console.log(newArr.join(''))
    //   i++
    // }

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    console.log(result)